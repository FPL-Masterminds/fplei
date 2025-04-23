import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Advanced Analytics",
    description: "Get deep insights into your data with our advanced analytics tools"
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Real-time Tracking",
    description: "Monitor your metrics in real-time with instant updates and alerts"
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Visual Reports",
    description: "Beautiful, easy-to-understand visual reports and dashboards"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Predictive Analysis",
    description: "AI-powered predictions to help you stay ahead of trends"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-[#2E0032]">
            Everything you need to 
            <span className="text-[#00FF87]"> succeed</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our comprehensive suite of tools and features helps you make the most of your data
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}