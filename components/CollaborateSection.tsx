"use client";
import React from "react";
import { motion } from "framer-motion";

interface CollaborationStep {
  title: string;
  description: string;
}

const collaborationSteps: CollaborationStep[] = [
  {
    title: "Understanding the Client's Needs",
    description:
      "Before starting any work, it's crucial to fully understand the client's needs and expectations, including project goals, target audience, and key visual elements.",
  },
  {
    title: "Setting Clear Expectations",
    description:
      "To avoid misunderstandings, we define the project scope, deadlines, budget, number of revisions, communication methods, and ownership rights.",
  },
  {
    title: "Research and Conceptualization",
    description:
      "Before designing, I analyze the industry and competition to create a solution that is both creative and aligned with trends.",
  },
  {
    title: "Transparent Communication",
    description:
      "I maintain regular communication with clients, providing updates and seeking feedback throughout the project.",
  },
  {
    title: "Flexibility and Adaptation",
    description:
      "While having a clear vision is important, I welcome constructive feedback and necessary adjustments to ensure client satisfaction.",
  },
  {
    title: "Delivery of Final Materials",
    description:
      "Once the design is approved, I provide print-ready files and all required formats (PSD, AI, PDF, PNG, etc.).",
  },
];

const CollaborateCard: React.FC<CollaborationStep> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className="bg-black text-white border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <hr className="border-gray-600 my-2" />
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const CollaborateSection: React.FC = () => {
  return (
    <section className="bg-black px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-6">
        {collaborationSteps.map((step, index) => (
          <CollaborateCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default CollaborateSection;
