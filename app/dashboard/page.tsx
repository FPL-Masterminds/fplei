import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { PageHeader } from "@/components/ui/page-header";
import { getUserSession, requireAuth } from "@/lib/auth";
import { SubscriptionCTA } from "./subscription-cta";
import { DashboardContent } from "./dashboard-content";

export default async function DashboardPage() {
  // This will redirect to login if not authenticated
  await requireAuth();
  
  // Get user and subscription data
  const userSession = await getUserSession();
  
  const hasSubscription = userSession.subscription?.status === "active";
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav userSession={userSession} />
      
      <div className="flex-1 container mx-auto py-10 px-4">
        <div className="space-y-10">
          <PageHeader 
            title="Dashboard" 
            description="Welcome to your FPL Elite Insights dashboard."
          />
          
          {hasSubscription ? (
            <DashboardContent userSession={userSession} />
          ) : (
            <SubscriptionCTA userSession={userSession} />
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}