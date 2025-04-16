"use client";
import React from "react";
import Wizard from "./Wizard";
import { motion } from "framer-motion"; // Import Framer Motion


const ProjectPlaner: React.FC = () => {

  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        

        {/* Tabs Content */}
        <motion.div
          key={"activeTab"}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Wizard />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPlaner;
