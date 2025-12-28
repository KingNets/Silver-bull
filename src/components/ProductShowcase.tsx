import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, ArrowRight } from "lucide-react";

export function ProductShowcase() {
  const products = [
    {
      id: 1,
      name: "American Silver Eagle",
      price: "$32.50",
      image: "https://images.unsplash.com/photo-1607844858525-b5a971667db3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBjb2lufGVufDF8fHx8MTc1ODM5NzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "1 oz .999 Fine Silver",
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      name: "Silver Britannia",
      price: "$31.75",
      image: "https://images.unsplash.com/photo-1643046434270-c7e2afeab8eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBjb2lufGVufDF8fHx8MTc1ODM5NzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "1 oz .999 Fine Silver",
      rating: 4.7,
      popular: false
    },
    {
      id: 3,
      name: "Canadian Maple Leaf",
      price: "$33.20",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBjb2lufGVufDF8fHx8MTc1ODM5NzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "1 oz .9999 Fine Silver",
      rating: 4.9,
      popular: true
    },
    {
      id: 4,
      name: "Silver Bar 10 oz",
      price: "$315.00",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWx2ZXIlMjBiYXJ8ZW58MXx8fHwxNzU4Mzk3MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "10 oz .999 Fine Silver",
      rating: 4.6,
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl text-white">
            Featured Silver Products
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium silver coins, bars, and collectibles. 
            Each product comes with guaranteed authenticity and competitive pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="bg-gray-800 border-gray-700 group hover:bg-gray-750 transition-colors">
              <CardHeader className="p-4">
                <div className="relative">
                  {product.popular && (
                    <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 text-xs rounded-full z-10">
                      Popular
                    </div>
                  )}
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="space-y-3">
                  <div>
                    <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {product.description}
                    </CardDescription>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white text-sm">{product.rating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white text-xl">{product.price}</span>
                    <Button size="sm" className="bg-white text-black hover:bg-gray-200">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-black">
            View All Products
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}