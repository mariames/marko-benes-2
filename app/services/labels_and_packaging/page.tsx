"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import LiItem from '@/components/LiItem';
import PrintTechniques from '@/components/PrintTechniques';
import ResponsiveServiceHero from '@/components/ResponsiveServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TextBlock from '@/components/TextBlock';
import TextInfo from '@/components/TextInfo';
import TextInServiceWrapper from '@/components/TextInServiceWrapper';
import React from 'react'

const page = () => {


  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/1_packaging-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/2_label-design_print.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/3_shelf-ready-packaging-design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/4_shelf_ready_box_die_cutting_packaging.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/5_paneer-pouch-design.jpg" },
    { id: 6, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/6_product-label-design.jpg" }
  ];

  const rightImgs = [
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/4_shelf_ready_box_die_cutting_packaging.jpg" },
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/6_product-label-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/5_paneer-pouch-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/1_packaging-design.jpg" },
    { id: 6, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/3_shelf-ready-packaging-design.jpg" },
  ];

  const requirements2 = (
    <>
          <div className="space-y-2">
            <LiItem>Dimensions (height x width) or dieline in vector format (ai, eps, pdf)</LiItem>

            <LiItem>The logo of your brand or company (ai, eps, pdf) / vector file</LiItem>
            
            <LiItem>The logo of your brand or company (ai, eps, pdf) / vector file</LiItem>
            
            <LiItem>Text which is necessary to put on the design and text of the declaration with pictograms, barcode, etc.</LiItem>

            <LiItem>Examples of designs you like so I know what type of style you prefer, brand guideline</LiItem>

            <LiItem>Packaging material (cardboard, plastic, glass, bag, can, etc.)</LiItem>

            <LiItem>Printing method (offset, flexography, digital printing)</LiItem>
          </div>
    </>
  );

  const labels = [
    "PRODUCT LABEL",
    "BOX DESIGN",
    "SHELF READY PACKAGING",
    "PANEER POUCH DESIGN",
    "STAND-UP POUCH",
    "DOYPACK",
    "SPRAY BOTTLE PACKAGING",
    "FOOD PACKAGING",
    "COSMETICS PACKAGING",
    "SUPPLEMENT PACKAGING",
    "AMAZON PRODUCT PACKAGING"
  ];

  return (
    <>
      <ResponsiveServiceHero 
        title="Labels & Packaging"
        subtitle="• Industrial-Grade Packaging"
        description="Engineered for reliability, offering custom solutions that meet rigorous standards."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>

       
      <TextInServiceWrapper>
        <TextBlock>
          The key goal of every design is to strengthen brand identity and capture consumer attention on the shelf. That&#39;s why I develop every packaging and label design strategically, considering all essential elements such as striking visuals, customized backgrounds, carefully positioned text, well-designed icons, and a harmonious color palette. This ensures that the final product is visually powerful, recognizable, and flawlessly executed in every aspect—from concept to the finished product.
        </TextBlock>
        <TextBlock>
          Thanks to many years of experience in graphic design and engineering knowledge of printing techniques, it allows me to create labels and packages that look attractive and technically impeccably prepared for printing, taking care of colors, materials, overlays and final effects, so that the printing is error-free on any printing technique: flexography, offset or digital.
        </TextBlock>
        <TextBlock>
          Each packaging is designed to be visually appealing and intuitive to use, providing customers with a complete brand experience.
        </TextBlock>
      </TextInServiceWrapper>

      
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      {/** 
      <div className='mx-3 my-40 4xl:mx-56'>
        <TextInfo />
      </div>
        */}
      <PrintTechniques />
        
      
        <SummaryCard 
          title="What I need from you?"
          description={requirements2} />
      
        <CallToAction />
    </>
  )
}

export default page