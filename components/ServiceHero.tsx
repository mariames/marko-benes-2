"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton/AnimatedButton";
import Link from "next/link";

const mockData = [
  { id: 1, name: "Marina Serlin", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/1_packaging-design.jpg" },
  { id: 2, name: "Dany Lanza", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/2_label-design.jpg" },
  { id: 3, name: "Taanel Malleus", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/3_shelf-ready-packaging-design.jpg" },
  { id: 4, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/4_paneer-pouch-design.jpg" },
  { id: 5, name: "Patrick Kluivert", location: "Berlin, Germany", img: "/service-section/LabelsAndPackaging/5_product-label-design.jpgs" },
];

const duplicatedData = [...mockData, ...mockData]; // Duplicate for seamless loop

const ServiceHero = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Side */}
      <div className="w-1/2 bg-black flex flex-col justify-center px-16">
        <motion.span 
          className="text-base 2xl:text-2xl text-gray-200"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          • Industrial-Grade Packaging
        </motion.span>
        <motion.p 
          className="sm:text-xl md:text-2xl xl:text-5xl  2xl:text-7xl font-bold mt-2 text-white tracking-wide"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Labels & Packaging
        </motion.p>
        <motion.p 
          className="text-gray-200 mt-4 2xl:text-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Engineered for reliability, offering custom solutions that meet rigorous standards.
        </motion.p>
        <div className="flex gap-4 mt-6">
          <AnimatedButton text="Got a project?" link="/contact" />
          <motion.a
            href="/portfolio"
            className="px-6 py-3 border border-white rounded-lg text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Portfolio
          </motion.a>
        </div>
      </div>

      {/* Right Side - Infinite Looping Scroll */}
      <div className="w-1/2 flex">
        {/* Left Column - Moves Up */}
        <motion.div
          className="w-1/2 flex flex-col items-center"
          animate={{ y: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ willChange: "transform" }}
        >
          {duplicatedData.map((item, index) => (
            <div key={index} className="relative mb-4 mx-3">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </motion.div>

        {/* Right Column - Moves Down */}
        <motion.div
          className="w-1/2 flex flex-col items-center"
          animate={{ y: ["-50%", "0%"] }} // Move only half, allowing seamless looping
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        style={{ willChange: "transform" }}
        >
          {duplicatedData.map((item, index) => (
            <div key={index} className="relative mb-4">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceHero;
