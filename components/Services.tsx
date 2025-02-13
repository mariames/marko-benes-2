import React from "react";

const services = [
  "Labels and Packaging",
  "Posters and Flyers",
  "Billboards, Banners & Roll Ups",
  "Vehicle Branding",
  "Trade Promo Booths",
  "Promo Shelves",
  "Logo",
  "T-Shirt design",
  "Video Design",
];

const Services: React.FC = () => {
  return (
    <div className="bg-gray-950 py-10">
      <p className="text-5xl text-center my-10 pt-4 pb-10 text-gray-300 christmas-title">
        Services
      </p>
      <div className="grid grid-cols-3 gap-10 p-6">
        {services.map((service, index) => (
          <button
            className="h-32 flex items-center justify-center bg-gray-900 rounded-lg border border-slate-800 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_5px_10px_rgba(0,255,255,0.6),0_5px_15px_rgba(255,0,255,0.6)]"
            key={index}
          >
            <span
              className="bg-clip-text text-2xl text-transparent bg-gradient-to-r from-cyan-500 to-teal-500 font-semibold text-center p-6 cursor-pointer"
            >
              {service}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Services;
