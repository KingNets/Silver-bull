import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Award, Globe, Shield, Users } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Certified Authentic",
      description: "All silver products are certified and guaranteed authentic by accredited assayers."
    },
    {
      icon: Award,
      title: "Competitive Pricing",
      description: "Best-in-market pricing with transparent fees and no hidden costs for all transactions."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced team provides personalized service and market insights."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients worldwide with secure shipping and local market expertise."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Why Choose SilverStock</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-gray-400" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}