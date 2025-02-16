import React from "react";
import Link from "next/link";
import TitleOFPage from "@/components/TitleOFPage";

interface Service {
  name: string;
  link: string;
  src: string;
}

const services: Service[] = [
  { name: "Labels & Packaging", link: "/services/labels_and_packaging", src: "/service/labels-and-packaging.jpg" },
  { name: "Posters & Flyers", link: "/services/posters_and_flyers", src: "/service/posters-and-flyers.jpg" },
  { name: "Billboards, Banners & Roll Ups", link: "/services/billboards_banners_roll_ups", src: "/service/billboards-banners-roll-ups.jpg" },
  { name: "Vehicle Branding", link: "/services/vehicle_branding", src: "/service/vehicle-branding.jpg" },
  { name: "Trade Promo Booths", link: "/services/trade_promo_booths", src: "/service/trade-promo-booths.jpg" },
  { name: "Promo Shelves", link: "/services/promo_shelves", src: "/service/promo-shelves.jpg" },
  { name: "Logo", link: "/services/logo", src: "/service/logo.jpg" },
  { name: "T-Shirt Design", link: "/services/t-shirt_design", src: "/service/t-shirt-design.jpg" },
  { name: "Video Design", link: "/services/video_design", src: "/service/video-design.jpg" },
];

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-950 pb-10 px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64">
      <TitleOFPage title="Portfolio" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link href={service.link} key={index} className="relative group">
            <div
              className="w-full aspect-[4/3] flex items-center justify-center bg-gray-900 rounded-lg border border-slate-800 bg-cover bg-center transition-all duration-300 group-hover:brightness-100"
              style={{ backgroundImage: `url(${service.src})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-0 transition-all duration-300"></div>
              {/* Text (hidden on hover) */}
              <span className="relative z-10 text-2xl christmas-title text-neutral-50 text-center p-6 cursor-pointer transition-opacity duration-300 group-hover:opacity-0">
                {service.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
