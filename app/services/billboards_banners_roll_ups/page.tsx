"use client";
import AnimatedLabels from '@/components/AnimatedLabels'
import BillboardSection from '@/components/BillboardsSection'
import CallToAction from '@/components/CallToAction'
import ServiceHero from '@/components/ServiceHero'
import { SummaryCard } from '@/components/SummaryCard'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const requirements2 = (
      <>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            {/**<span className='text-[#e5dfd3]'>✓</span> */}
            <p className="text-gray-300 2xl:text-2xl">Dimensions (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">The logo of your brand or company (ai, eps, or pdf) / vector file</p>
          </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#e5dfd3]" />
                <p className="text-gray-300 2xl:text-2xl">Text you want to put on the design (titles, subtitles, event/product/service/contact details)</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#e5dfd3]" />
                <p className="text-gray-300 2xl:text-2xl">Key messages: (what should be highlighted - event, service, product, vision)</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#e5dfd3]" />
                <p className="text-gray-300 2xl:text-2xl">Images/product model (if any)</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#e5dfd3]" />
                <p className="text-gray-300 2xl:text-2xl">Examples of designs you like so I know what type of style you prefer, brand guideline</p>
              </div>
            </div>
            </>
);

const page = () => {

  const labels = [
    "BILLBOARDS",
    "ROLL-UPS/ RETRACTABLE BANNERS",
    "CITY LIGHT ADVERTISING",
    "BANNERS",
    "VINYL BANNERS",
    "BACKDROP",
    "SHOP WINDOW BRANDING",
    "FEATHER AND BEACH FLAGS",
    "YARD SIGNS"
  ];

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/1_billboards-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/2_billboards-banners-backdrop-design.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/3_city-light-ads-design.jpg" },
    { id: 4, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/1_billboards-design.jpg" },
    { id: 5, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/2_billboards-banners-backdrop-design.jpg" },
    { id: 6, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/3_city-light-ads-design.jpg" }
    
  ];

  const rightImgs = [
    { id: 1, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/4_roll-up-retractable_banners-design.jpg" },
    { id: 2, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/5_shop-window-branding-store.jpg" },
    { id: 3, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/6_market-ads-banner.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/4_roll-up-retractable_banners-design.jpg" },
    { id: 5, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/5_shop-window-branding-store.jpg" },
    { id: 6, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/6_market-ads-banner.jpg" }
  ];

  return (
    <>
      <ServiceHero
        title="Billboards, Banners & Roll Ups"
        subtitle="• Strategic Design for Maximum Reach"
        description="Structured layouts and data-driven typography for high conversion and audience retention."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
      {/** <BillboardSection /> */}
      <div className='mx-10 my-40'>
        <SummaryCard 
          title="What I need from you?"
          description={requirements2} />
      </div>
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <CallToAction />
    </>
  )
}

export default page