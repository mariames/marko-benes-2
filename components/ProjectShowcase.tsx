"use client";

import React from "react";
import { motion } from "framer-motion";

const ProjectShowcase: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-[#101010] rounded-lg shadow-lg overflow-hidden border border-gray-800">
        {/* Left Side - Image Section */}
        <div className="relative w-full md:w-2/3 bg-[#101010] p-6 flex items-center justify-center">
          <img
            src="/ss1.png"
            alt="Project Image"
            className="rounded-lg object-cover w-full"
          />
          {/* Navigation Arrow */}
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition">
            {/** <ArrowLeft size={18} /> */}
          </button>
        </div>

        {/* Right Side - Project Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/3 bg-[#151515] p-6 text-white border-l border-gray-800"
        >
          <div className="space-y-4">
            <div>
              <h3 className="text-gray-400 text-sm uppercase">Project</h3>
              <p className="bg-[#101010] p-3 rounded-md border border-gray-700">EcoCommerce</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm uppercase">Year</h3>
              <p className="bg-[#101010] p-3 rounded-md border border-gray-700">2023</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm uppercase">Service</h3>
              <p className="bg-[#101010] p-3 rounded-md border border-gray-700">Product Design</p>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm uppercase">Description</h3>
              <p className="bg-[#101010] p-3 rounded-md border border-gray-700 text-gray-300">
                The EcoCommerce Platform aims to revolutionize online shopping by creating an eco-friendly marketplace. The platform connects users with sustainable brands and products while providing a seamless and enjoyable shopping experience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
