import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection';
import PostersDesignSection from '@/components/PostersDesignSection';
import TitleOFPage from '@/components/TitleOFPage'
import React from 'react'

const page = () => {
  const items = [
    "Dimensions (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)",
    "The logo of your brand or company (ai, eps, or pdf) / vector file",
    "Text you want to put on the design (titles, subtitles, event/product/service/contact details)",
    "Key messages: (what should be highlighted - event, service, product, vision)",
    "Images/product model (if any)",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
    "Usage (print or digital)",
  ];

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

  return (
    <>
    <TitleOFPage title="Posters & Flyers" />
    <PostersDesignSection />
    <AnimatedLabels labels={labels} direction="left-to-right" />
    <AnimatedLabels labels={labels} direction="right-to-left" />
    <InfoSection
      title="What I need from you?"
      items={items}
    />
    <CallToAction />
    </>
  )
}

export default page