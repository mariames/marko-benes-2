import React from "react";

const DesignProcess: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl text-gray-100 font-bold mb-4 christmas-title">From Concept to Completion</h2>
        <p className="text-gray-300 text-lg christmas-title">
          Every project is unique, but the path to great design is built on a clear and
          thoughtful approach.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-sm text-gray-400 font-semibold uppercase">{step.number} {step.title}</h3>
            <p className="text-gray-400 mt-2">{step.description}</p>
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
    title: "TEST & REFINE",
    description: "Conduct usability testing to identify potential pain points."
  }
];

export default DesignProcess;
