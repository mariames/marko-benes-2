"use client";
import React, { useState } from 'react';



const FaqToggle = () => {

  const faqs = [
  {
    question: "Are you open to new collaborations and projects?",
    answer: "Absolutely. I’m always excited to team up with forward-thinking companies, especially those working at the intersection of technology and creativity. If you're building innovative web or video experiences and need someone who cares deeply about performance and user experience—I’d love to connect."
  },
  {
    question: "What value can you bring to our video production pipeline?",
    answer: "I specialize in front-end performance and building web interfaces that handle media content gracefully. From optimizing video-heavy pages to ensuring cross-device consistency and lightning-fast load times, I make sure your cutting-edge content looks and feels premium—no matter the platform."
  },
  {
    question: "Can you collaborate with our in-house design and dev teams?",
    answer: "Of course. I’ve spent years integrating seamlessly into remote and hybrid teams. Whether it's brainstorming early concepts with designers or refining implementation with devs, I bring strong communication skills and a high-performance mindset to every collaboration."
  },
  {
    question: "Do you only build from scratch or also optimize existing platforms?",
    answer: "Both. I can dive into existing codebases, identify bottlenecks, and uplift performance. I also enjoy building new platforms from the ground up—especially when performance, responsiveness, and user engagement are key goals."
  },
  {
    question: "Why should we pick you over other developers?",
    answer: "I bring more than clean code—I bring speed, stability, and a deep understanding of how users experience content online. While many developers can build, I ensure your content is delivered in a way that enhances your brand, engages your audience, and performs flawlessly."
  },
  {
    question: "Do you offer mentoring or guidance for junior developers?",
    answer: "Yes, mentoring is something I truly enjoy. Whether it’s helping junior developers grow their performance mindset or guiding them through real-world projects, I’m always happy to share knowledge and support the next generation of developers."
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
        <p className="text-lg font-semibold text-[#B2905E] flex items-center justify-center space-x-2 mb-2">
          <span className='text-[#B2905E]'>◆</span>
          <span className='text-[#B2905E] uppercase text-sm tracking-wider'>Help and Support</span>
          <span className='text-[#B2905E]'>◆</span>
        </p>
        <p className="xl:text-5xl lg:text-5xl max-md:text-4xl font-bold text-white">FAQ</p>
      </div>

      {/* Accordion */}
      <div className="relative max-w-5xl mx-auto mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left flex justify-between items-center py-3 text-lg 2xl:text-3xl 3xl:text-4xl font-medium text-white hover:text-[#B2905E] focus:outline-none"
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
              <p className="text-white text-md py-2 text-base md:text-xl 2xl:text-2xl">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqToggle;
