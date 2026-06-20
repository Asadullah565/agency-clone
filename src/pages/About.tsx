

import ChooseUs from "@/components/sections/about/chooseus"
import AboutHero from "@/components/sections/about/hero-of-about"
import Process from "@/components/sections/about/process"
import { CTA } from "@/components/sections/home/CTA"

export function About() {
  return (
    <>
      <AboutHero/>
      <Process/>
      <ChooseUs/>
      <CTA/>

    </>
 
  )
}