import { MapPin, Mail, Phone, Smartphone } from "lucide-react";
function Map(){
    return(<>
    <section className="bg-[#f7fafe] md:px-16 lg:px-13.5 w-full pb-20  pt-20">

       
       <div className="grid grid-cols-1  lg:grid-cols-[1.5fr_1fr] bg-slate-50 ">
      
      {/* LEFT COLUMN */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 px-8 md:px-0">
          Request Free Consultation
        </h2>

        <div className="bg-white rounded-xl shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr] overflow-hidden  w-full">
          
          {/* Form */}
          <form className="flex flex-col gap-4 p-8">
            <input
              type="text"
              placeholder="Your Name *"
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            />

            <input
              type="email"
              placeholder="Your Email *"
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm placeholder:text-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            />

            <button
              type="submit"
              className="mt-2 w-fit bg-indigo-500 hover:bg-indigo-600 transition-colors text-white text-xs font-bold tracking-widest uppercase px-8 py-3 rounded-lg"
            >
              Submit
            </button>
          </form>

          {/* Map */}
          <div className="relative min-h-[400px] md:min-h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL"
              title="Google Map"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 lg:pl-15 sm:mt-10  px-8 md:px-0">
          Get In Touch
        </h2>

        <div className="flex flex-col gap-6  lg:pl-15 px-8 md:px-0">
          <span className="text-xs font-bold tracking-widest text-slate-900">
            REACH US
          </span>

          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <MapPin className="size-5 text-indigo-500 mt-1 shrink-0" />
              <p className="text-slate-600 text-sm leading-relaxed">
                123/B, Route 66, Downtown
                <br />
                Washington, DC 20004, USA
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="size-5 text-indigo-500 shrink-0" />
              <p className="text-slate-600 text-sm">
                info@example.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="size-5 text-indigo-500 shrink-0" />
              <p className="text-slate-600 text-sm">
                +001 987-654-3210
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Smartphone className="size-5 text-indigo-500 shrink-0" />
              <p className="text-slate-600 text-sm">
                +001 987-654-3210
              </p>
            </div>
          </div>

          <span className="text-xs font-bold tracking-widest text-slate-900 mt-4">
            CALL US TOLL FREE
          </span>

          <a
            href="tel:18001234567"
            className="text-3xl md:text-4xl font-extrabold text-indigo-500 tracking-wide hover:text-indigo-600 transition-colors"
          >
            1-800-123-4567
          </a>
        </div>
      </div>
    </div>

    </section>
    
    </>
    )
}

export default Map;

