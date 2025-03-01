"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/Kosili.svg", alt: "Kosili", link: "https://www.kosili.rs/", size: 100, padding: 6 },
  { src: "/logos/Dobra-ovsena-kasa.svg", alt: "Dobra Ovsena Kasa", link: "https://www.instagram.com/dobra_ovsena_kasa/", size: 80, padding: 5 },
  { src: "/logos/LMX-TOX.svg", alt: "LMX TOX", link: "https://www.instagram.com/ima_da_ih_nema/", size: 90, padding: 2 },
  { src: "/logos/Holly.svg", alt: "Holly", link: "https://holly.rs/", size: 90, padding: 6 },
  { src: "/logos/Deft.svg", alt: "Deft", link: "https://www.lomax-company.com/proizvodi/deft-4", size: 70, padding: 5 },
  { src: "/logos/Unit.svg", alt: "Unit", link: "https://www.unit-sport.net/", size: 100, padding: 8 },
  { src: "/logos/Posh-33.svg", alt: "Posh 33", link: "https://posh-33.com/en", size: 85, padding: 6 },
  { src: "/logos/Maximalium.svg", alt: "Maximalium", link: "https://www.maximalium.rs/", size: 120, padding: 1 },
  { src: "/logos/Petroland.svg", alt: "Petroland", link: "https://www.petroland.rs/", size: 88, padding: 5 },
  { src: "/logos/Petster.svg", alt: "Petster", link: "https://www.instagram.com/petster.rs/", size: 80, padding: 4 },
  { src: "/logos/Gentlemens-club.svg", alt: "Gentlemen's Club", link: "https://www.facebook.com/gentlemens.club.33", size: 75, padding: 5 },
  { src: "/logos/Terminal-festival.svg", alt: "Terminal Festival", link: "https://www.facebook.com/gentlemens.club.33", size: 120, padding: 1 },
];

const Logos = () => {
  return (
    <div className="bg-black">
      <p className="text-3xl text-white text-center pt-10 pb-5">
        I work with brands I
        <span className="font-semibold">&nbsp;believe&nbsp;</span>
        in
      </p>
      <div className="bg-black flex justify-center items-center min-h-screen relative">
        {/* Grid Container */}
        <div className="relative grid grid-cols-4 max-sm:grid-cols-3 gap-4 max-w-5xl xl:h-[64vh] lg:h-[74vh] md:h-[70vh]">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center h-[80px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.5, // Longer duration for smoother transition
                ease: [0.42, 0, 0.58, 1], // "ease-in-out" cubic bezier for smoother effect
                delay: index * 0.1, // Delay for staggered effect
              }}
              viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of the element is visible
            >
              {/* Adding Link Around the Logo */}
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.size} // Dynamic size
                  height={logo.size} // Dynamic size
                  className={`w-[${logo.size}px] h-[70px] p-[${logo.padding}px] transition-transform duration-300 ease-in-out transform hover:scale-110`}
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Logos;
