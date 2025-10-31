"use client"

import React, { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"
import Link from "next/link"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
              AgriCart
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/Pages/about-us" className="text-gray-700 hover:text-green-600 transition-colors">
              About us
            </Link>
            <Link href="/Pages/order-now" className="text-gray-700 hover:text-green-600 transition-colors">
              Order now
            </Link>
            <Link href="/Pages/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105">
              Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-green-600">
              Home
            </Link>
            <Link href="/Pages/about-us" className="block px-3 py-2 text-gray-700 hover:text-green-600">
              About Us
            </Link>
            <Link href="/Pages/contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">
              Contact
            </Link>
            <button className="w-full text-left bg-black text-white px-3 py-2 rounded-lg mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
