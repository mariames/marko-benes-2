"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Service {
  name: string;
  link: string;
  src: string;
  previewSrc1: string;
  previewSrc2: string;
  types: string[];
}

const services: Service[] = [
  {
    name: "Labels & Packaging",
    link: "/services/labels_and_packaging",
    src: "/service/labels-and-packaging.jpg",
    previewSrc1: "/service/labels-and-packaging-preview1.jpg",
    previewSrc2: "/service/labels-and-packaging-preview2.jpg",
    types: ["product label","box design", "shelf ready packaging"],
  },
  {
    name: "Posters & Flyers",
    link: "/services/posters_and_flyers",
    src: "/service/posters-and-flyers.jpg",
    previewSrc1: "/service/posters-and-flyers-preview1.jpg",
    previewSrc2: "/service/posters-and-flyers-preview2.jpg",
    types: ["book covers", "magazine covers", "letterheads"],
  },
  {
    name: "Billboards, Banners & Roll Ups",
    link: "/services/billboards_banners_roll_ups",
    src: "/service/billboards-banners-roll-ups.jpg",
    previewSrc1: "/service/billboards-banners-roll-ups-preview1.jpg",
    previewSrc2: "/service/billboards-banners-roll-ups-preview2.jpg",
    types: ["city light advertising", "shop window branding"],
  },
  {
    name: "Vehicle Branding",
    link: "/services/vehicle_branding",
    src: "/service/vehicle-branding.jpg",
    previewSrc1: "/service/vehicle-branding-preview1.jpg",
    previewSrc2: "/service/vehicle-branding-preview2.jpg",
    types: ["car", "van", "truck/lorry", "bus"],
  },
  {
    name: "Trade Promo Booths",
    link: "/services/trade_promo_booths",
    src: "/service/trade-promo-booths.jpg",
    previewSrc1: "/service/trade-promo-booths-preview1.jpg",
    previewSrc2: "/service/trade-promo-booths-preview2.jpg",
    types: ["kiosk", "fair stand", "promo table"],
  },
  {
    name: "Promo Shelves",
    link: "/services/promo_shelves",
    src: "/service/promo-shelves.jpg",
    previewSrc1: "/service/promo-shelves-preview1.jpg",
    previewSrc2: "/service/promo-shelves-preview2.jpg",
    types: ["standing retail display", "product display"],
  },
  {
    name: "Logo",
    link: "/services/logo",
    src: "/service/logo.jpg",
    previewSrc1: "/service/logo-preview1.jpg",
    previewSrc2: "/service/logo-preview2.jpg",
    types: ["Branding", "Wordmark"],
  },
  {
    name: "T-Shirt Design",
    link: "/services/t-shirt_design",
    src: "/service/t-shirt-design.jpg",
    previewSrc1: "/service/t-shirt-design-preview1.jpg",
    previewSrc2: "/service/t-shirt-design-preview2.jpg",
    types: ["Merchandise", "Fashion"],
  },
];

const Services: React.FC = () => {
  return (
    <div className="bg-black pb-10 px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-11 xl:gap-11">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link href={service.link} className="relative group block">
              <div className="w-full aspect-[4/3] flex items-center justify-center bg-gray-900 rounded-lg border border-slate-800 bg-cover bg-center transition-all duration-300 group-hover:brightness-100 overflow-hidden">
                <div className="relative w-full h-full">
                  <img
                    src={service.src}
                    alt={service.name}
                    className="absolute w-full h-full object-cover rounded-lg transition-opacity duration-500"
                  />
                  <img
                    src={service.previewSrc1}
                    alt={`${service.name} preview 1`}
                    className="absolute w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                  />
                  <img
                    src={service.previewSrc2}
                    alt={`${service.name} preview 2`}
                    className="absolute w-full h-full object-cover rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500"
                  />
                </div>
              </div>
              <div className="mt-3 text-white text-xl md:text-2xl 4xl:text-3xl 5xl:text-4xl font-bold ml-1 uppercase">{service.name}</div>
              <div className="mt-1 flex gap-2 flex-wrap 5xl:hidden">
                {service.types.map((type, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
