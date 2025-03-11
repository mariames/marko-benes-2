"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PackagingDesignSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* First Row: Image on the left, text on the right */}
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <Image 
              src="/service-section/LabelsAndPackaging/1_packaging-design.jpg" 
              alt="Packaging Design" className="w-full h-auto rounded-lg"
              width={1500}
              height={1124}  />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <p className="text-2xl mb-4">
              Labels provide important product information, help build brand identity, and make it easier for consumers to understand the product&apos;s key details, such as ingredients and benefits.
            </p>
          </motion.div>
        </div>


        {/* Second Row: Image on the left, text on the right */}
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <p className="text-2xl mb-4">
            Packaging serves both protective and marketing purposes, influencing consumer emotions and behaviors through colors, shapes, and materials. It&apos;s crucial for packaging to align with the brand&apos;s identity and messaging.
            </p>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <Image 
              src="/service-section/LabelsAndPackaging/2_label-design.jpg" 
              alt="Packaging Design" className="w-full h-auto rounded-lg"
              width={1500}
              height={1124}  />
          </motion.div>
        </div>

        {/* First Row: Image on the left, text on the right */}
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }} // Start off-screen to the left
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <Image 
              src="/service-section/LabelsAndPackaging/3_shelf-ready-packaging-design.jpg" 
              alt="Packaging Design" className="w-full h-auto rounded-lg"
              width={1500}
              height={1124}  />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <p className="text-2xl mb-4">
              It is important to adapt the design to the production requirements, paying attention to colors, materials, folds, and finishing effects, ensuring that the print quality is flawless on any technology: flexography, offset, or digital.
            </p>
          </motion.div>
        </div>


        {/* Third Row: Two images */}
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }} // Slide in from the left
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/LabelsAndPackaging/4_paneer-pouch-design.jpg" 
              alt="Packaging Design Example 3"
              width={1500}
              height={1124}  
              className="w-full h-auto rounded-lg" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }} // Slide in from the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/LabelsAndPackaging/5_product-label-design.jpg"
              alt="Packaging Design Example 4" 
              width={1500}
              height={1124} 
              className="w-full h-auto rounded-lg" />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default PackagingDesignSection;
