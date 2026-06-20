import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "contact", to: "/contact" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className="mx-auto max-w-hero-container w-full px-8 md:px-16">
        <div className="flex h-28 items-center justify-between">
          <Link to="/" className="flex flex-col justify-center select-none group">
            <span className="text-logo-main-mobile lg:text-logo-main font-black tracking-widest text-white leading-none">
              DIGITAL
            </span>
            <span className="text-logo-sub-mobile lg:text-logo-sub font-bold tracking-widest text-white/80 leading-none mt-1.5 group-hover:text-white transition-colors">
              AGENCY
            </span>
          </Link>

          <div className="flex items-center gap-10">
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="text-sm lg:text-base font-semibold tracking-wide text-white/70 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              size="xl"
              className="hidden md:inline-flex h-12 px-7 text-xs"
            >
              Request Quote
            </Button>

            <button
              onClick={() => setIsOpen(true)}
              className="flex md:hidden items-center justify-center p-2.5 rounded-lg bg-white/10 hover:bg-white/15 transition text-white"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 right-0 w-full bg-overlay-dark z-50 px-8 py-8 flex flex-col md:hidden border-b border-slate-800/40">
          <div className="flex items-center justify-between">
            <a href="#" className="flex flex-col justify-center select-none group" onClick={() => setIsOpen(false)}>
              <span className="text-logo-main-mobile font-black tracking-widest text-white leading-none">
                DIGITAL
              </span>
              <span className="text-logo-sub-mobile font-bold tracking-widest text-white/80 leading-none mt-1.5">
                AGENCY
              </span>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-slate-300 transition-colors"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 mt-10 mb-8">
            {navItems.map((item) => (
              <Link   
                key={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="text-base font-bold text-white tracking-wide hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button
            size="xl"
            onClick={() => setIsOpen(false)}
            className="w-full h-12 text-xs tracking-widest rounded-none font-bold uppercase"
          >
            Request Quote
          </Button>
        </div>
      )}
    </header>
  )
}
