import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="cta" className="bg-white py-20  px-8 md:px-16 lg:px-13.5 w-full">
      <div className="mx-auto max-w-wide w-full flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-primary tracking-tight leading-tight mb-4">
            Would you like to start a project with us?
          </h2>
          <p className="text-muted-foreground text-sm md:text-[15px] leading-relaxed md:leading-loose">
            Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis 
            vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Button
            size="xl"
            className="h-12 px-10 text-xs tracking-widest  font-bold"
          >
            GET A QUOTE
          </Button>
        </div>
      </div>
    </section>
  )
}
