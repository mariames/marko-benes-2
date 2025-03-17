"use client";
import React, { useState, useEffect } from 'react';
import { FaRocket, FaTools, FaPen, FaDollarSign, FaClipboardList } from 'react-icons/fa'; // Import icons from React Icons
import Field from './Field'; 

const steps = [
  {
    id: 1,
    title: "Lets start a new project",
    subtitle: "Please fill out the project planner.",
    icon: <FaRocket />,
    content: [
      { label: "Name or company name", name: "name", type: "text", placeholder: "Enter name or company name", required: true },
      { label: "Email", name: "email", type: "email", placeholder: "Enter your email", required: true },
    ],
  },
  {
    id: 2,
    title: "What can I do for you?",
    subtitle: "Please select all that apply.",
    icon: <FaTools />,
    content: [
      { label: "Service", name: "service", type: "radio", options: ["Labels & Packaging", "Posters & Flyers", "Billboards, Banners & Roll Ups"] },
    ],
  },
  {
    id: 3,
    title: "Describe your project",
    subtitle: "Design? Awesome!",
    icon: <FaPen />,
    content: [
      { label: "Message", name: "message", type: "textarea", placeholder: "Enter your message", required: true },
    ],
  },
  {
    id: 4,
    title: "Whats your budget?",
    subtitle: "A budget sets expectations. Guess if unsure",
    icon: <FaDollarSign />,
    content: [
      { label: "From", name: "from", type: "text", placeholder: "Enter from", required: true },
      { label: "To", name: "to", type: "text", placeholder: "Enter to", required: true },
      { label: "Currency", name: "currency", type: "select", options: ["USD", "EUR", "GBP"] },
    ],
  },
  {
    id: 5,
    title: "Review your details",
    subtitle: "Please review the information provided before submitting.",
    icon: <FaClipboardList />,
    content: [
      { label: "When will it be completed?", name: "completionDate", type: "text", placeholder: "Enter a date", required: true },
    ],
  },
];

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
  from: string;
  to: string;
  currency: string;
  completionDate: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  service: "",
  message: "",
  from: "",
  to: "",
  currency: "usd", // default value for currency
  completionDate: "",
};




const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    // Clear error for the current field
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      delete newErrors[name];
      return newErrors;
    });
  };
  

  const validateStep = () => {
    const step = steps[currentStep];
    let stepErrors: { [key: string]: string } = {};
  
    // Iterate over each field in the current step
    step.content.forEach((field) => {
      // Assert that field.name is a valid key of formData
      const fieldValue = formData[field.name as keyof FormData]; // Type assertion
  
      // Check if the field is required and if the value is an empty string or just spaces
      if (field.required && (!fieldValue || fieldValue.trim() === "")) {
        stepErrors[field.name] = `${field.label} is required`;
      }
    });
  
    return stepErrors;
  };
  
  

  const nextStep = () => {
    const stepErrors = validateStep();
    setErrors(stepErrors);
  
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep();
    setErrors(stepErrors);
  
    if (Object.keys(stepErrors).length === 0) {
      console.log("Form data submitted:", formData);
      alert(JSON.stringify(formData));
    }
  };
  

  return (
    <div className="relative flex items-center justify-center min-h-[500px] border border-gray-700 rounded-lg mt-16 bg-[#101010]">
      <form onSubmit={handleSubmit} className="w-[670px] mx-auto text-center p-6">
        <div className="relative flex items-center justify-between my-6 w-full px-10">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center">
              {index > 0 && <div className="absolute -left-7 top-1/2 w-8 h-0.5 bg-gray-700 sm:hidden"></div>}
              <div
                className={`relative flex items-center justify-center w-16 h-16 rounded-full border-2 ${
                  index === currentStep
                    ? 'bg-custom-blue text-white border-custom-blue'
                    : 'bg-black border-gray-500 text-gray-50'
                }`}
              >
                <span className="text-xl">{step.icon}</span>
              </div>
              {index < steps.length - 1 && <div className="absolute -right-7 top-1/2 w-7 h-0.5 bg-gray-700 sm:hidden "></div>}
            </div>
          ))}
        </div>

        <div className="relative p-6 rounded-lg shadow-lg min-h-[500px] bg-transparent">
          <div className="text-center">
            <p className="font-normal text-3xl my-5">{steps[currentStep].title}</p>
          </div>

          <div className="text-gray-600">
            <p className="text-white mt-5 mb-12">{steps[currentStep].subtitle}</p>
            <div className="text-white">
              {steps[currentStep].content.map((field) => (
                <Field
                  key={field.name}
                  field={field}
                  value={formData[field.name as keyof FormData] || ''}
                  onChange={handleInputChange}
                  error={errors[field.name]}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-7">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-4 font-semibold py-2 rounded-lg w-24 h-16 bg-transparent border border-gray-700 disabled:opacity-50"
          >
            Previous
          </button>

          <button
            type="button"
            onClick={nextStep}
            disabled={currentStep === steps.length - 1 || Object.keys(errors).length > 0}
            className="px-4 py-2 font-semibold border border-gray-700 rounded-lg w-24 h-16 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="px-4 py-2 font-semibold border border-gray-700 rounded-lg w-full h-16 mt-4"
          disabled={currentStep !== steps.length - 1 || Object.keys(errors).length > 0}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Wizard;
