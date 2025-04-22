import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { PageHeader } from "@/components/ui/page-header";
import { requireSubscription } from "@/lib/auth";
import { PremiumStats } from "./premium-stats";

export default async function PremiumPage() {
  // This will redirect to dashboard if not subscribed
  const userSession = await requireSubscription();
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav userSession={userSession} />
      
      <div className="flex-1 container mx-auto py-10 px-4">
        <div className="space-y-10">
          <PageHeader 
            title="Premium Stats" 
            description="Exclusive Fantasy Premier League stats and insights."
          />
          
          <PremiumStats />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}