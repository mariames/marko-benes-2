import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection';
import PromoShelvesSection from '@/components/PromoShelvesSection';
import ServiceHero from '@/components/ServiceHero';
import TitleOFPage from '@/components/TitleOFPage'
import React from 'react'

const page = () => {
  const items = [
    "Dimensions for elements (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)",
    "Existing template or technical documentation (from shelf manufacturer)",
    "The logo of your brand or company (ai, eps, or pdf) / vector file",
    "Text you want to put on the design",
    "Key messages: (what should be highlighted on the shelf)",
    "Images/product model (if any)",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
    "Printed surfaces (which parts of the shelf can be branded - sides, top panel, frontal part)",
  ];

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
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <InfoSection
        title="What I need from you?"
        items={items} />
      <CallToAction />
    </>
  )
}

export default page