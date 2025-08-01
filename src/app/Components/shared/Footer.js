"use client";

import React from "react";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">AgriCart</span>
          </div>
          <div className="text-gray-400 text-center md:text-right">
            <p>&copy; 2025 AgriCart. Connecting communities through fresh agriculture.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
