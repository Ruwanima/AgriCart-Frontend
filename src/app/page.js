"use client";

import React from "react";
import Navbar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer"; 
import { ArrowRight, Leaf, ShoppingCart, Users } from "lucide-react";

const HomePage = () => {
  const stats = [
    { number: "500+", label: "Local Shops" },
    { number: "10K+", label: "Happy Customers" },
    { number: "50K+", label: "Orders Delivered" }
  ];

  // Map string icons to actual imported components
  const iconMap = {
    ShoppingCart,
    Users,
    Leaf,
  };

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
        {/* Background patterns */}
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Choose AgriCart?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of local agricultural commerce with our innovative platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = iconMap[feature.icon];
              return (
                <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How AgriCart Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to connect with fresh, local agricultural products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Browse Local Shops", desc: "Discover nearby agricultural vendors and their fresh product offerings" },
              { step: "02", title: "Place Your Order", desc: "Select products, customize quantities, and place orders with ease" },
              { step: "03", title: "Fresh Delivery", desc: "Receive your fresh agricultural products with guaranteed quality" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      

      <Footer />
    </div>
  );
};

export default HomePage;
