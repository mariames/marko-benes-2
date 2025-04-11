"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DryStamp from "./DryStamp";
import FoilStamping from "./FoilStamping";
import UvVarnish from "./UvVarnish";

const PrintTechniques: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 relative">
      <div className="w-full space-y-12">
        {/* First Row: Image on the left, text on the right */}
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src="/service-section/PostersAndFlyers/1_baby-kids-cosmetics-poster.jpg" width={1500} height={1124} alt="Promotional Design" className="w-full h-auto rounded-lg" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <DryStamp />
          </motion.div>
        </div>

        {/* Second Row: Two images */}
        <div className="grid grid-cols-2 gap-8">
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <FoilStamping />
          </motion.div>
          <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <img src="/service-section/PostersAndFlyers/3_music-party-event-poster.jpg" alt="Poster Design" className="w-full h-auto rounded-lg" />
          </motion.div>
        </div>

        {/* Third Row: Image on the left, text on the right */}
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src="/service-section/PostersAndFlyers/4_magazine-ads-flyer-product.jpg" width={1500} height={1124} alt="Design Variety" className="w-full h-auto rounded-lg" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <UvVarnish />
          </motion.div>
        </div>

        {/* List of Design Types */}
        <motion.div
          className="text-lg font-semibold mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default PrintTechniques;
