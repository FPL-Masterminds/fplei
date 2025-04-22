import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export const getStripeSession = async ({
  priceId,
  userId,
  userEmail,
}: {
  priceId: string;
  userId: string;
  userEmail: string;
}) => {
  const session = await stripe.checkout.sessions.create({
    customer_email: userEmail,
    billing_address_collection: 'auto',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    payment_method_types: ['card'],
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`,
    metadata: {
      userId,
    },
  });

  return session;
};