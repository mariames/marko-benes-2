"use client";
import React from "react";
import { motion } from "framer-motion";

const TShirtDesignSection: React.FC = () => {
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
            <img src="/service-section/T-Shirt/1_t-shirt-design.jpg" alt="Packaging Design" className="w-full h-auto rounded-lg" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <p className="text-3xl font-bold mb-4">
                Your logo is the first impression you make - make it impressive! I offer professional design solutions that combine
                creativity and a strategic approach to logo design.
            <br></br>
                Whether you&#39;re starting a new business, rebranding an existing one, or simply looking for a fresh and modern logo
                design.
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
            <img src="/service-section/T-Shirt/2_casual-wear-t-shirt-fashion.jpg" alt="Packaging Design Example 1" className="w-full h-auto rounded-lg" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }} // Slide in from the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img src="/service-section/T-Shirt/3_graphic-tee-design.jpg" alt="Packaging Design Example 2" className="w-full h-auto rounded-lg" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default TShirtDesignSection;
