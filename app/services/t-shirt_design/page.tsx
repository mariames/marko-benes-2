import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection';
import TitleOFPage from '@/components/TitleOFPage'
import React from 'react'

const page = () => {
  const items = [
    "Brand line, special event, gift, or something else",
    "Age, interests, gender, and people who will wear the shirts",
    "Specific theme for style: retro, minimalist, urban, sports, etc.",
    "Brand logo, tagline, text, or other graphic elements (if any)",
    "Is the design on the front, back, or sleeves",
    "Design dimensions for each part of the shirt",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
    "Type of printing (screen printing, sublimation, embroidery)",
  ];
  return (
    <>
      <TitleOFPage title="T-shirt design" />
      <InfoSection
        title="What I need from you?"
        items={items} />
      <CallToAction />
    </>
  )
}

export default page