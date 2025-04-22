import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getUserSession, requireAuth } from "@/lib/auth";

export default async function SuccessPage() {
  // This will redirect to login if not authenticated
  await requireAuth();
  
  // Get user session for the MainNav
  const userSession = await getUserSession();
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav userSession={userSession} />
      
      <div className="flex-1 container mx-auto py-16 px-4 flex items-center justify-center">
        <div className="max-w-md text-center space-y-6">
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-500" />
            </div>
          </div>
          
          <PageHeader 
            title="Subscription Successful!" 
            description="Thank you for subscribing to FPL Elite Insights Premium."
            className="space-y-3"
          />
          
          <div className="text-muted-foreground space-y-2 text-sm">
            <p>Your payment has been processed successfully.</p>
            <p>You now have full access to all premium features and content.</p>
          </div>
          
          <div className="pt-6 space-y-4">
            <Button asChild size="lg">
              <Link href="/dashboard">
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <div>
              <Button variant="outline" asChild>
                <Link href="/premium">
                  Explore Premium Stats
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}