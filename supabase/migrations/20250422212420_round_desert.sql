/*
  # Create users and subscriptions tables

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `status` (text)
      - `created_at` (timestamp)
      - `stripe_customer_id` (text)
      - `stripe_subscription_id` (text)
  
  2. Security
    - Enable RLS on `subscriptions` table
    - Add policies for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  status text NOT NULL,
  created_at timestamptz DEFAULT now(),
  stripe_customer_id text,
  stripe_subscription_id text
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow users to read only their own subscription data
CREATE POLICY "Users can read own subscriptions"
  ON subscriptions
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow service role to manage all subscription data
CREATE POLICY "Service role can manage all subscriptions"
  ON subscriptions
  FOR ALL
  TO service_role
  USING (true);