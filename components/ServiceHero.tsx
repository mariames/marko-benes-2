"use client";

import { motion } from "framer-motion";
import AnimatedButton from "./AnimatedButton/AnimatedButton";



interface ServiceHeroPros {
  title: string;
  subtitle: string;
  description: string;
  portfolioLink: string;
  leftImgs: { id: number; name: string; location: string; img: string }[];
  rightImgs: { id: number; name: string; location: string; img: string }[];
}
const ServiceHero: React.FC<ServiceHeroPros> = ({
  title,
  subtitle,
  description,
  portfolioLink,
  leftImgs,
  rightImgs
}) => {
  
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
          {subtitle}
        </motion.span>
        <motion.p 
          className="sm:text-xl md:text-2xl xl:text-5xl  2xl:text-7xl font-bold mt-2 text-white tracking-wide"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.p>
        <motion.p 
          className="text-gray-200 mt-4 2xl:text-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {description}
        </motion.p>
        <div className="flex gap-4 mt-6">
          <AnimatedButton text="Got a project?" link="/contact" />
          <motion.a
            href={portfolioLink}
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
          {leftImgs.map((item, index) => (
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
          {rightImgs.map((item, index) => (
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
