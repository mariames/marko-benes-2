import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection'
import ScrollingImages from '@/components/ScrollingImages';
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
  return (
    <div className='bg-black'>
      <TitleOFPage title="Vehicle Branding" />
      <ScrollingImages />
      <TextThatSlidesIn />
      <VehicleStack />
      <InfoSection title="What I need from you?"
      items={items} />
      <CallToAction />
    </div>
  )
}

export default page