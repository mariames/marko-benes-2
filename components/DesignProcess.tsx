import React from "react";

const DesignProcess: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white text-xl 2xl:text-3xl christmas-title tracking-wide">
          “Every project is unique, but the path to great design is built on a clear and thoughtful approach.”
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-[#262626] border border-gray-700 p-6 rounded-lg">
            <h3 className="text-base 2xl:text-3xl text-gray-300 font-semibold uppercase">{step.number} {step.title}</h3>
            <p className="text-gray-100 mt-2 2xl:text-2xl text-wrap">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const steps = [
  {
    number: "01.",
    title: "DISCOVER",
    description: "Understanding the problem and defining the goal."
  },
  {
    number: "02.",
    title: "IDEATE",
    description: "Brainstorm ideas and explore multiple design directions."
  },
  {
    number: "03.",
    title: "DESIGN",
    description: "Develop high-fidelity designs, focusing on usability and aesthetics."
  },
  {
    number: "04.",
    title: "REVIEW & REFINE",
    description: "Review user feedback and make improvements to the design."
  }
];
export default DesignProcess;
