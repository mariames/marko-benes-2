"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const TradePromoBoothSection: React.FC = () => {
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
            <Image src="/service-section/PromoBooths/1_promo-trade-booth-stand-fair-design.jpg" alt="Packaging Design" 
              width={1500}
              height={1124} 
             className="w-full h-auto rounded-lg" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }} // Start off-screen to the right
            whileInView={{ x: 0, opacity: 1 }} // Slide into view and fade in
            transition={{ duration: 1 }}
            viewport={{ once: true }} // Trigger only once when entering the viewport
          >
            <p className="text-3xl font-bold mb-4">Whether you&#39;re participating in a trade show, conference, or promotion, a visually appealing promo booth, promo
              table or kiosk design can make a huge difference. My goal is to help your brand stand out, attract visitors, and leave a lasting impression through unique visual concepts.</p>
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
            <Image src="/service-section/PromoBooths/2_promo-booth-stand-fair-branding-elements.jpg" alt="Packaging Design Example 1"
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
            <Image src="/service-section/PromoBooths/6_promo-table-design.jpg" alt="Packaging Design Example 2"
                          width={1500}
                          height={1124}  className="w-full h-auto rounded-lg" />
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

export default TradePromoBoothSection;
