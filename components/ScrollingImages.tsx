"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollingImages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rightImageY = useTransform(scrollYProgress, [0, 0.5], [150, 0]);
  const leftImageY = useTransform(scrollYProgress, [0.5, 1], [150, 0]);

  return (
    <div ref={containerRef} className="h-[200vh] flex flex-col justify-center items-center relative mb-48 mx-10">
      <div className="sticky top-20 w-full flex flex-col space-y-10">
        {/* First Row */}
        <div className="flex justify-center space-x-10 w-full max-w-[90vw]">
          <motion.img
            src="/service-section/VehicleBranding/1_truck-lorry-branding-design.jpg"
            className="w-full max-w-[45vw] aspect-[1500/1124] object-cover rounded-lg"
          />
          <motion.img
            src="/service-section/VehicleBranding/3_van_branding_design.jpg"
            className="w-full max-w-[45vw] aspect-[1500/1124] object-cover rounded-lg"
            style={{ y: rightImageY }}
          />
        </div>
        {/* Second Row */}
        <div className="flex justify-center w-full max-w-[90vw]">
          <motion.img
            src="/service-section/VehicleBranding/2_van-branding.jpg"
            className="w-full max-w-[50vw] aspect-[1500/1124] object-cover rounded-lg"
            style={{ y: leftImageY }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollingImages;
