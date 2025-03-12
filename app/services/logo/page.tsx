import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection';
import LogoSection from '@/components/LogoSection';
import ServiceHero from '@/components/ServiceHero';
import TitleOFPage from '@/components/TitleOFPage';
import React from 'react'

const page = () => {
  const items = [
    "Brand/company name (the exact name that will be on the logo)",
    "Slogan (if any - should it be part of the logo)",
    "Type of logo (textual - logo with letters, symbolic - icon, combination of text and symbols)",
    "Colors (do you have certain preferred colors)",
    "Fonts (do you want modern, classic, handwritten style, etc.)",
    "Logo Style (Minimalist, Luxury, Fun, Serious)",
    "If you have any samples/sketches you like",
  ];

  const labels = [
    "LOGO",
    "WORDMARK",
    "VISUAL IDENTITY",
    "CORPORATE IDENTITY"
  ];

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/Logo/1_logo-visual-identity-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/Logo/2_logo-corporate-identity.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/Logo/3_logo-logotype-wordmark-design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/Logo/3_logo-logotype-wordmark-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/Logo/3_logo-logotype-wordmark-design.jpg" },
  ];

  const rightImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/Logo/1_logo-visual-identity-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/Logo/2_logo-corporate-identity.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/Logo/3_logo-logotype-wordmark-design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/Logo/3_logo-logotype-wordmark-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/Logo/3_logo-logotype-wordmark-design.jpg" },
  ];
  return (
    <>
      <ServiceHero 
        title="Logo"
        subtitle="• Timeless & Versatile Logo Design"
        description="A meticulously crafted logo that defines your brand with clarity, uniqueness, and impact."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
      <LogoSection />
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