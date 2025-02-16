"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useTransform, useViewportScroll, useSpring } from "framer-motion";

const SmoothScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Track the vertical scroll progress (0 to 1)
  const { scrollYProgress } = useViewportScroll();

  // Dynamically calculate scroll width (for horizontal scroll range)
  useEffect(() => {
    if (scrollRef.current) {
      setScrollWidth(scrollRef.current.scrollWidth); // Set the scroll width based on the container width
    }
  }, []);

  // Map vertical scroll progress to horizontal movement
  const scrollX = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  // Adjust spring physics for smooth scrolling and fine-tune
  const springX = useSpring(scrollX, { damping: 25, stiffness: 100 });

  // Control the opacity for each card to appear one by one
  const opacity = useTransform(scrollYProgress, [0, 1 / 6, 2 / 6, 3 / 6, 4 / 6, 5 / 6, 1], [1, 0, 0, 0, 0, 0, 1]);

  // Start the cards further to the right (off-screen)
  const initialX = useTransform(scrollYProgress, [0, 1], [1000, 0]); // Increased the value to move the cards further off-screen initially

  return (
    <div className="overflow-y-scroll h-[calc(100vh*7)] bg-gray-200">
      <motion.div
        ref={scrollRef}
        style={{ x: springX }}
        className="flex space-x-6"
      >
        {/* Cards */}
        <motion.div
          style={{ x: initialX, opacity }}
          className="w-screen h-48 bg-blue-300 rounded-lg shadow-lg"
        />
        <motion.div
          style={{ x: initialX, opacity }}
          className="w-screen h-48 bg-green-300 rounded-lg shadow-lg"
        />
        <motion.div
          style={{ x: initialX, opacity }}
          className="w-screen h-48 bg-red-300 rounded-lg shadow-lg"
        />
        <motion.div
          style={{ x: initialX, opacity }}
          className="w-screen h-48 bg-yellow-300 rounded-lg shadow-lg"
        />
        <motion.div
          style={{ x: initialX, opacity }}
          className="w-screen h-48 bg-purple-300 rounded-lg shadow-lg"
        />
        <motion.div
          style={{ x: initialX, opacity }}
          className="w-screen h-48 bg-pink-300 rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default SmoothScroll;
