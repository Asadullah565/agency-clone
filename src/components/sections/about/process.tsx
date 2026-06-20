

function Process(){

   const data = [
  {
    number: "01",
    title: "Discover",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "02",
    title: "Define",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "03",
    title: "Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "05",
    title: "Deploy",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    number: "06",
    title: "Deliver",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
 return(
    <>
    <section className="bg-[#f7fafe]">

        <div className="pt-20 flex flex-col text-center max-w-2xl mx-auto
        ">
   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
    Our 6-D Process
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed md:leading-loose">
           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
          </p>

        </div>
<div className="grid   md:grid-cols-2 lg:grid-cols-3 gap-10     max-w-forsections mx-auto mt-10">
  {data.map((item) => (
    <div key={item.number} className="text-lg text-black  ">
     <span className="text-6xl md:text-7xl font-black text-slate-200/60 leading-none select-none">{item.number}</span>

      <h3 className="text-xl font-bold text-[#1e2547] mt-3">{item.title}</h3>

     <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-3 max-w-sm">{item.description}</p>
    </div>
  ))}
</div>


    </section>
    
    </>
 )   
}
export default Process;