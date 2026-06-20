import { CTA } from '@/components/sections/home/CTA'
import { Customers } from '@/components/sections/home/Customers'
import { Hero } from '@/components/sections/home/Hero'
import { Portfolio } from '@/components/sections/home/Portfolio'
import { Services } from '@/components/sections/home/Services'
import { Team } from '@/components/sections/home/Team'

const Home = () => {
  return (
      <>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Customers/>
      <Team/>
      <CTA/>
      </>
  )
}

export default Home;