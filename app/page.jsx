"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Heart, Search, Menu, User } from "lucide-react"


const clothingItems = [
  {
    id: 1,
    name: "Oversized Cotton Tee",
    price: 45.0,
    originalPrice: 60.0,
    image: "/placeholder.svg?height=500&width=400",
    category: "T-Shirts",
    isTopWeek: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"],
  },
  {
    id: 2,
    name: "Vintage Leather Jacket",
    price: 189.99,
    image: "/placeholder.svg?height=500&width=400",
    category: "Outerwear",
    isTopMonth: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
  },
  {
    id: 3,
    name: "Minimalist Hoodie",
    price: 75.0,
    image: "/placeholder.svg?height=500&width=400",
    category: "Hoodies",
    isTopWeek: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Beige", "Black", "Navy"],
  },
  {
    id: 4,
    name: "Silk Midi Dress",
    price: 120.0,
    image: "/placeholder.svg?height=500&width=400",
    category: "Dresses",
    isTopMonth: true,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Emerald", "Black", "Cream"],
  },
  {
    id: 5,
    name: "High-Waist Denim",
    price: 95.0,
    image: "/placeholder.svg?height=500&width=400",
    category: "Denim",
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Blue", "Black", "White"],
  },
  {
    id: 6,
    name: "Cashmere Sweater",
    price: 150.0,
    image: "/placeholder.svg?height=500&width=400",
    category: "Knitwear",
    isTopWeek: true,
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Ivory", "Charcoal"],
  },
]

function ProductCard({ item }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div
      className="group relative bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className={`object-cover transition-all duration-700 ${isHovered ? "scale-110 blur-[2px]" : "scale-100"}`}
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {item.isTopWeek && (
            <Badge className="bg-red-500 text-white border-0 text-xs font-medium px-2 py-1">TRENDING</Badge>
          )}
          {item.isTopMonth && (
            <Badge className="bg-black text-white border-0 text-xs font-medium px-2 py-1">BESTSELLER</Badge>
          )}
          {item.originalPrice && (
            <Badge className="bg-green-500 text-white border-0 text-xs font-medium px-2 py-1">SALE</Badge>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110"
        >
          <Heart className={`w-4 h-4 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </button>

        {/* Buy Now Button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link href={`/order/${item.id}`}>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-black font-medium px-8 py-3 rounded-none border-2 border-black transition-all duration-300 hover:text-white"
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{item.category}</p>
            <h3 className="font-medium text-lg leading-tight">{item.name}</h3>
          </div>
        </div>

        {/* Colors */}
        {item.colors && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Colors:</span>
            <div className="flex gap-1">
              {item.colors.slice(0, 3).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-gray-200"
                  style={{
                    backgroundColor:
                      color.toLowerCase() === "white"
                        ? "#ffffff"
                        : color.toLowerCase() === "black"
                          ? "#000000"
                          : color.toLowerCase() === "gray"
                            ? "#6b7280"
                            : color.toLowerCase() === "beige"
                              ? "#f5f5dc"
                              : color.toLowerCase() === "navy"
                                ? "#1e3a8a"
                                : color.toLowerCase() === "brown"
                                  ? "#8b4513"
                                  : color.toLowerCase() === "emerald"
                                    ? "#10b981"
                                    : color.toLowerCase() === "cream"
                                      ? "#fffdd0"
                                      : color.toLowerCase() === "blue"
                                        ? "#3b82f6"
                                        : color.toLowerCase() === "camel"
                                          ? "#c19a6b"
                                          : color.toLowerCase() === "ivory"
                                            ? "#fffff0"
                                            : color.toLowerCase() === "charcoal"
                                              ? "#36454f"
                                              : "#cccccc",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">${item.price}</span>
          {item.originalPrice && <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>}
        </div>

        {/* Sizes */}
        <div className="flex items-center gap-1">
          <span className="text-xs text-gray-500 mr-2">Sizes:</span>
          {item.sizes.slice(0, 4).map((size) => (
            <span key={size} className="text-xs px-2 py-1 bg-gray-100 text-gray-700">
              {size}
            </span>
          ))}
          {item.sizes.length > 4 && <span className="text-xs text-gray-500">+{item.sizes.length - 4}</span>}
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const topWeekItems = clothingItems.filter((item) => item.isTopWeek)
  const topMonthItems = clothingItems.filter((item) => item.isTopMonth)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-tight">LUXE</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                New Arrivals
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                Retro Kits
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                New Season
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-medium">
                Custom Designed
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
              <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
              <Menu
                className="w-5 h-5 text-gray-600 cursor-pointer hover:text-black md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            NEW
            <br />
            <span className="font-bold">COLLECTION</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Discover timeless elegance meets modern sophistication
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-medium px-12 py-4 rounded-none text-lg tracking-wide"
          >
            EXPLORE NOW
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Picks of the Week */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">This Week's Favorites</h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Curated pieces that define this moment in fashion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {topWeekItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* Top Picks of the Month */}
        <section className="py-20 bg-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-4 tracking-tight">Monthly Bestsellers</h2>
              <div className="w-24 h-0.5 bg-black mx-auto mb-6" />
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">The pieces everyone's talking about this month</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topMonthItems.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Complete Collection</h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every piece crafted with attention to detail and quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {clothingItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-light mb-6">Stay In Touch</h2>
          <p className="text-gray-300 text-lg mb-8">Be the first to know about new collections and exclusive offers</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 font-medium">SUBSCRIBE</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">LUXE</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Redefining fashion with timeless pieces that speak to the modern individual. Quality craftsmanship meets
                contemporary design.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <span className="text-sm">ig</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700">
                  <span className="text-sm">tw</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Shop</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Women
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Men
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 LUXE. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
