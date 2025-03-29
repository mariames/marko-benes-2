"use client";
import React, { useState } from 'react';



const FaqToggle = () => {

  const faqs = [
    {
      question:  "Are you available to hire full time/part time?",
      answer: "I am always open to discussing interesting opportunities, collaborations, and other fun stuff. If you’re interested in discussing a project, to make something great together, please fill out the contact form or send an e-mail. Simply want to get in touch? Let's connect on my business social networks."
    },
    {
      question: "Can you facelift or redesign my design?",
      answer: "Would love to! If you want to improve your existing design I will be happy to help you. I would like to take a look at your existing projects, materials, source files and we can discuss If I can add value and help you with the same."
    },
    {
      question: "Can we get on a call?",
      answer: "For sure. But first let's talk via email/socials to discuss your problems, goals, requirements, timelines, budget and exchange materials & info. This way, we can save each other's time on calls, and still can get an understanding if we're a good fit."
    },
    {
      question: "What are the payment methods?",
      answer: "Payments can be made in two ways. Via official company invoice/account or Payooner account. If you prefer Paypal, no problem! Depending on the type and scope of work, it is necessary to pay the entire amount of money or a certain agreed percentage. After that I start working."
    },
    {
      question: "Do you work on other types of designs that are not listed in the Services section?",
      answer: "Certainly. Any type of design similar to those listed in the &quot;Services&quot; section, created using the same software, can also be offered as part of my services."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);  // Open index starts as null (no FAQ open).

  const toggleFAQ = (index: any) => {
    // Toggle FAQ visibility: if the same index is clicked again, close it, else open the clicked one.
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="relative bg-black  h-screen lg:h-[80vw] xl:h-[80vw] 2xl:h-[50vw] py-16 px-6">
      {/* Background Image */}
      {/** 
      <div
        className="absolute bg-custom-dark-blue inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url('/man2.jpg')` }}
      ></div>
      */}
      {/* Header Section */}
      <div className="relative w-full mx-auto text-center ">
        <p className="text-lg font-semibold text-[#B2905E] flex items-center justify-center space-x-2">
          <span className='text-[#B2905E]'>◆</span>
          <span className='text-[#B2905E] uppercase text-sm tracking-wider'>Help and Support</span>
          <span className='text-[#B2905E]'>◆</span>
        </p>
        <h2 className="xl:text-5xl lg:text-5xl max-md:text-4xl font-bold text-white">FAQ</h2>
      </div>

      {/* Accordion */}
      <div className="relative max-w-3xl mx-auto mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left flex justify-between items-center py-3 text-lg font-medium text-white hover:text-[#B2905E] focus:outline-none"
              onClick={() => toggleFAQ(index)}  // Toggle FAQ on button click
            >
              {faq.question}
              <span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 py-2 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="text-white text-md py-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqToggle;
