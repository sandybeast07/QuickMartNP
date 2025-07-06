import React, { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"




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
            <Badge className="bg-red-500 text-white border-0 text-xs font-bold px-2 py-1">TRENDING</Badge>
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
              className="bg-white text-black hover:bg-black font-medium px-8 py-3 rounded-[30px] border-2 border-black transition-all duration-300 hover:text-white"
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

export default ProductCard
