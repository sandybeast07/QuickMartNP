"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Fav from "@/components/fav"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"


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

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fav clothes = {clothingItems} />
      </div>
      <Newsletter />
      <Footer />
      
    </div>
  )
}
