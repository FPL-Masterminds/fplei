import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNav />
      
      <main className="flex-1">
        <HeroSection
          title="Welcome to FPL Elite Insights"
          subtitle={{
            regular: "Transform your ",
            gradient: "Fantasy Premier League",
          }}
          description="Gain access to premium analytics from the world's top 50 Fantasy Premier League managers. Climb the ranks with data-driven decisions."
          ctaText="Get Started"
          ctaHref="/signup"
          bottomImage={{
            light: "https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg",
            dark: "https://images.pexels.com/photos/3829227/pexels-photo-3829227.jpeg"
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
        
        <FeaturesSection />
      </main>
      
      <Footer />
    </div>
  );
}