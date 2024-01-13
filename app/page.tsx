// app/page.tsx
'use client'

import CustomAccordion from "./components/CustomAccordion"
import CustomModal from "./components/CustomModal"
import CustomTabs from "./components/CustomTabs"
import HeroSection from "./components/HeroSection"

export default function Page() {
  return (
    <>
      <HeroSection />
      <CustomAccordion />
      <CustomTabs/>
      <CustomModal/>
    </>
  )
}