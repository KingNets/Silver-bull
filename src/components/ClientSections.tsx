import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Building2, Package, Clock } from "lucide-react";

export function ClientSections() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Business Clients Section */}
      <section id="business" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Building2 className="h-6 w-6 text-gray-400" />
                  <span className="text-sm text-gray-400 tracking-wider">BUSINESS CLIENTS</span>
                </div>
                <h2 className="text-3xl md:text-4xl">
                  Silver Bullion for companies
                </h2>
                <p className="text-gray-300 text-lg">
                  Tailored precious metals solutions for companies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Bulk Orders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      Orders from 3000 oz
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Fast Delivery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
                      Expedited shipping and secure logistics
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <Button size="lg" className="bg-white text-black hover:bg-gray-200">
                Request Business Quote
              </Button>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}