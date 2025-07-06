import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function newsletter() {
  return (
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
  )
}
