import { Footer } from "@/components/ui/footer";
import { MainNav } from "@/components/navigation/main-nav";
import { PageHeader } from "@/components/ui/page-header";
import { getUserSession } from "@/lib/auth";
import { BarChart, ListChecks, Users } from "lucide-react";

export default async function AboutPage() {
  const userSession = await getUserSession();
  
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav userSession={userSession} />
      
      <div className="flex-1 container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-10">
          <PageHeader 
            title="About FPL Elite Insights" 
            description="The story behind our premium FPL analysis platform."
          />
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead">
              FPL Elite Insights was founded by a team of Fantasy Premier League enthusiasts who have consistently ranked in the top 1% of managers worldwide.
            </p>
            
            <p>
              After years of developing advanced models and analytical approaches for our own teams, we decided to create a platform that would help other managers gain the competitive edge in their mini-leagues and overall rankings.
            </p>
            
            <h2 className="flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              <span>Our Team</span>
            </h2>
            
            <p>
              Our team consists of data scientists, sports analysts, and passionate FPL players who combine statistical analysis with football knowledge to deliver insights that go beyond the basic metrics available elsewhere.
            </p>
            
            <p>
              We closely follow matches, analyze underlying statistics, and translate complex data into actionable recommendations for your FPL team.
            </p>
            
            <h2 className="flex items-center gap-2">
              <BarChart className="h-6 w-6 text-primary" />
              <span>Our Approach</span>
            </h2>
            
            <p>
              What sets us apart is our proprietary analytical models that consider factors often overlooked by conventional metrics:
            </p>
            
            <ul>
              <li>Expected goals and assists adjusted for opposition strength</li>
              <li>Tactical analysis of team setups and how they affect individual performances</li>
              <li>Detailed fixture difficulty ratings with home/away considerations</li>
              <li>Form indicators that weight recent performances appropriately</li>
              <li>Penalty, set-piece, and bonus point potential analysis</li>
            </ul>
            
            <h2 className="flex items-center gap-2">
              <ListChecks className="h-6 w-6 text-primary" />
              <span>Our Promise</span>
            </h2>
            
            <p>
              We're committed to providing the highest quality FPL insights available. Our subscription model allows us to focus entirely on delivering value rather than pushing advertisements or clickbait content.
            </p>
            
            <p>
              With FPL Elite Insights, you'll get:
            </p>
            
            <ul>
              <li>Weekly premium analysis before each gameweek deadline</li>
              <li>Data-driven captain and transfer recommendations</li>
              <li>Identification of differential players before they become template</li>
              <li>Advanced statistics and visualizations to inform your decisions</li>
              <li>A competitive edge in your mini-leagues and overall rank</li>
            </ul>
            
            <p>
              Ready to take your FPL game to the next level? Join thousands of managers who are already benefiting from our premium insights.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}