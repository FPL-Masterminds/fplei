"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { UserSession } from "@/types";
import { Crown, LockKeyhole, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SubscriptionCTA({ userSession }: { userSession: UserSession }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubscribe = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userSession.user?.id,
          email: userSession.user?.email,
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to create checkout session");
      }
      
      // Redirect to Stripe checkout
      router.push(data.url);
    } catch (error) {
      console.error("Checkout error:", error);
      setIsLoading(false);
    }
  };
  
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LockKeyhole className="h-5 w-5 text-muted-foreground" />
            <span>Upgrade to Premium</span>
          </CardTitle>
          <CardDescription>
            Access exclusive FPL insights and gain a competitive edge
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              You&apos;re currently on the free plan. Upgrade to Premium to unlock all features and get the competitive edge in your FPL leagues.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Advanced Stats</h4>
                  <p className="text-sm text-muted-foreground">Deep analytics beyond the basic FPL metrics</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Expert Picks</h4>
                  <p className="text-sm text-muted-foreground">Weekly recommendations from top FPL managers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Performance Projections</h4>
                  <p className="text-sm text-muted-foreground">Data-driven forecasts for upcoming gameweeks</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <ShieldCheck className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Premium Support</h4>
                  <p className="text-sm text-muted-foreground">Priority responses to your FPL questions</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={handleSubscribe} 
            disabled={isLoading}
            className="w-full sm:w-auto"
          >
            {isLoading ? "Processing..." : "Subscribe Now - £4.99/month"}
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Crown className="h-5 w-5" />
            <span>Premium Benefits</span>
          </CardTitle>
          <CardDescription className="text-primary-foreground/70">
            What you&apos;ll get with your subscription
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 mt-0.5" />
              <span>Exclusive weekly insights</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 mt-0.5" />
              <span>Player form analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 mt-0.5" />
              <span>Fixture difficulty ratings</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 mt-0.5" />
              <span>Captain recommendations</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 mt-0.5" />
              <span>Differentials & hidden gems</span>
            </li>
            <li className="flex items-start gap-2">
              <ShieldCheck className="h-5 w-5 mt-0.5" />
              <span>Unlimited premium content access</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-primary-foreground/70">
            Cancel anytime. No long-term commitments.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}