"use client";
import React from "react";
import { motion } from "framer-motion";
import TargetAudienceCard from "./TargetAudienceCard";
import { FaCheckCircle } from "react-icons/fa";
import DesignProcess from "./DesignProcess";

interface CollaborationStep {
  title: string;
  description: React.ReactNode; // Change from string to ReactNode to allow JSX
}

const collaborationSteps: CollaborationStep[] = [
  {
    title: "My approach",
    description: (
      <DesignProcess />
    ),
  },
  {
    title: "Understanding the Client's Needs",
    description: (
      <div> 
        <p className="2xl:text-2xl">Before starting any work, it is important to understand the client&#39;s needs and expectations fully.</p>
          <div className="flex items-center space-x-2 mt-3">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-200 2xl:text-2xl">What is the purpose of the project?</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Who is the target audience and preferred style?</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">What are the key visual elements that need to be highlighted?</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Are there any reference materials or brand guidelines?</p>
          </div>
        <p className="mt-5 2xl:text-2xl">In the Services section, you can view all the necessary information that I need for each type of service.</p>
      </div>
    ),
  },
  {
    title: "Setting Clear Expectations",
    description: (
      <>
        <p className="2xl:text-2xl">The scope of work, deadlines, and budget are clearly defined to avoid disagreements at a later stage.</p>
        <p className="2xl:text-2xl">Let&#39;s agree on
        the following:</p>
        <div className="flex items-center space-x-2 mt-3">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Number of revisions</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Time frame for each phase of the project</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Method of communication and delivery of materials in specific formats</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">Rights to use the final design solutions so that both parties are protected</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">We conclude a contract/agreement with all clearly defined conditions</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-[#e5dfd3]" />
            <p className="text-gray-300 2xl:text-2xl">After the invoice is issued and the client makes full payment or a certain agreed percentage, I start
            work</p>
          </div>

          <p className="2xl:text-2xl mt-3">
          I work on a flat fee basis for projects, so I&#39;ll quote you a single project price instead of an hourly rate so
          there&#39;s no hidden fees. Of course, if the need arises for additional work beyond the agreed scope, I will be
          free to adjust the price accordingly.
          </p>
          <p className="2xl:text-2xl mt-3">
          Most of the works showcased on this site took somewhere between 4—10 days to complete, and vary in
          cost.<br></br> The scope of work, types of servises, and a host of other influences are factored into my pricing,
          meaning every project is different. But as a general rule of thumb, most of my projects tend to range from
          $70&ndash;$1000, again depending on the specifics.
          </p>
      </>
    ),
  },
  {
    title: "Research and Conceptualization",
    description: (
      <p className="2xl:text-2xl">
        Before designing, I analyze the industry and competition to create a
        solution that is both creative and aligned with trends.
      </p>
    ),
  },
  {
    title: "Transparent Communication",
    description: (
      <p className="2xl:text-2xl">
        I maintain regular communication with clients, providing updates and
        seeking feedback throughout the project.
      </p>
    ),
  },
  {
    title: "Flexibility and Adaptation",
    description: (
      <p className="2xl:text-2xl">
        While having a clear vision is important, I welcome constructive
        feedback and additional adjustments to ensure client satisfaction.
      </p>
    ),
  },
  {
    title: "Delivery of Final Materials",
    description: (
      <p className="2xl:text-2xl">
        Once the design is approved, I provide print-ready files and all
        required formats (PSD, AI, PDF, PNG, etc.).
      </p>
    ),
  },
];

const CollaborateCard: React.FC<CollaborationStep> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
      }}
      viewport={{ once: true }}
      className="bg-[#101010] text-white border border-gray-700 rounded-lg p-6"
    >
      <p className="text-lg lg:text-3xl 2xl:text-4xl font-normal">{title}</p>
      <hr className="border-gray-600 my-2" />
      {description}
    </motion.div>
  );
};

const CollaborateSection: React.FC = () => {
  return (
    <section className="bg-black px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {collaborationSteps.map((step, index) => (
          <CollaborateCard key={index} {...step} />
        ))}
        <div className="space-y-6">
          <TargetAudienceCard />
        </div>
      </div>
    </section>
  );
};

export default CollaborateSection;
