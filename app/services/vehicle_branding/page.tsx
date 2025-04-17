"use client";
import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import LiItem from '@/components/LiItem';
import ResponsiveServiceHero from '@/components/ResponsiveServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TextBlock from '@/components/TextBlock';
import TextInServiceWrapper from '@/components/TextInServiceWrapper';
import React from 'react';

const page = () => {

      const requirements2 = (
        <>
              <div className="space-y-2">
              <LiItem>
                Make, model, and year of manufacture: (to obtain accurate dimensions and templates) * I can buy a vehicle template with dimensions for most vehicles on specialized sites for this purpose.
              </LiItem>

              <LiItem>
                The logo of your brand or company (ai, eps, or pdf) / vector file
              </LiItem>

              <LiItem>
                Vehicle color
              </LiItem>

              <LiItem>
                Text you want to put on the design (titles, subtitles, product/service/contact details)
              </LiItem>

              <LiItem>
                Key messages: (what should be highlighted - event, service, product, vision)
              </LiItem>

              <LiItem>
                Images/product model (if any)
              </LiItem>

              <LiItem>
                Examples of designs you like so I know what type of style you prefer, brand guideline
              </LiItem>

              <LiItem>
                Existing elements (handles, windows, sensors, relief surfaces, locks that should be avoided in the design)
              </LiItem>

              <LiItem>
                Legal requirements (are there restrictions on certain advertising rules according to local laws)
              </LiItem>

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
      <ResponsiveServiceHero
        title="Vehicle Branding"
        subtitle="•  High-Performance Fleet Graphics"
        description="Built for endurance, designed for visibility"
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>

        <TextInServiceWrapper>
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
        </TextInServiceWrapper>
        <AnimatedLabels labels={labels} direction="left-to-right" />
        <AnimatedLabels labels={labels} direction="right-to-left" />


        <SummaryCard 
          title="What I need from you?"
          description={requirements2} />

        <CallToAction />
    </div>
  )
}

export default page