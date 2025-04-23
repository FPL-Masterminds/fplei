import { BarChart3, Crown, ShieldCheck, TrendingUp } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Crown className="h-6 w-6 text-primary" />,
      title: "Elite Manager Insights",
      description: "Access exclusive analysis from top 50 ranked FPL managers worldwide"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Deep statistical analysis beyond the basic FPL metrics for informed decisions"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: "Price Prediction",
      description: "Stay ahead with AI-powered player price change predictions and trends"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Captain Analysis",
      description: "Data-driven captain picks with detailed underlying statistics"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">
            <span className="text-[#2E0032]">Premium </span>
            <span className="bg-gradient-to-r from-[#2E0032] via-[#00FF8C] to-[#2E0032] text-transparent bg-clip-text">
              FPL Analytics
            </span>
            <span className="text-[#2E0032]"> at Your Fingertips</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform provides exclusive insights that give you the edge in Fantasy Premier League. Used by mini-league champions and top 10k managers worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-muted/50 to-background p-6 rounded-3xl overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}