import Link from "next/link"
import { Wrench, AlertTriangle } from "lucide-react"
import { useState } from "react"


const navbar = ({ cartCount, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">LUXE
              <div className="relative inline-block">
                <div
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 relative left-[20px] bottom-[4px] rounded-full text-sm font-bold uppercase tracking-wide cursor-pointer hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Beta</span>
                  <Wrench className={` w-4 h-4 transition-transform duration-300 ${isHovered ? "rotate-12" : ""}`} />
                </div>

                {/* Enhanced Tooltip */}
                {isHovered && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-gray-900 text-white text-sm rounded-xl shadow-2xl whitespace-nowrap z-20 animate-in fade-in-0 zoom-in-95 duration-200">
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

            </h1>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">

            <Link href="#" className="text-gray-900 hover:text-gray-600 font-bold">
              Retro Kits
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-600 font-bold">
              New Season
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-600 font-bold">
              Custom Designed
            </Link>
            <Link href="#" className="text-gray-900 hover:text-gray-600 font-bold">
              Sale
            </Link>
          </div>


        </div>
      </div>
    </nav>
  )
}

export default navbar
