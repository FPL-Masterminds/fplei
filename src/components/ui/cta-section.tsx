import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#2E0032]">
            Ready to get 
            <span className="text-[#00FF87]"> started?</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join thousands of businesses already using Analytics Pro to make better decisions
          </p>
          <div className="mt-10">
            <Button size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}