'use client';

import { useState } from 'react';

const steps = [
  { 
    id: 1, 
    title: "Let’s start a new project", 
    subtitle: "We are honoured you are interested in working with us. Please fill out the project planner and we’ll get back to you in a jiffy.",
    content: (
      <div>
        <label className="block text-left text-gray-700">Name or company name</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter name or company name" />
        
        <label className="block text-left text-gray-700">Email</label>
        <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" />
      </div>
    )
  },
  { 
    id: 2, 
    title: "What can we help you with?",
    subtitle: "Please select all that apply.",
    content: (
      <div>
        <fieldset>
          <legend className="block text-left text-gray-700 mb-2">Select options</legend>
          {[
            "Labels and Packaging", "Posters and Flyers", "Billboards & Roll Ups", 
            "Vehicle Branding", "Promo Booths", "Shelves", "Logo", 
            "T-shirts", "Video Animations"
          ].map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <input type="radio" name="service" value={item} className="mr-2" />
              <label className="text-gray-700">{item}</label>
            </div>
          ))}
        </fieldset>
      </div>
    )
  },
  { 
    id: 3, 
    title: "Describe your project", 
    subtitle: "Design? Awesome!",
    content: (
      <div>
        <label className="block text-left text-gray-700">Message</label>
        <textarea className="w-full p-2 border rounded" placeholder="Enter your message"></textarea>
      </div>
    )
  },
  { 
    id: 4, 
    title: "What’s your budget?",
    subtitle: "An honest budget will allow us to ensure expectations are met. Don’t have an exact price? Guesstimate.",
    content: (
      <div>
        <label className="block text-left text-gray-700">From</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter from" />
        
        <label className="block text-left text-gray-700">To</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Enter to" />
        
        <label className="block text-left text-gray-700">Currency</label>
        <select className="w-full p-2 border rounded">
          <option value="usd">Dollar</option>
          <option value="eur">Euro</option>
          <option value="gbp">Pound</option>
        </select>
      </div>
    )
  }
];

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  return (
    <div className="relative flex items-center justify-center min-h-[500px]">
      {/* Previous Button - Placed outside on the left */}
      <button 
        onClick={prevStep} 
        disabled={currentStep === 0} 
        className="absolute left-0 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        ◀
      </button>

      {/* Main Wizard Container */}
      <div className="max-w-xl mx-auto text-center p-6">
        {/* Wizard Title */}
        <p className="text-2xl font-bold my-10">Project Planner</p>
        
        {/* Step Indicator */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute w-full h-0.5 bg-gray-300"></div>
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative w-12 h-12 flex items-center justify-center rounded-full border-2 ${
                index === currentStep ? 'bg-red-500 text-white border-red-500' : 'bg-white border-gray-300 text-gray-600'
              } z-10`}
            >
              {step.id}
            </div>
          ))}
        </div>

        {/* Wizard Content with Fixed Height */}
        <div className="relative bg-white p-6 rounded-lg shadow-lg min-h-[500px] flex items-center justify-center">
          <div className="w-full max-w-lg text-center">
            <h3 className="font-semibold text-3xl my-5">{steps[currentStep].title}</h3>
            <p className="text-gray-600 my-5">{steps[currentStep].subtitle}</p>
            <div className="text-gray-600">{steps[currentStep].content}</div>
          </div>
        </div>
      </div>

      {/* Next Button - Placed outside on the right */}
      <button 
        onClick={nextStep} 
        disabled={currentStep === steps.length - 1} 
        className="absolute right-0 px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
      >
        ▶
      </button>
    </div>
  );
};

export default Wizard;
