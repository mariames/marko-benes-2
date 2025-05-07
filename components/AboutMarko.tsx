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
      <section className="relative w-full h-[50vh] lg:h-[100vh] bg-black"> 
         
        <div className="top-[40vh] md:top-[30vh] 2xl:top-[30vh] 3xl:top-[25vh] 4xl:top-[20vh] h-screen flex items-baseline justify-center">  
          
          <motion.img
            src="/about/marko-large.jpg"
            srcSet="
              /about/marko-small.webp 960w,
              /about/marko-medium.webp 2048w,
              /about/marko-large.webp 3336w
            "
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
            alt="About Marko"
            className="w-auto h-auto max-w-full max-h-full object-contain"
            style={{
              scale: imageScale, // Grow while scrolling
            }}
            loading="lazy"
          />

        </div>
        
      </section>
    );
  };
  
  export default AboutMarko;