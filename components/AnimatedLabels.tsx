"use client";
import { motion } from "framer-motion";

interface AnimatedLabelsProps {
  labels: string[];
  direction: "left-to-right" | "right-to-left";
}

const AnimatedLabels: React.FC<AnimatedLabelsProps> = ({ labels, direction }) => {
  const fullText = labels.join(" | "); // Create a continuous string
  const duplicatedText = `${fullText} | ${fullText} | ${fullText}`; // Triple duplication for smooth looping

  const isLeftToRight = direction === "left-to-right";

  return (
    <div className="overflow-hidden whitespace-nowrap w-full text-white">
      <motion.div
        className="flex text-3xl"
        style={{
          display: "inline-flex",
          whiteSpace: "nowrap",
        }}
        animate={{
          x: isLeftToRight ? ["-33.3%", "0%"] : ["0%", "-33.3%"], // Moves 1/3 of text width
        }}
        transition={{
          duration: 70, // Adjust speed
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Triplicated text ensures continuous looping */}
        <span>{duplicatedText}</span>
      </motion.div>
    </div>
  );
};

export default AnimatedLabels;
