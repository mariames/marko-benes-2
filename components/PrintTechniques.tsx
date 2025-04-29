"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import DryStamp from "./DryStamp";
import FoilStamping from "./FoilStamping";
import UvVarnish from "./UvVarnish";

const PrintTechniques: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 lg:py-16 relative flex justify-center w-full overflow-x-hidden max-sm:overflow-y-hidden">
      <div className="w-full max-w-screen-xl 4xl:max-w-screen-3xl space-y-12">
        
        {/* First Row: Image on the left, text on the right */}
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/LabelsAndPackaging/print_finishing_techniques/dry_stamp_embossing_debossing_label_design.jpg" 
              width={1400} 
              height={972} 
              alt="Promotional Design" 
              className="w-72 lg:w-full h-auto rounded-lg" 
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <DryStamp />
          </motion.div>
        </div>

        {/* Second Row: Two images */}
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <motion.div
            className="flex-1" 
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }} 
            viewport={{ once: true }}
          >
            <FoilStamping />
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ x: 100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }} 
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/LabelsAndPackaging/print_finishing_techniques/hot_foil_stamping_foil_blocking_packaging_design.jpg" 
              alt="Foil stamping" 
              className="w-72 lg:w-full h-auto rounded-lg" 
              width={1400} 
              height={972} 
            />
          </motion.div>
        </div>

        {/* Third Row: Image on the left, text on the right */}
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image 
              src="/service-section/LabelsAndPackaging/print_finishing_techniques/uv_varnish_uv_coating_spot_label_design.jpg" 
              width={1400} 
              height={972} 
              alt="Design Variety" 
              className="w-72 lg:w-full h-auto rounded-lg" 
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <UvVarnish />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PrintTechniques;
