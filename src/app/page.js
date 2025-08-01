"use client";

import React from "react";
import Navbar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer"; 
import { ArrowRight, Leaf } from "lucide-react";

const HomePage = () => {
  const stats = [
    { number: "500+", label: "Local Shops" },
    { number: "10K+", label: "Happy Customers" },
    { number: "50K+", label: "Orders Delivered" }
  ];

  const features = [
    { icon: "ShoppingCart", title: "Smart Inventory", desc: "Real-time stock management for local shops" },
    { icon: "Users", title: "Connect Locally", desc: "Bridge customers with neighborhood stores" },
    { icon: "Leaf", title: "Fresh Guarantee", desc: "Ensure product freshness and quality" }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-50">
        {/* background patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.05),transparent_50%)]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <Leaf className="w-4 h-4 mr-2" />
            Fresh • Local • Digital
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-black">Connect Local</span>
            <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Fresh Markets
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            AgriCart bridges local shops and customers through a centralized digital marketplace for fresh agricultural products.
            Support local businesses while ensuring quality and freshness.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center">
              Start Shopping
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all">
              Join as Shop Owner
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-black rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Add your other sections here: Features, How It Works, CTA, etc. */}

      <Footer />
    </div>
  );
};

export default HomePage;
