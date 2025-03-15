"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import PromoShelvesSection from '@/components/PromoShelvesSection';
import ServiceHero from '@/components/ServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const requirements = (
    <>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            {/**<span className='text-[#e5dfd3]'>✓</span> */}
            <p className="text-gray-300 2xl:text-2xl">Dimensions for elements (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Existing template or technical documentation (from shelf manufacturer)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">The logo of your brand or company (ai, eps, or pdf) / vector file</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Text you want to put on the design</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Key messages: (what should be highlighted on the shelf)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Images/product model (if any)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Examples of designs you like so I know what type of style you prefer, brand guideline</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Printed surfaces (which parts of the shelf can be branded - sides, top panel, frontal part)</p>
          </div>
        </div>
    </>
);
const page = () => {

  const labels = [
    "PROMO SHELVES",
    "STANDING RETAIL DISPLAY",
    "PRODUCT DISPLAY"
  ];

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PromoShelves/1_shelves-market-branding-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PromoShelves/2_standing-retail-display-shelves.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PromoShelves/3_product-display-design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoShelves/3_product-display-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoShelves/3_product-display-design.jpg" },
  ];

  const rightImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PromoShelves/1_shelves-market-branding-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PromoShelves/2_standing-retail-display-shelves.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PromoShelves/3_product-display-design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoShelves/3_product-display-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoShelves/3_product-display-design.jpg" },
  ];

  return (
    <>
      <ServiceHero 
        title="Promo Shelves"
        subtitle="• Smart Shelf Branding Solutions"
        description="Seamlessly integrating promotional graphics with retail shelving to maximize visual impact"
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
      <PromoShelvesSection />
      <div className='mx-10 my-40'>
        <SummaryCard 
          title="What I need from you?"
          description={requirements} />
      </div>
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <CallToAction />
    </>
  )
}

export default page