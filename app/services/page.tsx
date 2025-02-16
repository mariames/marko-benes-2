import ServicesSection from '@/components/ServiceCard'
import Services from '@/components/Services'
import TitleOFPage from '@/components/TitleOFPage'
import React from 'react'

const page = () => {
  return (
    <div className='bg-black'>
        <TitleOFPage title="Services" />
        <Services />
    </div>
    
  )
}

export default page