"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import ServiceHero from '@/components/ServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TextBlock from '@/components/TextBlock';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const requirements = (
    <>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Dimensions for elements (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)</p>
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
            <p className="text-gray-300 2xl:text-2xl">Text you want to put on the design</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Key messages: (what should be highlighted on the shelf)</p>
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
            <p className="text-gray-300 2xl:text-2xl">Printed surfaces (which parts of the shelf can be branded - sides, top panel, frontal part)</p>
          </div>
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
      <ServiceHero 
        title="Promo Shelves"
        subtitle="• Smart Shelf Branding Solutions"
        description="Seamlessly integrating promotional graphics with retail shelving to maximize visual impact"
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>

      <div className='mx-3 my-40'>
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
      </div>
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