import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Shield, TrendingUp, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl leading-tight">
                Premium Silver Bullion for{" "}
                <span className="text-gray-400">Businesses</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-lg">
                Secure your financial future with our premium silver bullion. 
                Professional trading services with competitive pricing and guaranteed authenticity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-sm">Certified</h3>
                <p className="text-xs text-gray-400">Authentic Products</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-sm">Competitive</h3>
                <p className="text-xs text-gray-400">Market Pricing</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-sm">Trusted</h3>
                <p className="text-xs text-gray-400">Global Clients</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621028025774-104e1816b176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBidWxsaW9uJTIwYmFyc3xlbnwxfHx8fDE3NTgzOTcyMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Premium silver bullion bars"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}