import React from "react";
import Link from "next/link";

interface Service {
  name: string;
  link: string;
  src: string;
}

const services: Service[] = [
  { name: "Labels and Packaging", link: "#", src: "/service/labels-and-packaging.jpg" },
  { name: "Posters and Flyers", link: "#", src: "/service/posters-and-flyers.jpg" },
  { name: "Billboards, Banners & Roll Ups", link: "#", src: "/service/billboards-banners-roll-ups.jpg" },
  { name: "Vehicle Branding", link: "#", src: "/service/vehicle-branding.jpg" },
  { name: "Trade Promo Booths", link: "#", src: "/service/trade-promo-booths.jpg" },
  { name: "Promo Shelves", link: "#", src: "/service/promo-shelves.jpg" },
  { name: "Logo", link: "#", src: "/service/logo.jpg" },
  { name: "T-Shirt design", link: "#", src: "/service/t-shirt-design.jpg" },
  { name: "Video Design", link: "#", src: "/service/video-design.jpg" },
];

const Services: React.FC = () => {
  return (
    <div className="bg-gray-950 py-10">
      <p className="text-5xl text-center my-10 pt-4 pb-10 text-gray-300 christmas-title">
        Services
      </p>
      <div className="grid grid-cols-3 gap-10 p-6">
        {services.map((service, index) => (
          <Link href={service.link} key={index} className="h-56 flex items-center justify-center bg-gray-900 rounded-lg border border-slate-800 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.src})` }}
        >
             
              
              <span className="text-2xl christmas-title text-neutral-50 text-center p-6 cursor-pointer bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                {service.name}
              </span>
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
