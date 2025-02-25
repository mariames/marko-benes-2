"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const BillboardSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* First Row: Image on the left, text on the right */}
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/BillboardsBannersRollUps/1_billboards-design.jpg" 
              alt="Billboard Design"
              width={1500}
              height={1124} 
              className="w-full h-auto rounded-xl" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold mb-4">No matter where you go—whether you&apos;re driving down the road or attending an event—you’re bound to see countless large-scale advertisements: eye-catching billboards, banners, and signboards. Some of them are truly stunning and impossible to ignore. Wondering how to create something even better? Let me bring your vision to life.</p>
          </motion.div>
        </div>

        {/* Second Row: Two images */}
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/BillboardsBannersRollUps/2_billboards-banners-backdrop-design.jpg" 
              alt="Banner Design 1"
              width={1500}
              height={1124} 
              className="w-full h-auto rounded-lg" />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/BillboardsBannersRollUps/3_city-light-ads-design.jpg"
              alt="Banner Design 2"
              width={1500}
              height={1124} 
              className="w-full h-auto rounded-lg" />
          </motion.div>
        </div>

        {/* Third Row: Image left, text right */}
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/BillboardsBannersRollUps/4_roll-up-retractable- banners-design.jpg"
              alt="Outdoor Advertising"
              width={1500}
              height={1124} 
              className="w-full h-auto rounded-lg" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl font-semibold mb-4">Also a wide range of advertising materials for outdoors and indoors.</p>
          </motion.div>
        </div>

        {/* Last Row: Text as a list */}
        <motion.div
          className="text-lg font-semibold mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">BILLBOARDS | ROLL-UPS/ RETRACTABLE BANNERS | CITY LIGHT ADVERTISING | BANNERS | VINYL BANNERS |</p>
          <p className="mb-2">BACKDROP | SHOP WINDOW BRANDING | FEATHER AND BEACH FLAGS | YARD SIGNS |</p>
        </motion.div>
      </div>
    </section>
  );
};

export default BillboardSection;
