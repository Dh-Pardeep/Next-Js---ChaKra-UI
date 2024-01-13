// app/page.tsx
'use client'

import CustomAccordion from "./components/CustomAccordion"
import HeroSection from "./components/HeroSection"

export default function Page() {
  return (
    <>
      <HeroSection />
      <CustomAccordion />
    </>
  )
}