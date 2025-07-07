"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import clothingItems from '@/app/pages/clothes.json'


export default function OrderPage() {
  const params = useParams()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedColor, setSelectedColor] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contactNumber: "",
    size: "",
    tiktokId: "",
  })

  const itemId = Number.parseInt(params.id)
  const item = clothingItems.find((item) => item.id === itemId)

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-light mb-4">Item not found</h1>
          <Link href="/">
            <Button className="bg-black text-white hover:bg-gray-800">Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: { ...item, selectedColor },
          orderData: formData,
        }),
      })

      if (response.ok) {
        alert("Order submitted successfully! We will contact you soon.")
        router.push("/")
      } else {
        throw new Error("Failed to submit order")
      }
    } catch (error) {
      alert("Failed to submit order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center text-gray-600 hover:text-black transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span className="font-medium">Back to Shop</span>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight">LUXE</h1>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Product Images & Info */}
          <div className="space-y-8">
            <div className="aspect-[4/5] relative overflow-hidden bg-white">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">{item.category}</p>
                <h1 className="text-3xl font-light mb-4">{item.name}</h1>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-light">${item.price}</span>
                {item.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">${item.originalPrice}</span>
                )}
              </div>

              {/* Colors */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Color</Label>
                <div className="flex gap-3">
                  {item.colors?.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 transition-all ${
                        selectedColor === color ? "border-black scale-110" : "border-gray-200"
                      }`}
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
                {selectedColor && <p className="text-sm text-gray-600">Selected: {selectedColor}</p>}
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div className="bg-white p-8 h-fit">
            <div className="mb-8">
              <h2 className="text-2xl font-light mb-2">Place Your Order</h2>
              <p className="text-gray-600">Fill in your details and we'll contact you to complete the purchase.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="h-12 border-gray-200 focus:border-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-sm font-medium">
                  Delivery Address *
                </Label>
                <Textarea
                  id="address"
                  required
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="Enter your complete delivery address"
                  rows={3}
                  className="border-gray-200 focus:border-black resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact" className="text-sm font-medium">
                  Contact Number *
                </Label>
                <Input
                  id="contact"
                  type="tel"
                  required
                  value={formData.contactNumber}
                  onChange={(e) => handleInputChange("contactNumber", e.target.value)}
                  placeholder="Enter your phone number"
                  className="h-12 border-gray-200 focus:border-black"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="size" className="text-sm font-medium">
                  Size *
                </Label>
                <Select required value={formData.size} onValueChange={(value) => handleInputChange("size", value)}>
                  <SelectTrigger className="h-12 border-gray-200 focus:border-black">
                    <SelectValue placeholder="Select your size" />
                  </SelectTrigger>
                  <SelectContent>
                    {item.sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tiktok" className="text-sm font-medium">
                  TikTok ID
                </Label>
                <Input
                  id="tiktok"
                  type="text"
                  value={formData.tiktokId}
                  onChange={(e) => handleInputChange("tiktokId", e.target.value)}
                  placeholder="@your_tiktok_username (optional)"
                  className="h-12 border-gray-200 focus:border-black"
                />
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 p-6 space-y-4">
                <h3 className="font-medium text-lg">Order Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{item.name}</span>
                    <span className="font-medium">${item.price}</span>
                  </div>
                  {formData.size && (
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Size: {formData.size}</span>
                    </div>
                  )}
                  {selectedColor && (
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Color: {selectedColor}</span>
                    </div>
                  )}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-black text-white hover:bg-gray-800 font-medium text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting Order..." : "PLACE ORDER"}
              </Button>

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                * This is an order request form. No payment will be processed online. We will contact you within 24
                hours to confirm your order and arrange payment & delivery.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
