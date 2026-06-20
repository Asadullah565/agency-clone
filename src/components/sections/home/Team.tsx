export function Team() {
  const teamMembers = [
    {
      name: "Joanne Williams",
      role: "Founder",
      image: "/images/team-1.jpg"
    },
    {
      name: "Fred Buster",
      role: "Director Ops",
      image: "/images/team-2.jpg"
    },
    {
      name: "Lisa Hoffman",
      role: "Director HR",
      image: "/images/team-3.jpg"
    }
  ]

  return (
    <section id="team" className="bg-white py-28 px-8 md:px-16 lg:13.5 w-full">
      <div className="mx-auto max-w-wide w-full">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:leading-loose">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et
            justo. Praesent mattis commodo augue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-full aspect-square overflow-hidden rounded-none shadow-sm mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>

              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                {member.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
