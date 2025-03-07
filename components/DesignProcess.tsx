import React from "react";

const DesignProcess: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-white text-xl 2xl:text-3xl christmas-title tracking-wide">
          “Every project is unique, but the path to great design is built on a clear and thoughtful approach.”
        </p>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="bg-black rounded-lg">
            <p className="text-base 2xl:text-3xl text-gray-100 font-semibold uppercase opacity-75">{step.number} {step.title}</p>
            <p className="text-gray-400 mt-2 2xl:text-2xl">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const steps = [
  {
    number: "01.",
    title: "CUSTOMIZATION",
    description: "I adapt each project to the specific needs of clients and the market."
  },
  {
    number: "02.",
    title: "EMPOWERMENT",
    description: "I passionately believe in the power of design to enhance brand recognition and contribute to its success."
  },
  {
    number: "03.",
    title: "PRECISION",
    description: "I am dedicated to details and creative solutions."
  },
  {
    number: "04.",
    title: "INNOVATION",
    description: "For each project, I research the latest industry trends, allowing me to deliver visually appealing and functional products."
  }
];

export default DesignProcess;
