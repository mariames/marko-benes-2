"use client";
import CallToAction from '@/components/CallToAction';
import ServiceHero from '@/components/ServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TShirtDesignSection from '@/components/TShirtDesignSection';
import { FaCheckCircle } from 'react-icons/fa';

const requirements = (
    <>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Brand line, special event, gift, or something else</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Age, interests, gender, and people who will wear the shirts</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Specific theme for style: retro, minimalist, urban, sports, etc.</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Brand logo, tagline, text, or other graphic elements (if any)</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Is the design on the front, back, or sleeves</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Design dimensions for each part of the shirt</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Examples of designs you like so I know what type of style you prefer, brand guideline</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Type of printing (screen printing, sublimation, embroidery)</p>
          </div>
        </div>
    </>
);

const page = () => {

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/T-Shirt/8_printed-tee-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/T-Shirt/9_design-casual-wear.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/T-Shirt/10_graphic-tee-t-shirt.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/T-Shirt/8_printed-tee-design.jpg" },
  ];

  const rightImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/T-Shirt/3_graphic-tee-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/T-Shirt/5_t-shirt-custom-design.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/T-Shirt/7_fashion-design-t-shirt.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/T-Shirt/6_t-shirt-design-sublimation.jpg" }
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
      <div className='mx-10 my-40'>
        <SummaryCard 
          title="What I need from you?"
          description={requirements} />
      </div>
      {/** <TShirtDesignSection /> */}
      <CallToAction />
    </>
  )
}

export default page