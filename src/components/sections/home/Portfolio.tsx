import { Button } from "@/components/ui/button"

export function Portfolio() {
  const portfolioItems = [
    { src: "/images/portfolio1.jpg", title: "Creative Process Workspace" },
    { src: "/images/portfolio2.jpg", title: "Minimal Mobile Branding" },
    { src: "/images/portfolio3.jpg", title: "Software Development Hub" },
    { src: "/images/portfolio4.jpg", title: "Modern Desk Setup" },
  ]

  return (
    <section id="portfolio" className="bg-white py-28 px-8 md:px-16 lg:px-13.5 w-full">
      <div className="mx-auto max-w-wide w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Portfolio
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:leading-loose">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et
            justo. Praesent mattis commodo augue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-wide w-full mx-auto">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-2xl aspect-square group shadow-sm"
            >
              <img 
                src={item.src} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            size="xl"
            className="h-12 px-10 text-xs"
          >
            Explore More
          </Button>
        </div>
      </div>
    </section>
  )
}
