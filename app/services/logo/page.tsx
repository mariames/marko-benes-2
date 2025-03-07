import AnimatedLabels from '@/components/AnimatedLabels';
import CallToAction from '@/components/CallToAction';
import InfoSection from '@/components/InfoSection';
import LogoSection from '@/components/LogoSection';
import TitleOFPage from '@/components/TitleOFPage';
import React from 'react'

const page = () => {
  const items = [
    "Brand/company name (the exact name that will be on the logo)",
    "Slogan (if any - should it be part of the logo)",
    "Type of logo (textual - logo with letters, symbolic - icon, combination of text and symbols)",
    "Colors (do you have certain preferred colors)",
    "Fonts (do you want modern, classic, handwritten style, etc.)",
    "Logo Style (Minimalist, Luxury, Fun, Serious)",
    "If you have any samples/sketches you like",
  ];

  const labels = [
    "LOGO",
    "WORDMARK",
    "VISUAL IDENTITY",
    "CORPORATE IDENTITY"
  ];
  return (
    <>
      <TitleOFPage title="Logo" />
      <LogoSection />
      <AnimatedLabels labels={labels} direction="left-to-right" />
      <AnimatedLabels labels={labels} direction="right-to-left" />
      <InfoSection
        title="What I need from you?"
        items={items} />
        <CallToAction />
    </>
  )
}

export default page