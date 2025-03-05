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
      <>{/**
          <p>I adapt each project to the specific needs of clients and the market.</p>
          <p>I passionately believe in the power of design to enhance
            brand recognition and contribute to its success.</p>
          <p>I am dedicated to details and creative solutions.</p>
          <p>For each project, I research the latest
          industry trends, allowing me to deliver visually appealing and functional
          products.</p>        
        */}

        <DesignProcess />
      </>
    ),
  },
  {
    title: "Understanding the Client's Needs",
    description: (
      <div> 
        <p>Before starting any work, it is important to understand the client&#39;s needs and expectations fully.</p>
          <div className="flex items-center space-x-2 mt-3">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">What is the purpose of the project?</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">Who is the target audience and preferred style?</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">What are the key visual elements that need to be highlighted?</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">Are there any reference materials or brand guidelines?</p>
          </div>
        <p className="mt-5">In the Services section, you can view all the necessary information that I need for each type of service.</p>
      </div>
    ),
  },
  {
    title: "Setting Clear Expectations",
    description: (
      <>
        <p>The scope of work, deadlines, and budget are clearly defined to avoid disagreements at a later stage.</p>
        <p>Let&#39;s agree on
        the following:</p>
        <div className="flex items-center space-x-2 mt-3">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">Number of revisions</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">Time frame for each phase of the project</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">Method of communication and delivery of materials in specific formats</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">Rights to use the final design solutions so that both parties are protected</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaCheckCircle className="text-green-300" />
            <p className="text-gray-300">After the invoice is issued and the client makes full payment, I start work</p>
          </div>
      </>
    ),
  },
  {
    title: "Research and Conceptualization",
    description: (
      <>
        Before designing, I analyze the industry and competition to create a
        solution that is both creative and aligned with trends.
      </>
    ),
  },
  {
    title: "Transparent Communication",
    description: (
      <>
        I maintain regular communication with clients, providing updates and
        seeking feedback throughout the project.
      </>
    ),
  },
  {
    title: "Flexibility and Adaptation",
    description: (
      <>
        While having a clear vision is important, I welcome constructive
        feedback and necessary adjustments to ensure client satisfaction.
      </>
    ),
  },
  {
    title: "Delivery of Final Materials",
    description: (
      <>
        Once the design is approved, I provide print-ready files and all
        required formats (PSD, AI, PDF, PNG, etc.).
      </>
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
      className="bg-black text-white border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
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
