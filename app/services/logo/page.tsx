"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import LiItem from '@/components/LiItem';
import ResponsiveServiceHero from '@/components/ResponsiveServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TextBlock from '@/components/TextBlock';
import TextInServiceWrapper from '@/components/TextInServiceWrapper';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const requirements = (
    <>
        <div className="space-y-2">
          <LiItem>Brand/company name (the exact name that will be on the logo)</LiItem>
          <LiItem>Slogan (if any - should it be part of the logo)</LiItem>
          <LiItem>Type of logo (textual - logo with letters, symbolic - icon, combination of text and symbols)</LiItem>
          <LiItem>Colors (do you have certain preferred colors)</LiItem>
          <LiItem>Fonts (do you want modern, classic, handwritten style, etc.)</LiItem>
          <LiItem>Logo Style (Minimalist, Luxury, Fun, Serious)</LiItem>
          <LiItem>If you have any samples/sketches you like</LiItem>
        </div>
    </>
);
const page = () => {

  const labels = [
    "LOGO",
    "WORDMARK",
    "VISUAL IDENTITY",
    "CORPORATE IDENTITY"
  ];

  const leftImgs = [
    { id: 1, name: "Marina Serlin", img: "/service-section/Logo/1_logo-visual-identity-design.jpg" },
    { id: 2, name: "Dany Lanza", img: "/service-section/Logo/2_logo-corporate-identity.jpg" },
    { id: 3, name: "Taanel Malleus", img: "/service-section/Logo/3_logo-logotype-wordmark-design.jpg" },
    { id: 4, name: "Marina Serlin", img: "/service-section/Logo/1_logo-visual-identity-design.jpg" },
    { id: 5, name: "Dany Lanza", img: "/service-section/Logo/2_logo-corporate-identity" },
    { id: 6, name: "Taanel Malleus", img: "/service-section/Logo/3_logo-logotype-wordmark-design.jpg" },
  ];

  const rightImgs = [
    { id: 1, name: "Marina Serlin", img: "/service-section/Logo/4_logotype-company-brand.jpg" },
    { id: 2, name: "Dany Lanza", img: "/service-section/Logo/5_logo-monogram-pet.jpg" },
    { id: 3, name: "Taanel Malleus",  img: "/service-section/Logo/6_logo-visual-identity-store.jpg" },
    { id: 6, name: "Marina Serlin", img: "/service-section/Logo/4_logotype-company-brand.jpg" },
    { id: 4, name: "Patrick Kluivert", img: "/service-section/Logo/5_logo-monogram-pet.jpg" },
    { id: 5, name: "Patrick Kluivert", img: "/service-section/Logo/6_logo-visual-identity-store.jpg" },
  ];
  return (
    <>
      <ResponsiveServiceHero 
        title={["Logo"]}
        subtitle="• Timeless & Versatile Logo Design"
        description="A meticulously crafted logo that defines your brand with clarity, uniqueness, and impact."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>

      <TextInServiceWrapper>
        <TextBlock>
          A logo is the foundation of your visual identity and the first impression people get of your brand. That&#39;s why it&#39;s
          important to be clear, recognizable and communicate your story in the right way.
        </TextBlock>
        <TextBlock>
          When creating a logo, my approach is based on a combination of strategy, creativity and functionality. Before
          starting the design, I thoroughly analyze your business, brand values ​​and specific industry requirements, to ensure
          that the final solution is unique, tailored to your needs and attractive in the long term.
        </TextBlock>
        <TextBlock>
          Regardless of whether you are starting a new business, refreshing an existing logo or planning a complete
          rebranding, you will receive a design that is attractive, easily applicable on all platforms and effectively represents
          your company.
        </TextBlock>
        <TextBlock>
          A logo is not just an image – it is the foundation of your brand. Let your logo tell the real story!
        </TextBlock>
      </TextInServiceWrapper>
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />

      <SummaryCard 
        title="What I need from you?"
        description={requirements} />

      <CallToAction />
    </>
  )
}

export default page