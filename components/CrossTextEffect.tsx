import { motion } from "framer-motion";

interface CrossTextEffectProps {
  text: string;
  href: string;  // Link for navigation
}

const CrossTextEffect: React.FC<CrossTextEffectProps> = ({ text, href }) => {
  return (
    <motion.div key={text} className="relative inline-block" whileHover="hover">
      <a href={href} className="flex items-center tracking-wide">
        {Array.from(text).map((letter, index) => (
          <motion.span
            key={index}
            className="text-gray-100"
            variants={{
              hover: { color: "#ef4444" }, // Tailwind red-500 color
            }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {letter}
          </motion.span>
        ))}
      </a>
      <motion.div
        className="pointer-events-none absolute bottom-0 top-3 left-0 h-[2px] bg-red-500"
        initial={{ width: "0%" }}
        variants={{
          hover: { width: "100%", transition: { duration: 0.4 } },
        }}
      />
    </motion.div>
  );
};

export default CrossTextEffect;
