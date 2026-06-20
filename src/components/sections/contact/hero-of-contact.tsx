function ContactHero(){
    return(
        <>
         <section className="relative h-[480px] w-full flex items-center overflow-hidden bg-slate-900">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat "
                style={{ backgroundImage: `url('/images/intro-img.jpg')` }}
              />
              
              <div className="absolute inset-0 bg-overlay/65 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-overlay-dark/75 via-overlay/60 to-overlay-dark/60" />
        
              <div className="relative z-10 w-full mx-auto max-w-hero-container px-8 md:px-16 pt-32 pb-20 ">
                <div className="max-w-4xl mx-auto
                  text-center ">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-hero-title font-bold tracking-tight text-white leading-[1.10] mb-6 animate-slide-up">Contact Us</h1>
                 
                  
                  <h3 className="text-2xl font-bold ">
                Get in touch with our expert team
                  </h3>
                  
                  <p className="text-base md:text-lg lg:text-[16px] font-normal leading-relaxed md:leading-loose text-white/75 max-w-4xl mb-10 animate-fade-in-delayed text-center mt-3 mx-auto">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                  </p>
                  
                 
                
                </div>
              </div>
            </section>
            </>
    )
}

export default ContactHero;