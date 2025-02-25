"use client";

import { motion } from "framer-motion";

const TextThatSlidesIn: React.FC = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "tween", duration: 1, ease: "easeOut" }}
      className="text-center"
    >
      <p className="text-lg text-white">
        It&apos;s a mobile advertisement that works constantly for you! Creating eye-catching and effective vehicle branding solutions will make your brand stand out wherever you go.
      </p>
      <p className="text-lg mt-2 text-white">
        Whether it&apos;s cars, vans, or trucks, my goal is to combine creativity and functionality, ensuring your visual message is clear, professional, and easily recognizable.
      </p>
      <p className="text-lg mt-2 font-semibold text-white">
        Turn your vehicle into a powerful marketing tool that leaves a strong impression!
      </p>
    </motion.div>
  );
};

export default TextThatSlidesIn;
