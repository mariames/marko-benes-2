"use client";
import React from "react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  description: string;
}

const cardData: CardProps[] = [
  {
    title: "Education & Early Career",
    description:
      "I graduated from the Faculty of Technical Sciences in Novi Sad, department for Graphic Engineering and Design. After graduation, I worked as a freelancer in the field of graphic design, working and improving my skills in Adobe Photoshop, Adobe Illustrator, Adobe InDesign, Adobe After Effects, and Adobe Premiere software.",
  },
  {
    title: "Work Experience (2014-2022)",
    description:
      "From 2014 to 2022, I worked full-time in Lomax Company, complementing my knowledge in the above-mentioned software and working in various fields of graphic design: product labels, product packaging, posters, flyers, logos, brochures, advertising solutions, catalogs, trade promo booths, promo shelves, billboards, vehicle branding, 3D models of products, T-shirts design, video design, etc.",
  },
  {
    title: "Pre-Press & Printing",
    description:
      "Besides design itself, I have experience in pre-press which is an important part of getting the final print product, where design should be technically adjusted and prepared with quality for the printing process. Printing techniques for which I can prepare print files are: offset, flexo, digital, screen printing, pad printing, solvent, and others. I can say that my knowledge of graphic design, pre-press, and printing techniques is at a high level.",
  },
  {
    title: "Freelance Career (Since 2022)",
    description:
      "Since November 2022, I have been working entirely as a self-employed designer.",
  },
];

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start position (invisible and 50px down)
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
      }} // Trigger animation when in view
      viewport={{ once: true }} // Trigger the animation once when it's in view
      className="bg-[#101010] text-white border border-gray-700 rounded-lg p-6"
    >
      <p className="text-lg lg:text-3xl font-normal 2xl:text-5xl">{title}</p>
      <hr className="border-gray-600 my-2" />
      <p className="text-gray-300 2xl:text-2xl">{description}</p>
    </motion.div>
  );
};

const CardSection: React.FC = () => {
  return (
    <section className="bg-black px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
