import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { UserSession } from "@/types";

export async function getUserSession(): Promise<UserSession> {
  const supabase = createServerSupabaseClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session?.user) {
    return { user: null, subscription: null };
  }
  
  // Check if user has an active subscription
  const { data: subscription } = await supabase
    .from("subscriptions")
    .select("*")
    .eq("user_id", session.user.id)
    .eq("status", "active")
    .single();
  
  return {
    user: {
      id: session.user.id,
      email: session.user.email || "",
    },
    subscription: subscription ? {
      id: subscription.id,
      userId: subscription.user_id,
      status: subscription.status,
      createdAt: subscription.created_at,
      stripeCustomerId: subscription.stripe_customer_id,
      stripeSubscriptionId: subscription.stripe_subscription_id,
    } : null,
  };
}

export async function requireAuth() {
  const cookieStore = cookies();
  const supabase = createServerSupabaseClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (!session) {
    redirect("/login");
  }
  
  return session;
}

export async function requireUnauth() {
  const cookieStore = cookies();
  const supabase = createServerSupabaseClient();
  
  const { data: { session } } = await supabase.auth.getSession();
  
  if (session) {
    redirect("/dashboard");
  }
}

export async function requireSubscription() {
  const userSession = await getUserSession();
  
  if (!userSession.user) {
    redirect("/login");
  }
  
  if (!userSession.subscription || userSession.subscription.status !== "active") {
    redirect("/dashboard");
  }
  
  return userSession;
}