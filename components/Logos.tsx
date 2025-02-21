"use client";

import Image from "next/image";
import React from "react";

const logos = [
  { src: "/logos/Kosili.svg", alt: "Kosili" },
  { src: "/logos/Dobra-ovsena-kasa.svg", alt: "Dobra Ovsena Kasa" },
  { src: "/logos/Holly.svg", alt: "Holly" },
  { src: "/logos/LMX-TOX.svg", alt: "LMX TOX" },
  { src: "/logos/Deft.svg", alt: "Deft" },
  { src: "/logos/Unit.svg", alt: "Unit" },
  { src: "/logos/Posh-33.svg", alt: "Posh 33" },
  { src: "/logos/Maximalium.svg", alt: "Maximalium" },
  { src: "/logos/Petroland.svg", alt: "Petroland" },
  { src: "/logos/Petster.svg", alt: "Petster" },
  { src: "/logos/Gentlemens-club.svg", alt: "Gentlemen's Club" },
  { src: "/logos/Terminal-festival.svg", alt: "Terminal Festival" },
];

const Logos = () => {
  return (
    <div className="bg-black">
      <p className="text-3xl text-white text-center py-10">
        I work with brands I
        <span className="font-semibold">&nbsp;believe&nbsp;</span>
        in
      </p>
      <div className="bg-black flex justify-center items-center min-h-screen relative">
        {/* Grid Container */}
        <div className="relative grid grid-cols-4 gap-4 max-w-5xl lg:h-[90vh] md:h-[80vh]">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-5 border-2 border-transparent transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={70}
                height={70}
                className="opacity-80 hover:opacity-100 w-[70px] h-[70px]"
              />
            </div>
          ))}
        </div>

        {/* Grid Lines with Fading Effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Vertical Lines */}
          <div className="absolute top-0 bottom-0 left-[40%] w-px bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>
          <div className="absolute top-0 bottom-0 left-[50%] w-px bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>
          <div className="absolute top-0 bottom-0 left-[60%] w-px bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>

          {/* Horizontal Lines */}
          <div className="absolute mx-28 left-0 right-0 top-[33.33%] h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>
          <div className="absolute mx-20 left-0 right-0 top-[66.66%] h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 animate-fadeIn"></div>
        </div>

        {/* Tailwind Custom Styles */}
        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 2s ease-in forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Logos;
