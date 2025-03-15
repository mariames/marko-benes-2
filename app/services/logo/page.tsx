"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import ServiceHero from '@/components/ServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const requirements = (
    <>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Brand/company name (the exact name that will be on the logo)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Slogan (if any - should it be part of the logo)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Type of logo (textual - logo with letters, symbolic - icon, combination of text and symbols)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Colors (do you have certain preferred colors)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Fonts (do you want modern, classic, handwritten style, etc.)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Logo Style (Minimalist, Luxury, Fun, Serious)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">If you have any samples/sketches you like</p>
          </div>
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
      {/** <LogoSection /> */}
            <div className='mx-10 my-40'>
              <SummaryCard 
                title="What I need from you?"
                description={requirements} />
            </div>
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
        <CallToAction />
    </>
  )
}

export default page