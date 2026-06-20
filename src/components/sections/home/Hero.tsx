import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-900">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/home-hero-bg.jpg')` }}
      />
      
      <div className="absolute inset-0 bg-overlay/65 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-overlay-dark/75 via-overlay/60 to-overlay-dark/60" />

      <div className="relative z-10 w-full mx-auto max-w-hero-container px-8 md:px-16 pt-32 pb-20">
        <div className="max-w-4xl text-left">
          <span className="inline-block text-sm md:text-base lg:text-hero-overline font-bold tracking-widest text-white/95 mb-5 uppercase animate-fade-in">
            Fastest And Most Lightweight WP Theme
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-hero-title font-bold tracking-tight text-white leading-[1.10] mb-8 animate-slide-up">
            Create Amazing <br />
            Business Websites
          </h1>
          
          <p className="text-base md:text-lg lg:text-hero-desc font-normal leading-relaxed md:leading-loose text-white/75 max-w-2xl mb-10 animate-fade-in-delayed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Suspendisse et justo. Praesent mattis commodo augue. 
            Morbi fringilla congue libero, ac malesuada vulputate pharetra.
          </p>
          
          <Button 
            size="2xl"
            className="h-14 px-10 text-xs md:text-sm animate-fade-in-delayed"
          >
            Book A Meeting
          </Button>
        </div>
      </div>


    </section>
  )
}
