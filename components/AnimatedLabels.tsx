"use client";
import { motion } from "framer-motion";

interface AnimatedLabelsProps {
  labels: string[]; // Array of strings to display in the animated labels
  direction: "left-to-right" | "right-to-left"; // Direction of the scroll
}

const AnimatedLabels: React.FC<AnimatedLabelsProps> = ({ labels, direction }) => {
  // Join labels into one string and duplicate it for a seamless scroll
  const fullText = labels.join(" | ");

  // Set the animation direction based on the 'direction' prop
  const animationDirection =
    direction === "left-to-right"
      ? ["-100%", "100%"] // Start from off-screen left, move to off-screen right
      : ["0%", "-100%"]; // Start from off-screen right, move to off-screen left

  return (
    <motion.div
      className="overflow-hidden whitespace-nowrap text-white"
      style={{
        position: "relative",
        width: "100%", // Ensure the container takes full width
      }}
    >
      <motion.div
        className="flex text-3xl"
        style={{
          whiteSpace: "nowrap", // Ensure all text stays on one line
        }}
        animate={{
          x: animationDirection, // Move the entire text based on the direction
        }}
        transition={{
          duration: 70, // Adjust the speed of the scroll
          ease: "linear",
          repeat: Infinity, // Infinite loop
        }}
      >
        {/* Duplicate the labels to create the infinite scroll effect */}
        <span>{fullText}</span>
        <span>{fullText}</span> {/* Duplicate text */}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLabels;
