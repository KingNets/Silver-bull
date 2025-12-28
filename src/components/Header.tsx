import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-white">
              <h1 className="text-xl tracking-wider">Rim Invest</h1>
              <p className="text-xs text-gray-400">PRECIOUS METALS</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-white hover:text-black">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">
                About Us
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white">
                Contact
              </a>
              <a href="#privacy" className="block px-3 py-2 text-gray-300 hover:text-white">
                Privacy Policy
              </a>
              <div className="px-3 py-2">
                <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-white hover:text-black">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}