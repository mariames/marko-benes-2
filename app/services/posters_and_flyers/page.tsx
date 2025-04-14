"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import PostersPrintTechnique from '@/components/PostersPrintTechniques';
import ServiceHero from '@/components/ServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TextBlock from '@/components/TextBlock';
import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const page = () => {

  const requirements2 = (
      <>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-[#e5dfd3]" />
                {/**<span className='text-[#e5dfd3]'>✓</span> */}
                <p className="text-gray-300 2xl:text-2xl">Dimensions (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#e5dfd3]" />
                <p className="text-gray-300 2xl:text-2xl">The logo of your brand or company (ai, eps, or pdf) / vector file</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-[#e5dfd3]" />
                <p className="text-gray-300 2xl:text-2xl">Text you want to put on the design (titles, subtitles, event/product/service/contact details)</p>
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
                <p className="text-gray-300 2xl:text-2xl">Usage (print or digital)</p>
              </div>
            </div>
            </>
  );
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
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/2_nightlife-poster-music.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/3_magazine-ads-flyer-product.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/4_music-party-event-poster.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/5_kindergarten-kids-poster-instagram-ad.jpg" },
  ];

  const rightImgs = [
    { id: 6, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/6_flyer-dessert-restaurant-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/5_kindergarten-kids-poster-instagram-ad.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/4_music-party-event-poster.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/5_kindergarten-kids-poster-instagram-ad.jpg" },
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/PostersAndFlyers/1_baby-kids-cosmetics-poster.jpg" },
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

    <div className='mx-3 my-40'>
      <TextBlock>
        A good poster or flyer is not just an aesthetically pleasing visual – it must quickly attract attention, convey a clear
        message and make a strong impression on the target audience. The focus is on being eye-catching, easy to read and
        tailored to the specific needs and interests of your audience, whether you&#39;re promoting a product, business event,
        festival, concert or night party.
      </TextBlock>
      <TextBlock>
        I carefully craft every design element to create a visually appealing material. From a harmonious and enticing
        composition, carefully selected typography, effective photos and optimal color combination to a customized format
        that best suits your promotional channel, every detail contributes to a satisfying end result.
      </TextBlock>
      <TextBlock>
        In addition to the visual aspect, I also take care of technical precision, ensuring that each design is flawlessly
        production-ready, whether for print or digital use.
      </TextBlock>
      <TextBlock>
        My goal is for your message to be not only noticed, but also remembered.
      </TextBlock>
    </div>
    <PostersPrintTechnique />

    <AnimatedLabels labels={labels} direction="left-to-right" />
    <AnimatedLabels labels={labels} direction="right-to-left" />

    <SummaryCard 
      title="What I need from you?"
      description={requirements2} />


    <CallToAction />
    </>
  )
}

export default page