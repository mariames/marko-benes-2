import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection';
import PostersDesignSection from '@/components/PostersDesignSection';
import ServiceHero from '@/components/ServiceHero';
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
    "Usage (print or digital)",
  ];

  const labels = [
    "FLYERS",
    "POSTERS",
    "BANNERS",
    "BOOK COVERS",
    "MAGAZINE COVERS",
    "LETTERHEADS",
    "BROCHURES",
    "TRI-FOLD",
    "BROCHURES",
    "BUSINESS CARDS"
  ];

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/1_baby-kids-cosmetics-poster.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/2_sport-ads-instagram-poster.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/3_music-party-event-poster.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/4_magazine-ads-flyer-product.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/1_baby-kids-cosmetics-poster.jpg" },
  ];

  const rightImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/1_baby-kids-cosmetics-poster.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/2_sport-ads-instagram-poster.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/3_music-party-event-poster.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/4_magazine-ads-flyer-product.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/1_baby-kids-cosmetics-poster.jpg" },
  ];

  return (
    <>
    <ServiceHero
        title="Posters & Flyers"
        subtitle="• Strategic Design for Maximum Reach"
        description="Structured layouts and data-driven typography for high conversion and audience retention."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
    <PostersDesignSection />
    <AnimatedLabels labels={labels} direction="left-to-right" />
    <AnimatedLabels labels={labels} direction="right-to-left" />
    <InfoSection
      title="What I need from you?"
      items={items}
    />
    <CallToAction />
    </>
  )
}

export default page