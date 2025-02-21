"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const stackItems = [
    { name: "Adobe Photoshop", icon: "/icons/photoshop.svg" },
    { name: "Adobe Illustrator", icon: "/icons/illustrator.svg" },
    { name: "Adobe InDesign", icon: "/icons/indesign.svg" },
    { name: "Adobe After Effects", icon: "/icons/aftereffects.svg" },
    { name: "Adobe Premiere", icon: "/icons/premier.svg" },
    { name: "Adobe Lightroom", icon: "/icons/lightroom.svg" },
];

const Stack: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 px-36">
    <div className="mx-24">

      <h2 className="text-3xl font-semibold mb-6 text-center">Stack</h2>

      <div className="grid grid-cols-2 gap-4 border-t border-x-gray-700 pt-4">
        {stackItems.map((item, index) => {
          const isLeftColumn = index % 2 === 0;

          return (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: isLeftColumn ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }} // Ensures it animates when 30% visible
              className={`flex items-center gap-3 border border-gray-700 p-4 rounded-xl bg-[#101010] 
              ${isLeftColumn ? "justify-end" : "justify-start"}`}
            >
              {isLeftColumn ? (
                <>
                  <span className="text-gray-400">{item.name}</span>
                  <Image src={item.icon} alt={item.name} width={24} height={24} className="h-6 w-6 rounded-md" />
                </>
              ) : (
                <>
                  <Image src={item.icon} alt={item.name} width={24} height={24} className="h-6 w-6 rounded-md" />
                  <span className="text-gray-400">{item.name}</span>
                </>
              )}
            </motion.div>
          );
        })}
      </div>

      </div>
    </section>
  );
};

export default Stack;
