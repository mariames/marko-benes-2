import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServiceCard'
import DesignProcess from '@/components/DesignProcess'
import React from 'react'
import Services from '@/components/Services'
import { Cta } from '@/components/Cta'
import Stack from '@/components/Stack'
import CardSection from '@/components/CardSection'
import ProjectShowcase from '@/components/ProjectShowcase'

const page = () => {
  return (
    <>
        <HeroSection />
        <Services />
        {/** <ServicesSection /> */}
        <DesignProcess />
        <Stack />
        <CardSection />
        <ProjectShowcase />
        <Cta />
    </>
  )
}

export default page;