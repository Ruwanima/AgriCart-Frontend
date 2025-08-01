"use client";

import React, { useState, useEffect } from 'react';
import Navbar from "../../Components/shared/Navbar";
import Footer from "../../Components/shared/Footer";

import { Leaf, Shield, Heart, Globe, Lightbulb, ArrowRight, Users, Award, Target } from "lucide-react";

const AgriCartAbout = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We ensure every product meets the highest standards of freshness and quality through rigorous vendor verification and customer feedback systems."
    },
    {
      icon: Heart,
      title: "Community First",
      description: "Supporting local farmers and shop owners is at the heart of everything we do. We believe in strengthening local economies and communities."
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "By connecting customers with local producers, we reduce transportation costs and environmental impact while promoting sustainable agriculture."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously innovate to make agricultural commerce more efficient, transparent, and accessible for everyone in the supply chain."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Agricultural engineer with 10+ years in sustainable farming and technology innovation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=400&q=80"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former tech lead at major e-commerce platforms, passionate about agricultural technology.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      bio: "Supply chain expert dedicated to connecting farmers with consumers efficiently.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      name: "David Thompson",
      role: "Head of Partnerships",
      bio: "Community organizer focused on building relationships with local agricultural businesses.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    }
  ];

  const milestones = [
    { year: "2022", title: "Company Founded", desc: "AgriCart was born from a vision to digitize local agriculture", icon: Target },
    { year: "2023", title: "First 100 Shops", desc: "Reached our first milestone of 100 partner shops", icon: Users },
    { year: "2024", title: "10K Customers", desc: "Celebrated serving over 10,000 happy customers", icon: Heart },
    { year: "2025", title: "Expansion Phase", desc: "Expanding to new regions and adding innovative features", icon: Award }
  ];

  const stats = [
    { number: "500+", label: "Partner Shops", desc: "Local agricultural businesses" },
    { number: "10K+", label: "Happy Customers", desc: "Satisfied community members" },
    { number: "50K+", label: "Orders Delivered", desc: "Fresh products delivered" },
    { number: "15+", label: "Cities Served", desc: "Growing network coverage" }
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
            About AgriCart
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-black">Revolutionizing</span>
            <span className="block bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              Local Agriculture
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to bridge the gap between local agricultural producers and consumers, 
            creating sustainable communities while ensuring fresh, quality products reach every table.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center">
              Join Our Mission
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 hover:text-white transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-black rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-200 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  AgriCart was born from a simple observation: despite living in agricultural regions, 
                  many consumers struggle to access fresh, local produce while local farmers and shop 
                  owners face challenges reaching their target market.
                </p>
                <p>
                  Founded in 2022, we set out to create a digital bridge that would benefit everyone 
                  in the agricultural supply chain. Our platform empowers local shops to showcase 
                  their products digitally while giving customers convenient access to the freshest 
                  agricultural products in their area.
                </p>
                <p>
                  Today, we're proud to serve over 500 local shops and 10,000+ customers, facilitating 
                  more than 50,000 successful transactions that strengthen local economies and promote 
                  sustainable agriculture practices.
                </p>
              </div>
              <button className="mt-8 group bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all transform hover:scale-105 flex items-center">
                Read Full Story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Fresh • Local • Digital</h3>
                  <p className="text-green-700">Connecting communities through technology</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-black rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-300 rounded-full opacity-60 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at AgriCart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform local agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <milestone.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-black mb-3">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default AgriCartAbout;