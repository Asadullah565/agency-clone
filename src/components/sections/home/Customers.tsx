import { Hexagon, Compass, Layers, Triangle } from "lucide-react"

export function Customers() {
  const logos = [
    { icon: Hexagon, text: "LOGO", style: "uppercase font-black tracking-widest text-base" },
    { icon: Compass, text: "LOGOIPSUM", style: "uppercase font-extrabold tracking-wider text-sm" },
    { icon: Layers, text: "LOGOIPSUM", style: "uppercase font-bold tracking-wide text-sm" },
    { icon: Triangle, text: "logoipsum", style: "lowercase font-bold text-base" },
  ]

  return (
    <section id="customers" className="bg-white w-full">
      <div className="mx-auto max-w-wide w-full px-8 md:px-16 lg:13.5 pt-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Our Customers
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:leading-loose">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et
            justo. Praesent mattis commodo augue.
          </p>
        </div>

        <div className="w-full bg-slate-50 border border-slate-100/60 py-16 px-8 flex flex-wrap items-center justify-around gap-8 md:gap-12 select-none rounded-none">
          {logos.map((logo, index) => {
            const IconComponent = logo.icon
            return (
              <div 
                key={index} 
                className="flex items-center gap-2.5 text-slate-400/80 hover:text-slate-600 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <IconComponent className="size-5 md:size-6 stroke-[2.5]" />
                <span className={`${logo.style} leading-none`}>
                  {logo.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-testimonial-bg py-24 w-full border-t border-b border-slate-100/30">
        <div className="mx-auto max-w-4xl px-8 md:px-16 w-full text-center">
          <h3 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-slate-900 tracking-tight mb-6">
            “Amazing Designs and Quality Work!”
          </h3>
          
          <p className="text-slate-500 text-sm md:text-base lg:text-[17px] leading-relaxed md:leading-[2] max-w-3xl mx-auto mb-10 font-normal">
            Nam at congue diam. Etiam erat lectus, finibus eget commodo quis, tincidunt 
            eget leo. Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla 
            congue libero, ac malesuada vulputate pharetra.
          </p>

          <div className="flex flex-col items-center select-none group">
            <div className="relative overflow-hidden rounded-full w-16 h-16 mb-4 ring-4 ring-white/50 group-hover:ring-primary/20 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face" 
                alt="John Doe"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
            
            <span className="text-base font-bold text-slate-900 leading-tight">
              John Doe
            </span>
            
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mt-1">
              CEO, ACME INC.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
