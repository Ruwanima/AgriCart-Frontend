"use client"

import { useState } from "react"
import Link from "next/link"
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  seller: string
}

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Fresh Organic Tomatoes",
      price: 4.99,
      quantity: 3,
      image: "/fresh-organic-tomatoes.png",
      seller: "Green Valley Farm",
    },
    {
      id: "2",
      name: "Crisp Bell Peppers",
      price: 3.49,
      quantity: 2,
      image: "/fresh-bell-peppers.jpg",
      seller: "Local Market Co.",
    },
    {
      id: "3",
      name: "Organic Lettuce Bundle",
      price: 5.99,
      quantity: 1,
      image: "/fresh-organic-lettuce.png",
      seller: "Urban Greens",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + tax + shipping

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center text-gray-600 hover:text-black transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Shopping
          </Link>
          <h1 className="text-2xl font-bold text-black">Shopping Cart</h1>
          <div className="w-24"></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {cartItems.length === 0 ? (
          // Empty Cart
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8">Add some fresh products to get started!</p>
            <Link href="/">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={`p-6 flex gap-6 ${index !== cartItems.length - 1 ? "border-b border-gray-100" : ""}`}
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-black mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">From: {item.seller}</p>
                      <p className="text-xl font-semibold text-green-600">${item.price.toFixed(2)}</p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex flex-col items-end gap-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-700" />
                        </button>
                        <span className="w-8 text-center font-semibold text-black">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-700" />
                        </button>
                      </div>
                      <p className="text-lg font-bold text-black">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping Button */}
              <Link href="/">
                <button className="mt-6 w-full border-2 border-green-600 text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all">
                  Continue Shopping
                </button>
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-black mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (10%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-semibold" : ""}>
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping === 0 && (
                    <p className="text-sm text-green-600 font-medium">✓ Free shipping on orders over $50</p>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-6 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-black">Total</span>
                    <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                  Proceed to Checkout
                </button>

                <button className="w-full mt-3 bg-gray-100 text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
                  Apply Coupon Code
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ShoppingCartPage
