"use client";
import React from "react";
import { motion } from "framer-motion";
import TargetAudienceCard from "./TargetAudienceCard";
import DesignProcess from "./DesignProcess";
import LiItem from "./LiItem";

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
        <p className="2xl:text-2xl mb-2">Before starting any work, it is important to understand the client&#39;s needs and expectations fully.</p>
          <LiItem>What is the purpose of the project?</LiItem>
          <LiItem>Who is the target audience and preferred style?</LiItem>
          <LiItem>What are the key visual elements that need to be highlighted?</LiItem>
          <LiItem>Are there any reference materials or brand guidelines?</LiItem>
          <LiItem>In the Services section, you can view all the necessary information that I need for each type of service.</LiItem>
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
          <LiItem>Number of revisions</LiItem>
          <LiItem>Time frame for each phase of the project</LiItem>
          <LiItem>Method of communication and delivery of materials in specific formats</LiItem>
          <LiItem>Rights to use the final design solutions so that both parties are protected</LiItem>
          <LiItem>We conclude a contract/agreement with all clearly defined conditions</LiItem>
          <LiItem>After the invoice is issued and the client makes full payment or a certain agreed percentage, I start work</LiItem>

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
