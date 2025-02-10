import React from "react";
import { Button } from "./ui/MovingBorder";

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
      <p className="text-5xl text-center my-10 pt-4 pb-10 text-gray-300">
        Services
      </p>
    <div className="grid grid-cols-3 gap-10 p-6">

      {services.map((service, index) => (
        <Button
              borderRadius="1.75rem"
              duration={5000}
              className="h-32 flex items-center justify-center bg-gray-900  rounded-lg border border-slate-800"
              key={index}
            >
        <span
          key={index}
          className=" bg-clip-text text-2xl text-transparent bg-gradient-to-r from-cyan-500 to-teal-500 font-semibold text-center p-6 cursor-pointer"
        >
          {service}
          </span>
        </Button>
      ))}
    </div>
  </div>
  );
};

export default Services;
