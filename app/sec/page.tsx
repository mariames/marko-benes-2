import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServiceCard'
import DesignProcess from '@/components/DesignProcess'
import React from 'react'
import Services from '@/components/Services'

const page = () => {
  return (
    <>
        <HeroSection />
        <Services />
        {/** <ServicesSection /> */}
        <DesignProcess />
    </>
  )
}

export default page;