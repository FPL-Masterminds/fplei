export type SubscriptionStatus = 'active' | 'trialing' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'unpaid' | 'paused' | null;

export interface Subscription {
  id: string;
  userId: string;
  status: SubscriptionStatus;
  createdAt: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
}

export interface UserSession {
  user: {
    id: string;
    email: string;
  } | null;
  subscription: Subscription | null;
}