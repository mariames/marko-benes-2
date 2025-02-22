"use client";
import React, { useState } from "react";
import { Mail } from "lucide-react";
import ContactSection from "./ContactSection";
import ContactForm from "./ContactForm";
import Wizard from "./Wizard";
import { motion } from "framer-motion"; // Import Framer Motion

const socialLinks = [
  { icon: <Mail size={24} />, href: "https://twitter.com/" },
  { icon: <Mail size={24} />, href: "https://dribbble.com/" },
  { icon: <Mail size={24} />, href: "https://www.behance.net/" },
  { icon: <Mail size={24} />, href: "https://linkedin.com/" },
];

const ContactContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1); // 1 for content, 2 for contact form

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-between border-b border-gray-700 mb-6">
          <button
            onClick={() => handleTabClick(1)}
            className={`py-2 px-6 text-2xl font-normal transition ${
              activeTab === 1 ? "border-b-2 border-white" : ""
            }`}
          >
            Project Planner
          </button>
          <button
            onClick={() => handleTabClick(2)}
            className={`py-2 px-6 text-2xl font-normal transition ${
              activeTab === 2 ? "border-b-2 border-white" : ""
            }`}
          >
            Send Email
          </button>
          <button
            onClick={() => handleTabClick(3)}
            className={`py-2 px-6 text-2xl font-normal transition ${
              activeTab === 3 ? "border-b-2 border-white" : ""
            }`}
          >
            Social Networks
          </button>
        </div>

        {/* Tabs Content */}
        <motion.div
          key={activeTab} // Make the animation reset when switching tabs
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {activeTab === 1 && <Wizard />}
          {activeTab === 2 && <ContactForm />}
          {activeTab === 3 && <ContactSection />}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactContent;
