import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="container relative mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-[#2E0032]">
            Transform Your Data into 
            <span className="text-[#00FF87]"> Actionable Insights</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Powerful analytics platform that helps you make better decisions with data.
            Start your journey to data-driven success today.
          </p>
          <div className="mt-10">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}