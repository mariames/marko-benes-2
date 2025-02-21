"use client";
import React from "react";
import { motion } from "framer-motion";

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
            <img src="/service-section/LabelsAndPackaging/1_packaging-design.jpg" alt="Packaging Design" className="w-full h-auto" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <h2 className="text-3xl font-bold mb-4">Are you in need of an eye-catching and professionally designed label and packaging for your product?</h2>
            <p className="text-lg mb-4">
              I'm here to help you create an impressive design that will captivate your target audience and elevate your brand. My approach combines creativity and strategic thinking to make your product stand out on the shelf.
            </p>
          </motion.div>
        </div>

        {/* Second Row: Two images */}
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }} // Slide in from the left
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src="/service-section/LabelsAndPackaging/2_label-design.jpg" alt="Packaging Design Example 1" className="w-full h-auto" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }} // Slide in from the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src="/service-section/LabelsAndPackaging/3_shelf-ready-packaging-design.jpg" alt="Packaging Design Example 2" className="w-full h-auto" />
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
            <img src="/service-section/LabelsAndPackaging/4_paneer-pouch-design.jpg" alt="Packaging Design Example 3" className="w-full h-auto" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }} // Slide in from the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src="/service-section/LabelsAndPackaging/5_product-label-design.jpg" alt="Packaging Design Example 4" className="w-full h-auto" />
          </motion.div>
        </div>

        {/* Fourth Row: Text as a list */}
        <motion.div
          className="text-lg font-semibold mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Fade in the text
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">PRODUCT LABEL | BOX DESIGN | SHELF READY PACKAGING | PANEER POUCH DESIGN | STAND-UP POUCH |</p>
          <p className="mb-2">DOYPACK | SPRAY BOTTLE PACKAGING | FOOD PACKAGING | COSMETICS PACKAGING | SUPPLEMENT PACKAGING |</p>
          <p className="mb-2">AMAZON PRODUCT PACKAGING | and Complete Product Packaging for any kind of product</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagingDesignSection;
