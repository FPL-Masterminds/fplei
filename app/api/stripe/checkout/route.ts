import { stripe, getStripeSession } from "@/lib/stripe";
import { getUserSession } from "@/lib/auth";
import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(req: Request) {
  try {
    const { userId, email } = await req.json();
    
    if (!userId || !email) {
      return NextResponse.json(
        { message: "User ID and email are required" },
        { status: 400 }
      );
    }

    // Use the price ID for the monthly subscription (£4.99)
    // In a real implementation, you would store this in an environment variable
    const priceId = process.env.STRIPE_PRICE_ID;
    
    if (!priceId) {
      return NextResponse.json(
        { message: "Stripe price ID is not configured" },
        { status: 500 }
      );
    }

    const session = await getStripeSession({
      priceId,
      userId,
      userEmail: email,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { message: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}