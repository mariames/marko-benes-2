"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const LandingSection: React.FC = () => {
  const { scrollYProgress } = useScroll(); // Get the scroll position

  // Scale the image dynamically until it reaches full screen
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [0.7, 1]);

  // Fade out text as user scrolls
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section className="relative w-full h-[300vh] bg-black">
      {/* Text Section */}
      <motion.div
        className="absolute text-center w-full top-[14vh] px-4"  // Moved text down
        style={{ opacity: textOpacity }}
      >
        <p className="sm:text-base md:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl 5xl:text-9xl  font-bold farmhouse-title text-white mb-4">
          Hi! I am Marko!
        </p>
        <p className="sm:text-base md:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl 5xl:text-8xl  text-neutral-100 dark:text-neutral-200 font-semibold text-xs  ">
          A <span className="text-gray-400">Graphic Designer</span> specializing in creating delightful designs.
        </p>
        <p className="sm:text-base md:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl 5xl:text-8xl mb-5 text-neutral-100 dark:text-neutral-200 font-semibold text-xs ">
          Partnering with agencies, start-ups, and companies worldwide.
        </p>
      </motion.div>

      {/* Sticky Image Section */}
      <div className="sticky top-[40vh] 2xl:top-[21vh] 3xl:top-[25vh] 4xl:top-[20vh] h-screen flex items-baseline justify-center">  {/* Move image down */}
        <motion.img
          src="/About_Marko.jpg"
          alt="About Marko"
          className="w-auto h-auto max-w-full max-h-full object-contain"
          style={{
            scale: imageScale, // Grow while scrolling
          }}
        />
      </div>
    </section>
  );
};

export default LandingSection;
