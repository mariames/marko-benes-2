import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection';
import ServiceHero from '@/components/ServiceHero';
import TitleOFPage from '@/components/TitleOFPage'
import TShirtDesignSection from '@/components/TShirtDesignSection';
import React from 'react'

const page = () => {
  const items = [
    "Brand line, special event, gift, or something else",
    "Age, interests, gender, and people who will wear the shirts",
    "Specific theme for style: retro, minimalist, urban, sports, etc.",
    "Brand logo, tagline, text, or other graphic elements (if any)",
    "Is the design on the front, back, or sleeves",
    "Design dimensions for each part of the shirt",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
    "Type of printing (screen printing, sublimation, embroidery)",
  ];

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PromoBooths/1_promo-trade-booth-stand-fair-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PromoBooths/2_promo-booth-stand-fair-branding-elements.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PromoBooths/6_promo-table-design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoBooths/6_promo-table-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoBooths/6_promo-table-design.jpg" },
  ];

  const rightImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PromoBooths/1_promo-trade-booth-stand-fair-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PromoBooths/2_promo-booth-stand-fair-branding-elements.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PromoBooths/6_promo-table-design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoBooths/6_promo-table-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoBooths/6_promo-table-design.jpg" },
  ];
  return (
    <>
      <ServiceHero 
        title="T-shirt Design"
        subtitle="• Cutting-Edge Print & Embroidery"
        description="Featuring advanced printing techniques for crisp, fade-resistant designs that stand out"
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
      <TShirtDesignSection />
      <InfoSection
        title="What I need from you?"
        items={items} />
      <CallToAction />
    </>
  )
}

export default page