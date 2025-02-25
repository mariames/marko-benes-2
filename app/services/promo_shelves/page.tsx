import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection';
import PromoShelvesSection from '@/components/PromoShelvesSection';
import TitleOFPage from '@/components/TitleOFPage'
import React from 'react'

const page = () => {
  const items = [
    "Dimensions for elements (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)",
    "Existing template or technical documentation (from shelf manufacturer)",
    "The logo of your brand or company (ai, eps, or pdf) / vector file",
    "Text you want to put on the design",
    "Key messages: (what should be highlighted on the shelf)",
    "Images/product model (if any)",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
    "Printed surfaces (which parts of the shelf can be branded - sides, top panel, frontal part)",
  ];
  return (
    <>
      <TitleOFPage title="Promo Shelves" />
      <PromoShelvesSection />
      <InfoSection
        title="What I need from you?"
        items={items} />
      <CallToAction />
    </>
  )
}

export default page