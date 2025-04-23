import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#2E0032]">Monthly Plan</h2>
            
            <div className="mt-4 flex items-baseline justify-center gap-x-2">
              <span className="text-4xl font-bold">£4.99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            
            <p className="mt-4 text-muted-foreground">
              Unlock all features with one low monthly fee.
            </p>
            
            <Button asChild className="mt-8 w-full">
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}