import ServicesHero from "@/components/sections/servies/hero-of-services";
import { Services } from "@/components/sections/home/Services";
import { Customers } from "@/components/sections/home/Customers";
import { CTA } from "@/components/sections/home/CTA"
function MenuServices(){

    return(<>
    <ServicesHero/>
     <Services/>         
     <Customers/>
      <CTA/>
    </>)
}

export default MenuServices;