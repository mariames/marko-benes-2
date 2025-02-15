"use client";
import React from "react";
import { motion } from "framer-motion";

const stackItems = [
  { name: "Adobe Photoshop", icon: "/icons/framer.svg" },
  { name: "Adobe Illustrator", icon: "/icons/figma.svg" },
  { name: "Adobe InDesign", icon: "/icons/illustrator.svg" },
  { name: "Adobe After Effects", icon: "/icons/photoshop.svg" },
  { name: "Adobe Premiere", icon: "/icons/slack.svg" },
  { name: "Slack", icon: "/icons/notion.svg" },
];

const Stack: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <h2 className="text-3xl font-semibold mb-6 text-center">Stack</h2>

      <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-4">
        {stackItems.map((item, index) => {
          const isLeftColumn = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isLeftColumn ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-center gap-3 border border-gray-700 p-4 rounded-xl bg-[#101010] 
              ${isLeftColumn ? "justify-end" : "justify-start"}`}
            >
              {isLeftColumn ? (
                <>
                  <span className="text-gray-400">{item.name}</span>
                  <img src={item.icon} alt={item.name} className="h-6 w-6" />
                </>
              ) : (
                <>
                  <img src={item.icon} alt={item.name} className="h-6 w-6" />
                  <span className="text-gray-400">{item.name}</span>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Stack;
