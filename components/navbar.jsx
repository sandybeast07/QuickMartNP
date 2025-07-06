
import Link from "next/link"
import { ShoppingBag, Search, Menu, User } from "lucide-react"


const navbar = () => {
  return (
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
  )
}

export default navbar
