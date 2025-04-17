"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import LiItem from '@/components/LiItem';
import ResponsiveServiceHero from '@/components/ResponsiveServiceHero';
import ServiceHero from '@/components/ServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TextBlock from '@/components/TextBlock';
import TextInServiceWrapper from '@/components/TextInServiceWrapper';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const requirements = (
    <>
        <div className="space-y-2">
          <LiItem>
            Dimensions for elements (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)
          </LiItem>

          <LiItem>
            Existing template or technical documentation (from shelf manufacturer)
          </LiItem>

          <LiItem>
            The logo of your brand or company (ai, eps, or pdf) / vector file
          </LiItem>

          <LiItem>
            Text you want to put on the design
          </LiItem>

          <LiItem>
            Key messages: (what should be highlighted on the shelf)
          </LiItem>

          <LiItem>
            Images/product model (if any)
          </LiItem>

          <LiItem>
            Examples of designs you like so I know what type of style you prefer, brand guideline
          </LiItem>

          <LiItem>
            Printed surfaces (which parts of the shelf can be branded - sides, top panel, frontal part)
          </LiItem>

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
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PromoShelves/2_standing-retail-display-design.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PromoShelves/3_standing-retail-display-shelves.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoShelves/4_shelves-display-supermarket.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoShelves/5_product-display-design.jpg" },
  ];

  const rightImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PromoShelves/5_product-display-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PromoShelves/6_merchandise-rack-hanging.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PromoShelves/4_shelves-display-supermarket.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PromoShelves/3_product-display-design.jpg" },
  ];

  return (
    <>
      <ResponsiveServiceHero
        title="Promo Shelves"
        subtitle="• Smart Shelf Branding Solutions"
        description="Seamlessly integrating promotional graphics with retail shelving to maximize visual impact"
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>

      <TextInServiceWrapper>
        <TextBlock>
          In supermarkets and stores, customers make decisions in just a few seconds - that&#39;s why it&#39;s crucial that your
          products are visible, attractive and easily accessible.
        </TextBlock>
        <TextBlock>
          Each design is designed with the aim of highlighting the brand, attracting attention and conveying key messages,
          using a well-thought-out combination of colors, graphics and arrangement of elements. In addition to visual appeal, I
          take care of technical preparation and optimization for production, ensuring that everything looks perfect in the final
          version.
        </TextBlock>
        <TextBlock>
          Promo shelves can be made of cardboard, wood or metal, and each material requires a specific design approach.
          Cardboard shelves are light, flexible and ideal for short-term promotions, while wooden and metal variants provide
          greater durability and a premium look.
        </TextBlock>
        <TextBlock>
          Whether it is displays for promotional products, exclusive collections or long-term setups, the design will be adapted
          to your needs and market requirements.
        </TextBlock>
        <TextBlock>
          Get your products noticed - because good visibility means more sales!
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