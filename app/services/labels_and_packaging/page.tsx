"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import ServiceHero from '@/components/ServiceHero';
import SpotlightTitle from '@/components/SpotlightTitle';
import { SummaryCard } from '@/components/SummaryCard';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

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
            <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
              {/**<span className='text-[#e5dfd3]'>✓</span> */}
              <p className="text-gray-300 2xl:text-2xl">Dimensions (height x width) or dieline in vector format (ai, eps, pdf)</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-[#e5dfd3]" />
              <p className="text-gray-300 2xl:text-2xl">The logo of your brand or company (ai, eps, pdf) / vector file</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-[#e5dfd3]" />
              <p className="text-gray-300 2xl:text-2xl">Text which is necessary to put on the design and text of the declaration with pictograms, barcode, etc.</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-[#e5dfd3]" />
              <p className="text-gray-300 2xl:text-2xl">Examples of designs you like so I know what type of style you prefer, brand guideline</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-[#e5dfd3]" />
              <p className="text-gray-300 2xl:text-2xl">Packaging material (cardboard, plastic, glass, bag, can, etc.)</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-[#e5dfd3]" />
              <p className="text-gray-300 2xl:text-2xl">Printing method (offset, flexography, digital printing)</p>
            </div>
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
      <ServiceHero 
        title="Labels & Packaging"
        subtitle="• Industrial-Grade Packaging"
        description="Engineered for reliability, offering custom solutions that meet rigorous standards."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
      <div className='mx-10 my-40'>
        <SummaryCard 
          title="What I need from you?"
          description={requirements2} />
      </div>
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <CallToAction />
      <SpotlightTitle />
    </>
  )
}

export default page