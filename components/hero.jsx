import { Button } from "@/components/ui/button"




const hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            NEW
            <br />
            <span className="font-bold">COLLECTION</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Discover timeless elegance meets modern sophistication
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-medium px-12 py-4 rounded-none text-lg tracking-wide"
          >
            EXPLORE NOW
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>
  )
}

export default hero
