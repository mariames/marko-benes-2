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
      <p className="text-3xl 3xl:text-3xl 4xl:text-5xl 5xl:text-[11rem] text-white text-center pt-40 5xl:pt-[28rem] pb-5 5xl:pb-20 max-sm:pt-32 max-sm:pb-2 uppercase 4xl:font-bold 4xl:mb-20">
        Honored to be part of their story
      </p>

      <div className="flex justify-center items-center max-2xl:min-h-screen relative max-sm:px-3">
      <div className="relative grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-x-4 gap-y-2 max-w-5xl 5xl:grid-cols-6 5xl:gap-x-5 5xl:gap-y-3 5xl:max-w-[90rem]">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              className="flex justify-center items-center h-[80px] 4xl:h-[90px] 5xl:h-[100px]"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 1.5,
                ease: [0.42, 0, 0.58, 1],
                delay: index * 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.size}
                  height={logo.size}
                  className={`w-[${logo.size}px] h-[70px] p-[${logo.padding}px] transition-transform duration-300 ease-in-out transform hover:scale-110 4xl:w-[${logo.size * 3}px] 4xl:h-[100px] 5xl:p-[${logo.padding * 1.5}px]`}
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
