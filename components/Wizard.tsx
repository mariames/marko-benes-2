'use client';
import { useState } from 'react';
import { FaRocket, FaTools, FaPen, FaDollarSign, FaClipboardList } from 'react-icons/fa'; // Import icons from React Icons

const steps = [
  { 
    id: 1, 
    title: "Let’s start a new project", 
    subtitle: "We are honoured you are interested in working with us. Please fill out the project planner and we’ll get back to you in a jiffy.",
    icon: <FaRocket />, // Icon for step 1
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
    icon: <FaTools />, // Icon for step 2
    content: (
      <div>
        <fieldset>
          <legend className="block text-left text-gray-700 mb-2">Select options</legend>
          {["Labels and Packaging", "Posters and Flyers", "Billboards & Roll Ups", 
            "Vehicle Branding", "Promo Booths", "Shelves", "Logo", 
            "T-shirts", "Video Animations"].map((item, index) => (
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
    icon: <FaPen />, // Icon for step 3
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
    icon: <FaDollarSign />, // Icon for step 4
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
  },
  { 
    id: 5, 
    title: "Review your details",
    subtitle: "Please review the information provided before submitting.",
    icon: <FaClipboardList />, // Icon for step 5
    content: (
      <div>
        <p>All the details you have entered will be shown here for your review.</p>
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
      <button onClick={prevStep} disabled={currentStep === 0} className="absolute left-10 px-4 py-2 bg-gray-300 rounded disabled:opacity-50">◀</button>
      <div className="w-[670px] mx-auto text-center p-6">
        
        <p className="font-semibold my-10 text-5xl">Project Planner</p>
        <div className="relative flex items-center justify-between my-6 w-full px-10">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center">
              {index > 0 && <div className="absolute -left-7 top-1/2 w-8 h-0.5 bg-gray-300"></div>}
              <div className={`relative flex items-center justify-center w-16 h-16 rounded-full border-2 ${index === currentStep ? 'bg-custom-blue text-white border-custom-blue' : 'bg-white border-gray-300 text-gray-600'}`}>
                <span className="text-xl">{step.icon}</span>
              </div>
              {index < steps.length - 1 && <div className="absolute -right-7 top-1/2 w-7 h-0.5 bg-gray-300"></div>}
            </div>
          ))}
        </div>
        <div className="relative p-6 rounded-lg shadow-lg min-h-[500px] bg-gray-50">
          <div className="w-full max-w-lg text-center">
            <p className="font-semibold text-3xl my-5">{steps[currentStep].title}</p>
            <p className="text-gray-600 mt-5 mb-16">{steps[currentStep].subtitle}</p>
            <div className="text-gray-600">{steps[currentStep].content}</div>
          </div>
        </div>
      </div>
      <button onClick={nextStep} disabled={currentStep === steps.length - 1} className="absolute right-0 px-4 py-2 bg-gray-300 rounded disabled:opacity-50">▶</button>
    </div>
  );
};

export default Wizard;
