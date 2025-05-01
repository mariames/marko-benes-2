import React from 'react';

interface FieldProps {
  field: { label: string; name: string; type: string; placeholder?: string; options?: string[] };
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
}

const Field: React.FC<FieldProps> = ({ field, value, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    onChange(field.name, e.target.value);
  };

  return (
    <div className="mb-4">
      <label className="block text-left text-white 2xl:text-2xl">{field.label}</label>
      {field.type === 'text' || field.type === 'email' ? (
        <input
          type={field.type}
          name={field.name}
          value={value}
          onChange={handleChange}
          placeholder={field.placeholder}
          className="w-full p-2 rounded bg-transparent border border-gray-700"
        />
      ) : field.type === 'textarea' ? (
        <textarea
          name={field.name}
          value={value}
          onChange={handleChange}
          placeholder={field.placeholder}
          rows={10}
          className="w-full p-2 rounded bg-transparent border border-gray-700 resize-none"
        />
      ) : field.type === 'select' ? (
        <select name={field.name} value={value} onChange={handleChange} className="w-full p-2 rounded bg-transparent border border-gray-700 2xl:text-2xl">
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === 'radio' ? (
        field.options?.map((option) => (
          <div key={option} className="flex items-center">
            <input type="radio" name={field.name} value={option} checked={value === option} onChange={handleChange} className="mr-2 2xl:text-2xl" />
            <label className="text-white">{option}</label>
          </div>
        ))
      ) : null}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Field;
