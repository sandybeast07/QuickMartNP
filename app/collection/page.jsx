import clothingItems from '@/app/pages/clothes.json'
import ProductCard from '@/app/pages/productCard'

const collection = () => {
  return (
    <section className="p-20">
      <div className="text-center mb-16">
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
