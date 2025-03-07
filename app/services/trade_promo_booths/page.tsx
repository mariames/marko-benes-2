import AnimatedLabels from '@/components/AnimatedLabels'
import CallToAction from '@/components/CallToAction'
import InfoSection from '@/components/InfoSection'
import TitleOFPage from '@/components/TitleOFPage'
import TradePromoBoothSection from '@/components/TradePromoBoothSection'
import React from 'react'

const page = () => {
  const items = [
    "Dimensions for elements (height x width) or dieline for some irregular formats in vector file (ai, eps, pdf)",
    "Existing template or technical documentation (from shelf manufacturer)",
    "The logo of your brand or company (ai, eps, or pdf) / vector file",
    "Text you want to put on the design (titles, subtitles, event/product/service/contact details)",
    "Key messages: (what should be highlighted - event, service, product, vision)",
    "Images/product model (if any)",
    "Examples of designs you like so I know what type of style you prefer, brand guideline",
    "Printed surfaces (which parts of the stand are branded - counter, sides, upper panels)",
  ]

  const labels = [
    "TRADE PROMO BOOTHS",
    "KIOSK",
    "PROMO BOOTHS",
    "PROMO TABLE",
    "FAIR STAND"
  ];

  return (
    <>
      <TitleOFPage title="Trade Promo Booths" />
      <TradePromoBoothSection />
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <InfoSection title="What I need from you?"
      items={items} />
      <CallToAction />
    </>
  )
}

export default page