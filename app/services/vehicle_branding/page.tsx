import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection'
import ScrollingImages from '@/components/ScrollingImages';
import ServiceHero from '@/components/ServiceHero';
import TextThatSlidesIn from '@/components/TextThatSlidesIn';
import TitleOFPage from '@/components/TitleOFPage'
import VehicleStack from '@/components/VehicleStack';
import React from 'react'

const page = () => {
  const items = [
    "Make, model, and year of manufacture: (to obtain accurate dimensions and templates) * I can buy a vehicle template with dimensions for most vehicles on specialized sites for this purpose.",
    "The logo of your brand or company (ai, eps, or pdf) / vector file",
    "Vehicle color",
    "Text you want to put on the design (titles, subtitles, product/service/contact details)",
    "Key messages: (what should be highlighted - event, service, product, vision)",
    "Images/product model (if any)",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
    "Existing elements (handles, windows, sensors, relief surfaces, locks that should be avoided in the design)",
    "Legal requirements (are there restrictions on certain advertising rules according to local laws)"
  ];

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
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/VehicleBranding/2_van-branding.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/VehicleBranding/3_van_branding_design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/VehicleBranding/2_van-branding.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/VehicleBranding/2_van-branding.jpg" },
  ];

  const rightImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/VehicleBranding/1_truck-lorry-branding-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/VehicleBranding/2_van-branding.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/VehicleBranding/3_van_branding_design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/VehicleBranding/2_van-branding.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/VehicleBranding/2_van-branding.jpg" },
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
      <TextThatSlidesIn />
      <ScrollingImages />
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <InfoSection title="What I need from you?"
      items={items} />
      <CallToAction />
    </div>
  )
}

export default page