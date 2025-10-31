"use client"

import React, { useState } from "react"
import Navbar from "../../Components/shared/Navbar"
import Footer from "../../Components/shared/Footer"
import { Leaf, ShoppingCart, Plus, Minus, Trash2, ArrowRight, Tag, Truck, Shield, Clock, AlertCircle, CheckCircle, MapPin } from "lucide-react"

const AgriCartShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<any[]>([
    {
      id: 1,
      name: "Organic Tomatoes",
      shop: "Green Valley Farm",
      price: 4.99,
      originalPrice: 5.99,
      quantity: 2,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1546470427-e9754591de16?w=400&q=80",
      inStock: true,
      freshness: "Harvested Today",
    },
    {
      id: 2,
      name: "Fresh Spinach",
      shop: "Organic Corner",
      price: 3.49,
      originalPrice: null,
      quantity: 1,
      unit: "bunch",
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
      inStock: true,
      freshness: "Farm Fresh",
    },
    {
      id: 3,
      name: "Sweet Bell Peppers",
      shop: "Garden Fresh Co.",
      price: 6.99,
      originalPrice: 7.99,
      quantity: 3,
      unit: "pack",
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&q=80",
      inStock: false,
      freshness: "Limited Stock",
    },
    {
      id: 4,
      name: "Organic Carrots",
      shop: "Sunshine Farms",
      price: 2.99,
      originalPrice: null,
      quantity: 1,
      unit: "kg",
      image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80",
      inStock: true,
      freshness: "Just Picked",
    },
  ])

  const [promoCode, setPromoCode] = useState("")
  const [appliedPromo, setAppliedPromo] = useState<any | null>(null)
  const [deliveryOption, setDeliveryOption] = useState("standard")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id)
      return
    }
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "fresh10") {
      setAppliedPromo({ code: "FRESH10", discount: 10, type: "percentage" })
    } else if (promoCode.toLowerCase() === "newuser") {
      setAppliedPromo({ code: "NEWUSER", discount: 5, type: "fixed" })
    } else {
      setAppliedPromo({ error: "Invalid promo code" })
    }
    setPromoCode("")
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) return sum + (item.originalPrice - item.price) * item.quantity
    return sum
  }, 0)

  const promoDiscount = appliedPromo && !appliedPromo.error ? (appliedPromo.type === "percentage" ? subtotal * (appliedPromo.discount / 100) : appliedPromo.discount) : 0

  const deliveryFee = deliveryOption === "express" ? 4.99 : deliveryOption === "standard" ? 2.99 : 0
  const total = subtotal - promoDiscount + deliveryFee

  const deliveryOptions = [
    { id: "pickup", name: "Store Pickup", time: "Ready in 2 hours", price: 0, icon: MapPin },
    { id: "standard", name: "Standard Delivery", time: "Next day delivery", price: 2.99, icon: Truck },
    { id: "express", name: "Express Delivery", time: "Same day delivery", price: 4.99, icon: Clock },
  ]

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Shopping Cart
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Your Fresh <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Selections</span></h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Review your items and proceed to checkout for fresh, local delivery</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-black">Cart Items ({cartItems.length})</h2>
                <button className="text-green-600 hover:text-green-700 font-semibold">Continue Shopping</button>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className={`border border-gray-200 rounded-2xl p-6 transition-all ${!item.inStock ? "opacity-75 bg-gray-50" : "hover:shadow-md"}`}>
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Product Image */}
                      <div className="relative">
                        <img src={item.image} alt={item.name} className="w-full md:w-32 h-32 object-cover rounded-xl" />
                        {item.originalPrice && <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">SALE</div>}
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-black mb-1">{item.name}</h3>
                            <p className="text-green-600 font-semibold mb-2">{item.shop}</p>
                            <div className="flex items-center mb-2">
                              <Leaf className="w-4 h-4 text-green-500 mr-2" />
                              <span className="text-sm text-gray-600">{item.freshness}</span>
                            </div>

                            {!item.inStock && (
                              <div className="flex items-center text-red-600 mb-2">
                                <AlertCircle className="w-4 h-4 mr-2" />
                                <span className="text-sm font-semibold">Out of Stock</span>
                              </div>
                            )}
                          </div>

                          {/* Price and Controls */}
                          <div className="flex flex-col items-end">
                            <div className="text-right mb-4">
                              <div className="flex items-center">
                                <span className="text-2xl font-bold text-black">${(item.price * item.quantity).toFixed(2)}</span>
                                {item.originalPrice && <span className="text-lg text-gray-500 line-through ml-2">${(item.originalPrice * item.quantity).toFixed(2)}</span>}
                              </div>
                              <p className="text-sm text-gray-600">${item.price.toFixed(2)} per {item.unit}</p>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center mb-4">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-500 hover:text-green-600 transition-all" disabled={!item.inStock}>
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="mx-4 text-lg font-semibold w-8 text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-green-500 hover:text-green-600 transition-all" disabled={!item.inStock}>
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            {/* Remove Button */}
                            <button onClick={() => removeItem(item.id)} className="flex items-center text-red-500 hover:text-red-700 text-sm font-semibold transition-colors">
                              <Trash2 className="w-4 h-4 mr-1" /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                <h3 className="text-lg font-bold text-black mb-4">Promo Code</h3>
                <div className="flex flex-col md:flex-row gap-4">
                  <input type="text" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} placeholder="Enter promo code" className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                  <button onClick={applyPromoCode} className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">Apply</button>
                </div>

                {appliedPromo && (
                  <div className={`mt-4 p-3 rounded-lg flex items-center ${appliedPromo.error ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
                    {appliedPromo.error ? <AlertCircle className="w-5 h-5 mr-2" /> : <CheckCircle className="w-5 h-5 mr-2" />}
                    <span className="text-sm font-semibold">{appliedPromo.error || `Promo code ${appliedPromo.code} applied! ${appliedPromo.type === 'percentage' ? appliedPromo.discount + '% off' : '$' + appliedPromo.discount + ' off'}`}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>

              {/* Delivery Options */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-black mb-4">Delivery Option</h3>
                <div className="space-y-3">
                  {deliveryOptions.map((option) => (
                    <label key={option.id} className="flex items-center p-3 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-green-300 transition-all">
                      <input type="radio" name="delivery" value={option.id} checked={deliveryOption === option.id} onChange={(e) => setDeliveryOption(e.target.value)} className="text-green-600 focus:ring-green-500" />
                      <div className="ml-3 flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <option.icon className="w-5 h-5 text-green-600 mr-2" />
                            <span className="font-semibold text-black">{option.name}</span>
                          </div>
                          <span className="font-bold text-black">{option.price === 0 ? 'Free' : `$${option.price}`}</span>
                        </div>
                        <p className="text-sm text-gray-600">{option.time}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold text-black">${subtotal.toFixed(2)}</span>
                </div>

                {savings > 0 && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>Savings</span>
                    <span className="font-semibold">-${savings.toFixed(2)}</span>
                  </div>
                )}

                {appliedPromo && !appliedPromo.error && (
                  <div className="flex justify-between items-center text-green-600">
                    <span>Promo ({appliedPromo.code})</span>
                    <span className="font-semibold">-${promoDiscount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-semibold text-black">{deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-black">Total</span>
                    <span className="text-2xl font-bold text-green-600">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <Leaf className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Fresh Guarantee</p>
                </div>
                <div className="text-center">
                  <Truck className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Fast Delivery</p>
                </div>
              </div>

              {/* Checkout Button */}
              <button className="group w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 flex items-center justify-center mb-4">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">Free shipping on orders over $50. Same-day delivery available.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default AgriCartShoppingCart
