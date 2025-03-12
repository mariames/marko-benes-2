import AnimatedLabels from '@/components/AnimatedLabels'
import BillboardSection from '@/components/BillboardsSection'
import CallToAction from '@/components/CallToAction'
import InfoSection from '@/components/InfoSection'
import ServiceHero from '@/components/ServiceHero'
import TitleOFPage from '@/components/TitleOFPage'
import React from 'react'

const page = () => {
  const items = [
    "Dimensions (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)",
    "The logo of your brand or company (ai, eps, or pdf) / vector file",
    "Text you want to put on the design (titles, subtitles, event/product/service/contact details)",
    "Key messages: (what should be highlighted - event, service, product, vision)",
    "Images/product model (if any)",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
  ]

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
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/4_roll-up-retractable- banners-design.jpg" },
  ];

  const rightImgs = [
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/4_roll-up-retractable- banners-design.jpg" },
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/1_billboards-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/2_billboards-banners-backdrop-design.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/BillboardsBannersRollUps/3_city-light-ads-design.jpg" },
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
      <BillboardSection />
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <InfoSection title="What I need from you?"  items={items} />
      <CallToAction />
    </>
  )
}

export default page