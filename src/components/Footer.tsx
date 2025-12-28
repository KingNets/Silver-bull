import { Separator } from "./ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl tracking-wider">Rim Invest</h3>
              <p className="text-xs text-gray-400">PRECIOUS METALS</p>
            </div>
            <p className="text-gray-300 text-sm">
              Leading precious metals dealer specializing in silver trading for businesses 
              and private investors worldwide.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <div>
                  <p>Main: +372 5049933</p>
                  <p>Business: +372 53338733</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Kaimo.rim@gmail.com</span>
              </div>
              <div className="mt-4">
                <p className="text-xs">Tallinn, Estonia</p>
              </div>
              <div className="mt-4">
                <p className="text-xs">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              </div>
              <div className="mt-4">
                <p className="text-xs">Registration Number: 10042991</p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <p>&copy; 2024 Rim Invest Precious Metals. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>Licensed & Insured Precious Metals Dealer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}