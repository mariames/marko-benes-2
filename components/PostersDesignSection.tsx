"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PostersDesignSection: React.FC = () => {
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
            <Image src="/service-section/PostersAndFlyers/1_baby-kids-cosmetics-poster.jpg" alt="Promotional Design" className="w-full h-auto" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl font-bold mb-4">Every detail is important when it comes to promoting your brand and event.</p>
            <p className="text-lg mb-4">
              They must be completely tailored to your needs, target audience, and brand style. My goal is to help your business draw
              attention and leave a lasting impression with carefully designed posters, flyers, covers, and more.
            </p>
          </motion.div>
        </div>

        {/* Second Row: Two images */}
        <div className="grid grid-cols-2 gap-8">
          <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <img src="/service-section/PostersAndFlyers/2_sport-ads-instagram-poster.jpg" alt="Flyer Design" className="w-full h-auto" />
          </motion.div>
          <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <img src="/service-section/PostersAndFlyers/3_music-party-event-poster.jpg" alt="Poster Design" className="w-full h-auto" />
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
            <Image src="/service-section/PostersAndFlyers/4_magazine-ads-flyer-product.jpg" alt="Design Variety" className="w-full h-auto" />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Of course, I can create designs for all your needs:</h2>
            <p className="text-lg mb-4">
              Party, Products, Entertainment, Sport, Travel and Tourism, Fashion, Cosmetics, Beauty and Healthcare, Hospitality,
              Education, Agriculture, Engineering, Business, Real estate, Communication, etc.
            </p>
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
          <p className="mb-2">FLYERS | POSTERS | BANNERS | BOOK COVERS | MAGAZINE COVERS | LETTERHEADS | BROCHURES | TRI-FOLD</p>
          <p className="mb-2">BROCHURES | BUSINESS CARDS | and much more…</p>
        </motion.div>
      </div>
    </section>
  );
};

export default PostersDesignSection;
