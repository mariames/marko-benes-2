'use client';
import React, { useState } from 'react';
import {
  FaRocket,
  FaTools,
  FaPen,
  FaDollarSign,
  FaClipboardList,
} from 'react-icons/fa';
import Field from './Field';

const steps = [
  {
    id: 1,
    title: 'Let’s start a new project',
    subtitle: 'Please fill out the project planner.',
    icon: <FaRocket />,
    content: [
      {
        label: 'Name or company name',
        name: 'name',
        type: 'text',
        placeholder: 'Enter name or company name',
        required: true,
      },
      {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'Enter your email',
        required: true,
      },
    ],
  },
  {
    id: 2,
    title: 'What can I do for you?',
    subtitle: 'Please select all that apply.',
    icon: <FaTools />,
    content: [
      {
        label: '',
        name: 'service',
        type: 'radio',
        options: [
          'Labels & Packaging',
          'Posters & Flyers',
          'Billboards, Banners & Roll Ups',
          'Vehicle Branding',
          'Trade Promo Booths',
          'Promo Shelves',
          'Logo',
          'T-Shirt Design',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Describe your project',
    subtitle: 'Design? Awesome!',
    icon: <FaPen />,
    content: [
      {
        label: 'Message',
        name: 'message',
        type: 'textarea',
        placeholder: 'Enter your message',
        required: true,
      },
    ],
  },
  {
    id: 4,
    title: 'What’s your budget?',
    subtitle: 'A budget sets expectations. Guess if unsure.',
    icon: <FaDollarSign />,
    content: [
      {
        label: 'From',
        name: 'from',
        type: 'text',
        placeholder: 'Enter from',
        required: true,
      },
      {
        label: 'To',
        name: 'to',
        type: 'text',
        placeholder: 'Enter to',
        required: true,
      },
      {
        label: 'Currency',
        name: 'currency',
        type: 'select',
        options: ['USD', 'EUR', 'GBP'],
      },
    ],
  },
  {
    id: 5,
    title: 'Review your details',
    subtitle: 'Please review the information before submitting.',
    icon: <FaClipboardList />,
    content: [
      {
        label: 'When will it be completed?',
        name: 'completionDate',
        type: 'text',
        placeholder: 'Enter a date',
        required: true,
      },
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
  name: '',
  email: '',
  service: '',
  message: '',
  from: '',
  to: '',
  currency: 'USD',
  completionDate: '',
};

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  };

  const validateStep = () => {
    const step = steps[currentStep];
    const stepErrors: { [key: string]: string } = {};
    step.content.forEach((field) => {
      const value = formData[field.name as keyof FormData];
      if (field.required && (!value || value.trim() === '')) {
        stepErrors[field.name] = `${field.label || 'This field'} is required`;
      }
    });
    return stepErrors;
  };

  const nextStep = () => {
    const stepErrors = validateStep();
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const stepErrors = validateStep();
    setErrors(stepErrors);

    if (Object.keys(stepErrors).length === 0) {
      try {
        const res = await fetch('https://benis.studio/sendEmail.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error(await res.text());

        const text = await res.text();
        alert('Form submitted successfully!');
        console.log('Server response:', text);
        setFormData(initialFormData);
        setCurrentStep(0);
      } catch (err) {
        console.error('Submit error:', err);
        alert('There was a problem submitting the form.');
      }
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-[500px] border border-gray-700 rounded-lg mt-16 bg-[#101010]">
      <form onSubmit={handleSubmit} className="w-[670px] mx-auto text-center p-6">
        {/* Step icons */}
        <div className="relative flex items-center justify-between my-6 w-full px-10">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center">
              {index > 0 && (
                <div className="absolute -left-7 top-1/2 w-8 h-0.5 bg-gray-700 max-sm:hidden"></div>
              )}
              <div
                className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-2 ${
                  index === currentStep
                    ? 'bg-custom-blue text-white border-custom-blue'
                    : 'bg-black border-gray-500 text-gray-50'
                }`}
              >
                <span className="text-lg md:text-xl">{step.icon}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute -right-7 top-1/2 w-7 h-0.5 bg-gray-700 max-sm:hidden"></div>
              )}
            </div>
          ))}
        </div>

        {/* Step content */}
        <div className="relative p-6 rounded-lg shadow-lg min-h-[500px] bg-transparent">
          <div className="text-center">
            <p className="font-normal text-3xl my-5">{steps[currentStep].title}</p>
            <p className="text-white mt-5 mb-12">{steps[currentStep].subtitle}</p>
          </div>

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

        {/* Navigation buttons */}
        <div className="flex justify-between mt-7 max-sm:px-7">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="px-4 font-semibold py-2 rounded-lg w-24 h-16 bg-custom-blue border border-gray-700 disabled:opacity-50"
          >
            Back
          </button>

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 font-semibold py-2 rounded-lg w-24 h-16 bg-custom-blue border border-gray-700"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-4 font-semibold py-2 rounded-lg w-24 h-16 bg-custom-blue border border-gray-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Wizard;
