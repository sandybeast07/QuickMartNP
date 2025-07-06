import { Button } from "@/components/ui/button"




const hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Fuel Your Game
            <br />
            <span className="font-bold">Wear the Edge</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
           Whether it's football, gym, or street — our wear moves with you
          </p>
          <Button
            size="lg"
            className="bg-white text-black rounded-[30px] hover:bg-gray-400 font-bold px-12 py-4  text-lg tracking-wide"
          >
            Shop Now
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>
  )
}

export default hero
