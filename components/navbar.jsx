import Link from "next/link"
import { ShoppingBag, Search, Menu, User } from "lucide-react"


const navbar = ({cartCount, addToCart}) => {
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
