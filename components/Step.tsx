import React from 'react';
import  Field  from './Field';

interface StepProps {
  stepData: {
    id: number;
    title: string;
    subtitle: string;
    icon: JSX.Element;
    content: { label: string; name: string; type: string; placeholder?: string; options?: string[] }[];
  };
  formData: { [key: string]: any };
  handleInputChange: (field: string, value: string) => void;
  errors: { [key: string]: string };
}

export const Step = ({ stepData, formData, handleInputChange, errors }: StepProps) => {
  return (
    <div>
      <div className="text-center">
        <p className="font-normal text-3xl my-5">{stepData.title}</p>
        <p className="text-white mt-5 mb-12">{stepData.subtitle}</p>
      </div>

      {stepData.content.map((field) => (
        <Field
          key={field.name}
          field={field}
          formData={formData}
          handleInputChange={handleInputChange}
          error={errors[field.name]}
        />
      ))}
    </div>
  );
};
