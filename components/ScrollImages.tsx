"use client";

import { motion } from "framer-motion";

interface ScrollImagesProps {
  images: { img: string; name: string }[];
  direction: "left-to-right" | "right-to-left";
}

const ScrollImages: React.FC<ScrollImagesProps> = ({ images, direction }) => {
  const isLeftToRight = direction === "left-to-right";
  const imageRow = [...images, ...images, ...images]; // tripled for looping

  return (
    <div className="relative overflow-hidden w-full h-44 bg-purple-500">
        
        
      <motion.div
        className="absolute left-0 top-0 flex flex-nowrap gap-2"
        style={{ willChange: "transform" }}
        animate={{
          x: isLeftToRight ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {imageRow.map((item, index) => (
          <div key={index} className="min-w-[176px] h-[176px] flex-shrink-0 bg-pink-500">
            <img
              src={item.img}
              alt={item.name}
              className="w-44 h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>
      
    </div>
  );
};

export default ScrollImages;
