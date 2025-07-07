import clothes from '@/app/data/clothes.json'
import ProductCard from '@/app/pages/productCard'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

function retro() {
    const retro = clothes.filter((item) => item.isRetro)
    return (
        <div className="p-20 pt-3">
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
            <div className="text-center my-10">
                <h2 className="text-4xl font-light mb-4 tracking-tight">Retro Kits</h2>
                <div className="w-24 h-0.5 bg-black mx-auto mb-6" />
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">Classic kits reimagined for modern games</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-9">
                {retro.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default retro
