import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { MainNav } from "@/components/navigation/main-nav";
import Link from "next/link";
import { ArrowRight, BarChart3, Medal, ShieldCheck, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Elevate Your <span className="text-primary">Fantasy Premier League</span> Game
              </h1>
              <p className="text-xl text-muted-foreground">
                Gain access to premium analytics from the world's top 50 Fantasy Premier League managers. Climb the ranks with data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link href="/signup">
                    Subscribe Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/login">
                    Login to Account
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
              <div className="absolute transform -translate-y-1/4">
                <BarChart3 className="h-32 w-32 md:h-40 md:w-40 text-primary" />
              </div>
              <div className="absolute bottom-8 right-8 bg-card p-4 rounded-lg shadow-lg">
                <p className="font-semibold">Only £4.99/month</p>
                <p className="text-sm text-muted-foreground">Cancel anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose FPL Elite Insights?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">Get access to proprietary metrics and insights that go beyond the basic stats.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Medal className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Recommendations</h3>
              <p className="text-muted-foreground">Weekly player picks and transfer suggestions from top-ranked FPL managers.</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Content</h3>
              <p className="text-muted-foreground">Premium strategies, fixture analysis, and insider tips not available anywhere else.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your FPL Performance?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our community of elite FPL managers and take your game to the next level.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}