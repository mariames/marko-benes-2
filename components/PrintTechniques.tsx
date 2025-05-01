"use client";
import React from "react";
import { motion } from "framer-motion";
import DryStamp from "./DryStamp";
import FoilStamping from "./FoilStamping";
import UvVarnish from "./UvVarnish";

const PrintTechniques: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 lg:py-16 relative flex justify-center w-full overflow-x-hidden max-sm:overflow-y-hidden">
      <div className="w-full max-w-screen-xl 4xl:max-w-screen-3xl space-y-12">
        
        {/* DRY STAMP */}
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/* 
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
          
          */}
          <div className="flex-1">
          <motion.img
            className="w-72 lg:w-full h-auto rounded-lg"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            src="/service-section/LabelsAndPackaging/print_finishing_techniques/dry_stamp_embossing_debossing_label_design.jpg" 
              width={1400} 
              height={972} 
              alt="Dry Stamp" 
          />
          </div>
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

        {/* FOIL STAMPING */}
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
          {/* 
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
          */}
          <div className="flex-1">
            <motion.img 
              className="w-72 lg:w-full h-auto rounded-lg"
              initial={{ x: 100, opacity: 0 }} 
              whileInView={{ x: 0, opacity: 1 }} 
              transition={{ duration: 1 }} 
              viewport={{ once: true }}
              src="/service-section/LabelsAndPackaging/print_finishing_techniques/hot_foil_stamping_foil_blocking_packaging_design.jpg" 
              alt="Foil Stamping" 
              width={1400} 
              height={972} />
          </div>
           
          
          
        </div>

        {/* UV VARNISH */}
        <div className="flex flex-col lg:flex-row gap-4 items-center">
          {/** 
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
          */}
          <div className="flex-1">
            <motion.img
              className="w-72 lg:w-full h-auto rounded-lg"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src="/service-section/LabelsAndPackaging/print_finishing_techniques/uv_varnish_uv_coating_spot_label_design.jpg" 
              width={1400} 
              height={972} 
              alt="Design Variety" 
            /> 
          </div>
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
