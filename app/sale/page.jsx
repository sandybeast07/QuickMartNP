"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ShoppingCart, Tag } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import clothes from "@/app/data/clothes.json"

export default function Sale() {
    const [saleItems, setSaleItems] = useState([])

    const onSaleItems = clothes.filter((item) => item.oldPrice && item.price)

    const calculateDiscount = (oldPrice, price) => {
        return Math.round(((oldPrice - price) / oldPrice) * 100)
    }

    return (

        <div>
            <header className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-0 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center text-gray-600 hover:text-black transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            <span className="font-medium">Back to Shop</span>
                        </Link>
                    </div>
                </div>
            </header>

            <div className="min-h-screen bg-background">
                {/* Header - back to sale button */}
                <div className="bg-red-600 text-white py-4">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl font-bold mb-2">🔥 MEGA SALE 🔥</h1>
                            <p className="text-lg">Up to 50% off on selected items!</p>
                        </div>
                    </div>
                </div>

                {/* Sale Items */}
                <div className="container mx-auto px-4 py-8">
                    {onSaleItems.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-lg text-muted-foreground">No sale items available at the moment.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {onSaleItems.map((item) => (
                                <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-0">
                                        <div className="relative overflow-hidden">
                                            <Image
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.name}
                                                width={300}
                                                height={300}
                                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-700">
                                                -{calculateDiscount(item.oldPrice, item.price)}%
                                            </Badge>
                                        </div>

                                        <div className="p-4">
                                            <Badge variant="secondary" className="mb-2 text-xs">
                                                {item.category}
                                            </Badge>
                                            <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{item.description}</p>

                                            <div className="flex items-center gap-2 mb-4">
                                                <span className="text-2xl font-bold text-red-600">${item.price.toFixed(2)}</span>
                                                <span className="text-lg text-muted-foreground line-through">${item.oldPrice.toFixed(2)}</span>
                                            </div>

                                            <div className="text-sm text-green-600 font-medium mb-3">
                                                You save ${(item.oldPrice - item.price).toFixed(2)}
                                            </div>
                                        </div>
                                    </CardContent>

                                    <Link href={`/order/${item.id}`}>
                                        <CardFooter className="p-4 pt-0">
                                            <Button className="w-full flex" size="sm">
                                                <ShoppingCart className="h-4 w-4 mr-2" />
                                                BUY NOW
                                            </Button>
                                        </CardFooter>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer Banner */}
                <div className="bg-gray-100 py-8 mt-12">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-xl font-semibold mb-2">Don't Miss Out!</h3>
                        <p className="text-muted-foreground">Sale ends soon. Shop now and save big on your favorite items.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
