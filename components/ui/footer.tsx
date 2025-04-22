import Link from "next/link";
import { BarChart3 } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-primary" />
            <span className="font-semibold">FPL Elite Insights</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Premium insights for Fantasy Premier League players
          </p>
        </div>
        
        <div className="flex gap-8 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-primary transition-colors">
            Terms
          </Link>
        </div>
        
        <div className="text-sm text-muted-foreground">
          © {year} FPL Elite Insights
        </div>
      </div>
    </footer>
  );
}