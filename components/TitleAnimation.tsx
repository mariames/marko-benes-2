"use client";

import { motion } from "framer-motion";

interface TitleAnimationProps {
    title: string;
    message: string;
  }
const TitleAnimation: React.FC<TitleAnimationProps> = ({
    title,
    message
}) => {

  return (
    <div className="relative flex justify-center items-center h-80 overflow-hidden bg-black">
      {/* Main Title */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0.5 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute text-white font-bold uppercase text-2xl md:text-5xl"
      >
        {title}
      </motion.h1>

      {/* Shadow Text (Below Main) */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        className="absolute text-gray-200 font-bold uppercase text-2xl md:text-5xl translate-y-8 top-24"
      >
        {message}
      </motion.h1>

      {/* Extra Shadow Layer (Even Lighter) */}
      {/** 
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute text-gray-800 font-bold uppercase text-2xl md:text-7xl translate-y-16 right-11 top-24"
      >
        PROJECTS / OUR / WORK / OR
      </motion.h1>
      */}
    </div>
  );
};

export default TitleAnimation;
