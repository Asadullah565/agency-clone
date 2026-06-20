import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-overlay-dark text-slate-400 pt-20 pb-10 px-8 md:px-16 lg:px-24 w-full">
      <div className="mx-auto max-w-wide w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">
              Digital Agency
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo.
              Praesent mattis commodo augue.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300">
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-bold uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Email Marketing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-bold uppercase tracking-widest mb-6">
              Useful Links
            </h4>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  About Company
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Login Page
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors duration-300 text-sm">
                  Admin
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-bold uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  1678 Lenore Drive, San Francisco, CA 94120
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  [EMAIL_ADDRESS]
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-slate-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  +1 (650) 253-0000
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <span>
            &copy; 2026 Digital Agency Project. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors duration-300">
              Terms &amp; Conditions
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-300 transition-colors duration-300">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
