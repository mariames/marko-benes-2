"use client";
import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What do I need to provide for the design?",
      answer: "Dimensions (height x width) or dieline in vector format (ai, eps, pdf)",
    },
    {
      question: "Do I need to provide my logo?",
      answer: "The logo of your brand or company (ai, eps, pdf) / vector file",
    },
    {
      question: "Do you need text content?",
      answer:
        "Text which is necessary to put on the design and text of the declaration with pictograms, barcode, etc.",
    },
    {
      question: "Can I share design examples?",
      answer:
        "Examples of designs you like so I know what type of style you prefer, brand guideline.",
    },
    {
      question: "What type of packaging material do you support?",
      answer: "Packaging material (cardboard, plastic, glass, bag, can, etc.)",
    },
    {
      question: "What is the printing method?",
      answer:
        "Printing method (offset, flexography, digital printing), let us know which one you're interested in.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-md">
            <div
              className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
              onClick={() => handleToggle(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-white border-t border-gray-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
