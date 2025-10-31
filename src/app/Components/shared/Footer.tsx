"use client"

import React from "react"
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
  Shield,
  Truck,
} from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold">AgriCart</span>
            </div>
            <p className="text-green-100 mb-6 leading-relaxed">
              To offer our ultimate gratitude towards this amazing nature by
              providing the best agricultural plants and products in order to
              sustain a greener future.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 bg-green-600 hover:bg-green-500 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-100">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Shop",
                "Blog",
                "Contact Us",
                "Help Center",
                "Farming Tips",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-100">
              Categories
            </h3>
            <ul className="space-y-3">
              {[
                "Fruit Plants",
                "Forest Plants",
                "Medicinal Plants",
                "Flowers & Exotic Plants",
                "Spice Plants",
                "Cactus & Succulents",
              ].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors duration-200"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-green-100">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-green-200">
                    No 205/1, Jaya Mawatha, Kandawala,
                  </p>
                  <p className="text-green-200">Katana, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-300" />
                <a
                  href="tel:+94777994859"
                  className="text-green-200 hover:text-white transition-colors duration-200"
                >
                  +94 777 99 48 59
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300" />
                <a
                  href="mailto:info@agricart.lk"
                  className="text-green-200 hover:text-white transition-colors duration-200"
                >
                  info@agricart.lk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-300" />
                <a
                  href="mailto:tmcagricart@gmail.com"
                  className="text-green-200 hover:text-white transition-colors duration-200"
                >
                  tmcagricart@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods & Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-green-600">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Payment Methods */}
            <div>
              <h4 className="text-sm font-semibold text-green-100 mb-3">
                Payment Methods:
              </h4>
              <div className="flex space-x-3">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-red-600 font-bold text-xs">MC</span>
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-xs">AMEX</span>
                </div>
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-green-200">
                <Shield className="w-5 h-5 text-green-300" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-green-200">
                <Truck className="w-5 h-5 text-green-300" />
                <span className="text-sm">Island-wide Delivery</span>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col space-y-2 text-center lg:text-right">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition-colors duration-200"
                >
                  Terms and Conditions
                </a>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-green-200 hover:text-white transition-colors duration-200"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-green-900 border-t border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-green-300">
            <p>&copy; {new Date().getFullYear()} AgriCart. All rights reserved.</p>
            <p>Connecting communities through fresh agriculture.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
