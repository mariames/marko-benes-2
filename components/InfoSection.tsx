"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface InfoSectionProps {
  title: string;
  items: string[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="border border-gray-700 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <p className="text-3xl font-normal">{title}</p>
              <button
                onClick={handleToggle}
                className="text-gray-400 hover:text-white transition"
              >
                {isOpen ? <Minus size={24} /> : <Plus size={24} />}
              </button>
            </div>
            {isOpen && (
              <div className="mt-4 text-lg">
                <ul className="list-disc pl-6 space-y-2">
                  {items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
