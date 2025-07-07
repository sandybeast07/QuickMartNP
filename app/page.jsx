"use client"

import { useState } from "react"

import Fav from "@/app/pages/fav"
import Newsletter from "@/app/pages/newsletter"
import Footer from "@/app/pages/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wrench, AlertTriangle } from "lucide-react"


export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavBar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative flex">
                <img src="/quickmart.png" alt="Logo" className="w-[50px] h-[50px] rounded-[20px]" />
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 relative left-[20px] rounded-full text-sm font-bold uppercase tracking-wide cursor-pointer hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Beta</span>
                  <Wrench className={` w-4 h-4 transition-transform duration-300 ${isHovered ? "rotate-12" : ""}`} />
                </div>

                {/* Enhanced Tooltip */}
                {isHovered && (
                  <div className="absolute top-full left-1/2 transform -translate-x-2 mb-3 px-4 py-3 bg-gray-900 text-white text-sm rounded-xl shadow-2xl whitespace-nowrap z-20 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      <span className="font-semibold text-yellow-400">Development Mode</span>
                    </div>
                    <div className="text-xs text-gray-300 space-y-1">
                      <div>• Features are actively being developed</div>
                      <div>• Some functionality may be unstable</div>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-6 border-transparent border-t-gray-900"></div>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">

              <Link href="/retro" className="text-gray-900 hover:text-gray-600 font-bold">
                Retro Kits
              </Link>
              <Link href="/newSeason" className="text-gray-900 hover:text-gray-600 font-bold">
                New Season
              </Link>
              <Link href="/customDesign" className="text-gray-900 hover:text-gray-600 font-bold">
                Custom Designed
              </Link>
              <Link href="#" className="text-gray-900 hover:text-gray-600 font-bold">
                Sale
              </Link>
            </div>


          </div>
        </div>
      </nav>


      {/*Hero Section*/}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Fuel Your Game
            <br />
            <span className="font-bold">Wear the Edge</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Whether it's football, gym, or street — our wear moves with you
          </p>
          <Link href="/collection">
            <Button
              size="lg"
              className="bg-white text-black rounded-[30px] hover:bg-gray-400 font-bold px-12 py-4  text-lg tracking-wide"
            >
              Shop Now
            </Button>
          </Link>

        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Fav />
      </div>
      <Newsletter />
      <Footer />

    </div>
  )
}
