import { Lightbulb, Smartphone, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function Services() {
  const servicesList = [
    {
      title: "Web Dev",
      description: "Create high-performance, responsive, and pixel-perfect websites tailored to your business.",
      icon: Lightbulb,
    },
    {
      title: "App Dev 2.0",
      description: "Build native and cross-platform mobile apps with exceptional user experiences.",
      icon: Smartphone,
    },
    {
      title: "UI/UX Design",
      description: "Craft intuitive, stunning, and user-centric interfaces that engage and convert.",
      icon: Palette,
    },
  ]

  return (
    <section id="services" className="bg-slate-50 py-28 px-8 md:px-16 lg:13.5 w-full border-t border-slate-100/60">
      <div className="mx-auto max-w-wide w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            How can we help you?
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:leading-loose">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et
            justo. Praesent mattis commodo augue.
          </p>
        </div>

        <div className="flex justify-center mb-20">
          <Button
            size="xl"
            className="h-12 px-8 text-xs"
          >
            Book A Meeting
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-wide w-full mx-auto">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="bg-white rounded-2xl ring-0 border-none shadow-premium hover:shadow-premium-hover transition-shadow duration-300 p-8 md:p-10 flex flex-col items-start gap-0"
              >
                <div className="flex items-center justify-center p-4 rounded-xl bg-primary/10 text-primary mb-8">
                  <IconComponent className="size-6 stroke-[2]" />
                </div>
                
                <CardHeader className="p-0 mb-4 select-none w-full">
                  <CardTitle className="text-lg md:text-xl lg:text-card-title font-bold text-slate-900 leading-snug md:whitespace-nowrap overflow-hidden text-ellipsis">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardDescription className="text-sm md:text-card-desc text-muted-foreground leading-relaxed font-normal p-0">
                  {service.description}
                </CardDescription>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
