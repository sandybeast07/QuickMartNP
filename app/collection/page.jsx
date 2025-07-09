import clothingItems from '@/app/data/clothes.json'
import ProductCard from '@/app/pages/productCard'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const collection = () => {
  return (
    <section className="px-20 py-10">
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
      <div className="text-center mb-16 pt-10">
        <h2 className="text-4xl font-light mb-4 tracking-tight">Complete Collection</h2>
        <div className="w-24 h-0.5 bg-black mx-auto mb-6" />
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Every piece crafted with attention to detail and quality
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {clothingItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>


  )
}

export default collection
