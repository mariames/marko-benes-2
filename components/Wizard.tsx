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
      <div className='px-10'>
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
      <div className='pl-10'>
        <fieldset>
          {["Labels & Packaging", "Posters & Flyers", "Billboards, Banners & Roll Ups", 
            "Vehicle Branding", "Trade Promo Booths", "Promo Shelves", "Logo", 
            "T-Shirt Design", "Video Design"].map((item, index) => (
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
        <textarea className="w-full p-2 border rounded min-h-36" placeholder="Enter your message"></textarea>
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
        <label className="block text-left text-gray-700">In an ideal world when will it be completed?</label>
        <input type="text" className="w-full p-2 border rounded mb-4" placeholder="Have a date in mind?" />
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
      
      <div className="w-[670px] mx-auto text-center p-6">
        
        <p className="font-semibold my-10 text-5xl">Project Planner</p>
        <div className="relative flex items-center justify-between my-6 w-full px-10">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center">
              {index > 0 && <div className="absolute -left-7 top-1/2 w-8 h-0.5 bg-gray-300 xs:hidden"></div>}
              <div className={`relative flex items-center justify-center w-16 h-16 rounded-full border-2 ${index === currentStep ? 'bg-custom-blue text-white border-custom-blue' : 'bg-white border-gray-300 text-gray-600'}`}>
                <span className="text-xl">{step.icon}</span>
              </div>
              {index < steps.length - 1 && <div className="absolute -right-7 top-1/2 w-7 h-0.5 bg-gray-300 xs:hidden"></div>}
            </div>
          ))}
        </div>
        <div className="relative p-6 rounded-lg shadow-lg min-h-[500px] bg-gray-50">
          {/* Title - Horizontally centered at the top */}
          <div className="text-center">
            <p className="font-semibold text-3xl my-5">{steps[currentStep].title}</p>
          </div>

          {/* Content */}
          <div className="text-gray-600">
            <p className="text-gray-600 mt-5 mb-16">{steps[currentStep].subtitle}</p>
            <div className="text-gray-600">{steps[currentStep].content}</div>
          </div>
        </div>

      <div className='flex justify-between mt-7'>
        <button onClick={prevStep} disabled={currentStep === 0} className="px-4 font-semibold py-2 border-2 border-gray-300 rounded-lg w-24 h-16 bg-gray-50 disabled:opacity-50">previous</button>
        <button onClick={nextStep} disabled={currentStep === steps.length - 1} className="px-4 py-2 font-semibold border-2 border-gray-300 bg-gray-50 rounded-lg w-24 h-16 disabled:opacity-50">next</button>
      </div>

      </div>


    </div>
  );
};

export default Wizard;
