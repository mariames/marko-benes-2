"use client";
import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const AboutMarko: React.FC = () => {
    const { scrollYProgress } = useScroll(); // Get the scroll position
  
    // Scale the image dynamically until it reaches full screen
    const imageScale = useTransform(scrollYProgress, [0, 0.1], [0.7, 1]);
  
    // Fade out text as user scrolls
    const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  
    return (
      <section className="relative w-full h-[70vh] lg:h-[100vh] bg-purple-500"> {/** bg-black */}
  
        <div className="top-[40vh] 2xl:top-[21vh] 3xl:top-[25vh] 4xl:top-[20vh] h-screen flex items-baseline justify-center">  {/* Move image down */}
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
  
  export default AboutMarko;