"use client";
import AnimatedLabels from '@/components/AnimatedLabels'
import CallToAction from '@/components/CallToAction'
import ServiceHero from '@/components/ServiceHero'
import { SummaryCard } from '@/components/SummaryCard'
import TradePromoBoothSection from '@/components/TradePromoBoothSection'
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const page = () => {

  const requirements2 = (
    <>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
            {/**<span className='text-[#e5dfd3]'>✓</span> */}
            <p className="text-gray-300 2xl:text-2xl">Dimensions for elements (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)</p>
        </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#e5dfd3]" />
                  <p className="text-gray-300 2xl:text-2xl">Usage (print or digital)</p>
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

                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#e5dfd3]" />
                  <p className="text-gray-300 2xl:text-2xl">Printed surfaces (which parts of the stand are branded - counter, sides, upper panels)</p>
                </div>
              </div>
              </>
    );

  const labels = [
    "TRADE PROMO BOOTHS",
    "KIOSK",
    "PROMO BOOTHS",
    "PROMO TABLE",
    "FAIR STAND"
  ];

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PromoBooths/1_promo-trade-booth-stand-fair-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PromoBooths/2_promo-booth-stand-fair-branding.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PromoBooths/3_promo-trade-fair-branding.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoBooths/4_promo-booth-stand-fair-branding-elements.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoBooths/5_promo-trade-booth-stand-fair-kiosk.jpg" },
  ];

  const rightImgs = [
    { id: 6, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PromoBooths/6_promo-booth-table-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoBooths/5_promo-trade-booth-stand-fair-kiosk.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoBooths/4_promo-booth-stand-fair-branding-elements.jpg" },
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PromoBooths/1_promo-trade-booth-stand-fair-design.jpg" }
  ];

  return (
    <>
      <ServiceHero 
        title="Trade Promo Booths"
        subtitle="•  Next-Level Event Marketing Displays"
        description="Combining cutting-edge materials, lighting, and interactive elements for an unforgettable brand showcase."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
      {/** <TradePromoBoothSection /> */}
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