import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection'
import PackagingDesignSection from '@/components/PackagingDesignSection';
import TitleOFPage from '@/components/TitleOFPage';
import React from 'react'

const page = () => {

  const items = [
    "Dimensions (height x width) or dieline in vector format (ai, eps, pdf)",
    "The logo of your brand or company (ai, eps, pdf) / vector file",
    "Text which is necessary to put on the design and text of the declaration with pictograms, barcode, etc.",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
    "Packaging material (cardboard, plastic, glass, bag, can, etc.)",
    "Printing method (offset, flexography, digital printing)",
  ];

  return (
    <>
      <TitleOFPage title="Labels & Packaging" />
      <PackagingDesignSection />
      <InfoSection
        title="What I need from you?"
        items={items} />
      <CallToAction />
    </>
  )
}

export default page