import Image from "next/image";
import React from "react";

const DesignProcess: React.FC = () => {
  return (
    <section className="bg-[#101010] text-white pt-16">
      <div className="max-w-4xl bg-[#101010] mx-auto text-center">
        <p className="text-[#B2905E]  text-xl 2xl:text-3xl christmas-title tracking-wide">
          “Every project is unique, but the path to great design is built on a clear and thoughtful approach.”
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2  gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-[#262626] border border-gray-900 p-6 rounded-lg">
            <h3 className="text-base 2xl:text-3xl text-[#B2905E] font-semibold uppercase">{step.number} {step.title}</h3>
            <p className="text-gray-100 mt-2 2xl:text-2xl text-wrap">{step.description}</p>
          </div>
        ))}
      </div>
      {/*<Image src="/collaborate/6391_collaborate.jpg" width={3840} height={2363} alt="M" className="rounded-lg mt-20 object-cover" /> */}
      {/** <img src="/collaborate/6391_collaborate.jpg" alt="Marko" className="rounded-lg mt-20 object-cover"  /> */}
      <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden mt-20">
        <img
          src="/collaborate/6391_collaborate-large.jpg"
          srcSet="
            /collaborate/6391_collaborate-small.webp 960w,
            /collaborate/6391_collaborate-medium.webp 2048w,
            /collaborate/6391_collaborate-large.webp 3840w
          "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
          alt="Marko"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
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
