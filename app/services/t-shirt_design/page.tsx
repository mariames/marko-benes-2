"use client";
import CallToAction from '@/components/CallToAction';
import LiItem from '@/components/LiItem';
import ResponsiveServiceHero from '@/components/ResponsiveServiceHero';
import ServiceHero from '@/components/ServiceHero';
import { SummaryCard } from '@/components/SummaryCard';
import TextBlock from '@/components/TextBlock';
import TextInServiceWrapper from '@/components/TextInServiceWrapper';
import TShirtDesignSection from '@/components/TShirtDesignSection';
import { FaCheckCircle } from 'react-icons/fa';

const requirements = (
    <>
        <div className="space-y-2">
        <LiItem>
          Brand line, special event, gift, or something else
        </LiItem>

        <LiItem>
          Age, interests, gender, and people who will wear the shirts
        </LiItem>

        <LiItem>
          Specific theme for style: retro, minimalist, urban, sports, etc.
        </LiItem>

        <LiItem>
          Brand logo, tagline, text, or other graphic elements (if any)
        </LiItem>

        <LiItem>
          Is the design on the front, back, or sleeves
        </LiItem>

        <LiItem>
          Design dimensions for each part of the shirt
        </LiItem>

        <LiItem>
          Examples of designs you like so I know what type of style you prefer, brand guideline
        </LiItem>

        <LiItem>
          Type of printing (screen printing, sublimation, embroidery)
        </LiItem>

        </div>
    </>
);

const page = () => {

  const leftImgs = [
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/T-Shirt/1_t-shirt-design.jpg" },
    { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/T-Shirt/2_casual-wear-t-shirt-fashion.jpg" },
    { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/T-Shirt/3_printed-tee-design.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/T-Shirt/4_graphic-tee-design.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/T-Shirt/5_t-shirt-design-sublimation-sweetwear.jpg" },
  ];

  const rightImgs = [
    { id: 6, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/T-Shirt/6_design-casual-wear-print.jpg" },
    { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/T-Shirt/5_t-shirt-design-sublimation-sweetwear.jpg" },
    { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/T-Shirt/4_graphic-tee-design.jpg" },
    { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/T-Shirt/1_t-shirt-design.jpg" }
  ];
  return (
    <>
      <ResponsiveServiceHero 
        title="T-shirt Design"
        subtitle="• Cutting-Edge Print & Embroidery"
        description="Featuring advanced printing techniques for crisp, fade-resistant designs that stand out"
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"/>
      <TextInServiceWrapper>
        <TextBlock>
          T-shirts are the canvas on which your brand can tell its story. Whether you are creating branded t-shirts for a
          company, promotional products, sports jerseys or a fashion collection, I adapt each design to your visual identity,
          market and target audience in a modern, retro, minimalist or other style.
        </TextBlock>
        <TextBlock>
          In addition to aesthetics, the technical aspect of design is also crucial. That&#39;s why I place each element with precision,
          taking into account dimensions, proportions and artistic expression, so that the final product is maximally effective.
        </TextBlock>
        <TextBlock>
          Any type of design you decide on must be adapted to different printing methods, be it screen printing, digital
          printing, embroidery or sublimation. Each element should be placed thoughtfully so that the final product is durable,
          aesthetically consistent and technically perfect.
        </TextBlock>
        <TextBlock>
          Well-designed t-shirts not only attract attention, but create a strong association with your brand and the message
          you want to convey.
        </TextBlock>
      </TextInServiceWrapper>
      
      <SummaryCard 
        title="What I need from you?"
        description={requirements} />

      <CallToAction />
    </>
  )
}

export default page