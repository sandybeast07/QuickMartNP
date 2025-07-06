"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Fav from "@/components/fav"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"


export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} cartCount={cartCount} addToCart={setCartCount}/>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fav />
      </div>
      <Newsletter />
      <Footer />
      
    </div>
  )
}
