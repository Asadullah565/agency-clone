import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function ChooseUs(){
const [openIndex, setOpenIndex] = useState(-1);
   const items = [
  {index:0  ,title:"Best Quality Designs"},
  {index:1,title:"Professional Team"},
  {index:2,title:"Fast Delivery"},
  {index:3,title:"24/7 Support"},
  {index:4,title:"Affordable Pricing"},
 {index:5, title:"Customer Satisfaction"},
];
    return(
        <>

        <section className="max-w-full bg-[#f7fafe] pt-25">
        <div className="flex lg:flex-row sm:flex-col  ">

  <div
  className={`relative border-2 overflow-hidden transition-[height] duration-500 ease-in-out ${
    openIndex !== -1
      ? "lg:h-[550px] h-[300px]"
      : "lg:h-[500px] h-[200px]"
  }`}
>

 <div className="absolute inset-0 bg-overlay/65 mix-blend-multiply" />
        <img src="./images/why-choose-us.jpg" alt="" className="object-cover w-full h-full"/>
       </div>

       <div className="flex flex-col bg-[#f7fafe]  border-t  border-slate-200   lg:pl-20 sm:pl-10  pt-10 lg:w-1/2 w-full">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e2547] tracking-tight">Why Choose Us?</h2>
      <p className="text-gray-500 text-base leading-relaxed mt-3 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit <br></br>. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.</p>
       <div className="p-5 shadow-premium-hover lg:w-[80%] w-full">
      
       {items.map((item, index) => (
  <div key={index} className={`${index===5?"border-none":"border-b"} border-slate-200`}>
    <div className="flex justify-between items-center py-2">
      <p className="text-slate-900 font-bold">
        {item.title}
      </p>

      <button
        className="p-1 text-slate-900"
        onClick={() =>
          setOpenIndex(openIndex === index ? -1 : index)
        }
      >
        {openIndex === index ? (
          <ChevronUp className="size-5" />
        ) : (
          <ChevronDown className="size-5" />
        )}
      </button>
    </div>

    {openIndex === index && (
      <p className="pb-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    )}
  </div>
))}
       </div>

       </div>

      

        </div>

        <div className=" mt-10 pb-15">
            <div className="max-w-forsections mx-auto flex lg:flex-row  lg:justify-between    flex-col ">

  <div className="flex flex-col gap-2  lg:mt-8">
            <h3 className="text-slate-900 text-2xl">Some Numbers</h3>
            <p className="text-slate-400">Lorem ipsum dolor sit amet,<br></br> consec tetur adipis.</p>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-3  lg:w-[70%] sm:mt-8 ">

  <div className="flex items-center gap-3 ">
    <span className="text-[#6878d6] text-5xl md:text-6xl font-black">
      87
    </span>
    <span className="font-bold text-[#1e2547] text-sm max-w-[90px]">
      Satisfied Clients
    </span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#6878d6] text-5xl md:text-6xl font-black">
      150
    </span>
    <span className="font-bold text-[#1e2547] text-sm max-w-[90px]">
      Projects Completed
    </span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#6878d6] text-5xl md:text-6xl font-black">
      28
    </span>
    <span className="font-bold text-[#1e2547] text-sm max-w-[90px]">
      Accolades Earned
    </span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-[#6878d6] text-5xl md:text-6xl font-black">
      56K+
    </span>
    <span className="font-bold text-[#1e2547] text-sm max-w-[90px]">
      Lines of Code
    </span>
  </div>

</div>
       

            </div>
        

        </div>
        </section>
        </>
    )
}

export default ChooseUs;