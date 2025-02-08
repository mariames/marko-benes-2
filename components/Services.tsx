import React from "react";
import { Button } from "./ui/MovingBorder";

const services = [
  "Labels and Packaging",
  "Posters and Flyers",
  "Billboards & Roll Ups",
  "Vehicle Branding",
  "Promo Booths",
  "Shelves",
  "Logo",
  "T-shirts",
  "Video Animations",
];

const Services: React.FC = () => {
  return (
    <>
      <p className="text-5xl text-center my-10">
        Services
      </p>
    <div className="grid grid-cols-3 gap-10 p-6">

      {services.map((service, index) => (
        <Button
              borderRadius="1.75rem"
              className="h-32 flex items-center justify-center bg-gray-100  rounded-lg"
              key={index}
            >
        <span
          key={index}
          className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600 font-semibold text-center p-6 cursor-pointer"
        >
          {service}
          </span>
        </Button>
      ))}
    </div>
    </>
  );
};

export default Services;
