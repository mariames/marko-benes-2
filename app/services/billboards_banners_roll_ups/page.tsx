"use client";
import AnimatedLabels from '@/components/AnimatedLabels'
import CallToAction from '@/components/CallToAction'
import ResponsiveServiceHero from '@/components/ResponsiveServiceHero';
import ServiceHero from '@/components/ServiceHero'
import { SummaryCard } from '@/components/SummaryCard'
import TextBlock from '@/components/TextBlock';
import TextInServiceWrapper from '@/components/TextInServiceWrapper';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const requirements2 = (
      <>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
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
      <ResponsiveServiceHero
        title="Billboards, Banners & Roll Ups"
        subtitle="• Strategic Design for Maximum Reach"
        description="Structured layouts and data-driven typography for high conversion and audience retention."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>

      <TextInServiceWrapper>
        <TextBlock>
          Large format design requires a clear and effective style, with special attention to readability and visibility from
          different distances. Regardless of whether it is roadside billboards, mega-banners on building facades, roll-up
          banners, marketing displays for retail spaces or city light ads in urban areas, it is crucial to correctly balance the size
          of text, images and compositions to ensure maximum visibility and visual impact.
        </TextBlock>
        <TextBlock>
          All design elements such as texts, colors, contrasts and layout of information etc. must be carefully selected and
          placed so that passers-by and onlookers can quickly and easily spot key messages, even in motion. The text must be
          large enough to remain legible from a greater distance, while the visual elements should attract attention and clearly
          communicate the message of the brand or event.
        </TextBlock>
        <TextBlock>
          Apart from the creative approach, I pay special attention to the technical preparation, because the quality of printing
          in large formats depends on the professional preparation of the file. It is important to take care of the appropriate
          resolution, dimensions, safe zones, tolerances and printing standards, so that the final product is flawlessly executed
          without loss of quality or unforeseen printing errors.
        </TextBlock>
        <TextBlock>
          Properly designed large format design attracts attention and conveys the message effectively, leaving a strong
          impression that contributes to brand recognition and campaign success.
        </TextBlock>
      </TextInServiceWrapper>
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
        <SummaryCard 
          title="What I need from you?"
          description={requirements2} />
      <CallToAction />
    </>
  )
}

export default page