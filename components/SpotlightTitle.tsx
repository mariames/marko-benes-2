"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";

export default function SpotlightTitle() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <div
      className="relative flex justify-center items-center h-screen bg-gray-900 text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${springX.get()}px ${springY.get()}px, rgba(255,255,255,0.3), transparent 150px)`,
          WebkitMaskImage: `radial-gradient(circle at ${springX.get()}px ${springY.get()}px, white, transparent 150px)`,
        }}
      />
      <h1 className="relative text-6xl font-bold z-10">Let s Create Something Amazing</h1>
    </div>
  );
}
