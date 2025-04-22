import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );
  } catch (error: any) {
    console.error(`Webhook Error: ${error.message}`);
    return NextResponse.json(
      { message: `Webhook Error: ${error.message}` },
      { status: 400 }
    );
  }

  const supabase = createServerSupabaseClient();

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as any;
    const userId = session.metadata.userId;
    const stripeCustomerId = session.customer;
    const stripeSubscriptionId = session.subscription;

    // Store or update the subscription information in Supabase
    const { error } = await supabase
      .from("subscriptions")
      .upsert({
        user_id: userId,
        status: "active",
        stripe_customer_id: stripeCustomerId,
        stripe_subscription_id: stripeSubscriptionId,
      })
      .eq("user_id", userId);

    if (error) {
      console.error("Error updating subscription:", error);
      return NextResponse.json(
        { message: "Error updating subscription" },
        { status: 500 }
      );
    }
  }

  // Handle subscription status changes
  if (event.type === "customer.subscription.updated" || 
      event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as any;
    const stripeSubscriptionId = subscription.id;
    const status = subscription.status;

    // Find the user with this subscription
    const { data: subscriptionData, error: findError } = await supabase
      .from("subscriptions")
      .select("user_id")
      .eq("stripe_subscription_id", stripeSubscriptionId)
      .single();

    if (findError || !subscriptionData) {
      console.error("Error finding subscription:", findError);
      return NextResponse.json(
        { message: "Error finding subscription" },
        { status: 500 }
      );
    }

    // Update the subscription status
    const { error: updateError } = await supabase
      .from("subscriptions")
      .update({ status })
      .eq("stripe_subscription_id", stripeSubscriptionId);

    if (updateError) {
      console.error("Error updating subscription status:", updateError);
      return NextResponse.json(
        { message: "Error updating subscription status" },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ received: true });
}