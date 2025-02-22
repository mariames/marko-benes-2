"use client";
import React from "react";
import { motion } from "framer-motion";

const stackItems = [
    { name: "CAR" },
    { name: "VAN" },
    { name: "TRUCK/LORRY" },
    { name: "BUS" }
];

const VehicleStack: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 xl:px-36 lg:px-36 md:px-32 max-sm:px-12 mt-16 ">
      <div className="md:mx-24 sm:mx-12">
        <p className="text-3xl font-light mb-6 text-center">Your Vehicle is More Than Transportation</p>
        
        <div className="grid grid-cols-2 gap-4 border-t border-x-gray-700 pt-4">
          {stackItems.map((item, index) => {
            const isLeftColumn = index % 2 === 0;

            return (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: isLeftColumn ? -50 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`flex items-center gap-3 border border-gray-700 p-4 rounded-xl bg-[#101010] 
                ${isLeftColumn ? "justify-end" : "justify-start"}`}
              >
                <span className="text-gray-400">{item.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Last row with a different layout */}
        <div className="mt-4 text-center border border-gray-700 p-4 rounded-xl bg-[#101010]">
          <span className="text-gray-400">Also other types of vehicle wrap design</span>
        </div>
      </div>
    </section>
  );
};

export default VehicleStack;
