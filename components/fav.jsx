import ProductCard from './productCard'

const fav = ({clothes, productCard}) => {

    const topWeekItems = clothes.filter((item) => item.isTopWeek)
    const topMonthItems = clothes.filter((item) => item.isTopMonth)
    return (
        <div>
            {/* Top Picks of the Week */}
            <section className="py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-light mb-4 tracking-tight">This Week's Favorites</h2>
                    <div className="w-24 h-0.5 bg-black mx-auto mb-6" />
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">Curated pieces that define this moment in fashion</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topWeekItems.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>
            </section>



            {/* Top Picks of the Month */}
            <section className="py-20 bg-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-light mb-4 tracking-tight">Monthly Bestsellers</h2>
                        <div className="w-24 h-0.5 bg-black mx-auto mb-6" />
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">The pieces everyone's talking about this month</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topMonthItems.map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default fav
