"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import ScrollingImages from '@/components/ScrollingImages';
import ServiceHero from '@/components/ServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TextBlock from '@/components/TextBlock';
import TextThatSlidesIn from '@/components/TextThatSlidesIn';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const page = () => {

      const requirements2 = (
        <>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#e5dfd3]" />
                  <p className="text-gray-300 2xl:text-2xl">Make, model, and year of manufacture: (to obtain accurate dimensions and templates) * I can buy a vehicle template with dimensions for most vehicles on specialized sites for this purpose.</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#e5dfd3]" />
                  <p className="text-gray-300 2xl:text-2xl">The logo of your brand or company (ai, eps, or pdf) / vector file</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#e5dfd3]" />
                  <p className="text-gray-300 2xl:text-2xl">Vehicle color</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#e5dfd3]" />
                  <p className="text-gray-300 2xl:text-2xl">Text you want to put on the design (titles, subtitles, product/service/contact details)</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#e5dfd3]" />
                  <p className="text-gray-300 2xl:text-2xl">Key messages: (what should be highlighted - event, service, product, vision)</p>
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
                  <p className="text-gray-300 2xl:text-2xl">Existing elements (handles, windows, sensors, relief surfaces, locks that should be avoided in the design)</p>
                </div>

                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-[#e5dfd3]" />
                  <p className="text-gray-300 2xl:text-2xl">Legal requirements (are there restrictions on certain advertising rules according to local laws)</p>
                </div>
              </div>
              </>
    );

  const labels = [
    "CAR",
    "VAN",
    "TRUCK/LORRY",
    "BUS",
    "CAR",
    "VAN",
    "TRUCK/LORRY",
    "BUS"
  ];

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/VehicleBranding/1_truck-lorry-branding-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/VehicleBranding/2_truck-vehicle-vinyl-wrap.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/VehicleBranding/3_van_branding_design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/VehicleBranding/4_van-vehicle-branding.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/VehicleBranding/5_van-vehicle-wrap.jpg" },
  ];

  const rightImgs = [
    { id: 6, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/VehicleBranding/6_car-branding-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/VehicleBranding/5_van-vehicle-wrap.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/VehicleBranding/4_van-vehicle-branding.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/VehicleBranding/3_van_branding_design.jpg" },
    { id: 6, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/VehicleBranding/6_car-branding-design.jpg" },
  ];

  return (
    <div className='bg-black'>
      <ServiceHero 
        title="Vehicle Branding"
        subtitle="•  High-Performance Fleet Graphics"
        description="Built for endurance, designed for visibility"
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
        <TextBlock>
          Branding a vehicle requires the precise creation of a design that is fully adapted to the dimensions and technical
          characteristics of the vehicle itself. I start each project with a detailed analysis of the technical drawings, taking care
          of all the specific elements, such as rounded edges, doors, handles, mirrors and lights, so that the key visual elements remain clearly visible and uninterrupted.
        </TextBlock>
        <TextBlock>
          By correctly positioning logos, text and graphic elements, I ensure that branded vehicles express a strong and clear
          message, whether they are in motion or parked. In addition to the aesthetic appeal, I pay special attention to the
          technical preparation in order to obtain the appropriate quality in the press.
        </TextBlock>
        <TextBlock>
          And know, your vehicle is more than a means of transportation &mdash; it&#39;s a mobile advertisement that works for you all
          the time! Creating attractive and effective vehicle branding solutions will make your brand stand out wherever you go.
        </TextBlock>
      {/** <TextThatSlidesIn /> */}
      {/** <ScrollingImages /> */}
        <div className='mx-10 my-40'>
          <SummaryCard 
            title="What I need from you?"
            description={requirements2} />
        </div>
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <CallToAction />
    </div>
  )
}

export default page