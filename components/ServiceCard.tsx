import React from "react";

const ServiceCard = ({ title, description, image, accentColor }: {
  title: string;
  description: string;
  image: string;
  accentColor: string;
}) => {
  return (
    <div className="bg-[#0F0F11] p-6 rounded-2xl shadow-lg border border-[#1A1A1D] max-w-lg">
      <div className="flex items-center mb-4">
        <div
          className="p-2 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: accentColor }}
        >
          <img src={image} alt={title} className="w-6 h-6" />
        </div>
        <h2 className="text-white text-lg font-semibold ml-3">{title}</h2>
      </div>
      <p className="text-[#A1A1A8] mb-4">{description}</p>
      <div className="bg-[#1A1A1D] p-4 rounded-xl flex justify-center items-center">
        <img src={image} alt="Graphic" className="w-full h-auto" />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="flex gap-6 bg-[#0D0D0F] p-10 rounded-xl">
      <ServiceCard
        title="Product Design"
        description="Designing user-centered digital experiences."
        image="/product-design.png"
        accentColor="#0057FF"
      />
      <ServiceCard
        title="Graphic Design"
        description="Transforming ideas into visually striking designs."
        image="/graphic-design.png"
        accentColor="#7B3FF6"
      />
    </div>
  );
};

export default ServicesSection;
