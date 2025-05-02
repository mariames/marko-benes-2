"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ModalImage from "react-modal-image";
import TitleAnimation from "@/components/TitleAnimation";

// ✅ Define an Enum for Service Types
enum ServiceType {
  All = "All",
  LabelsAndPackaging = "Labels & Packaging",
  PostersAndFlyers = "Posters & Flyers",
  BillboardsBannersRollUps = "Billboards, Banners & Roll Ups",
  VehicleBranding = "Vehicle Branding",
  TradePromoBooths = "Trade Promo Booths",
  PromoShelves = "Promo Shelves",
  Logo = "Logo",
  TShirtDesign = "T-Shirt Design",
}

// ✅ Define Service Interface
interface Service {
  name: ServiceType;
  src: string;
}

type ServiceImage = {
  src: string;
  name: string;
};

// ✅ Group All Services into One Array
const allServices: { type: ServiceType; images: Service[] }[] = [
  {
    type: ServiceType.LabelsAndPackaging,
    images: [
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/1_chocolate-bar-design.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/2_product-design-print.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/3_label-box-packaging-doypack-laundry-detergent.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/4_stand-up-pouch-doypack-laundry-detergent-clothes.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/5_box-dieline-packaging-dou-pack.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/6_spray-bottle-can-design.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/7_spray-bottle-can-aerosol-print.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/8_chocolate-label-design.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/9_groceries-packaging-design.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/10_shelf-ready-packaging.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/11_toilet-cleaner-block-packaging.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/12_paneer-pouch-design.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/13_supplement-protein-powder-packaging-stand-up-pouch-design.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/14_stand-up-pouch-doypack-packaging.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/15_detergent-label-design.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/16_box-packaging-branding-medicine-cure.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/17_laundry-detergent-design-label-packaging.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/17_b_aluminium-aerosol-can-design.jpg" },
      { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/18_liquid-soap-label-design.jpg" }
    ],
  },
  {
    type: ServiceType.PostersAndFlyers,
    images: [
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/1_baby-kids-cosmetics-poster.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/2_ads-social-network-poster-sport.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/3_magazine-ads-poster-product.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/4_music-party-event-poster.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/5_music-festival-jazz-poster.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/6_party-night-club-instagram-post-poster.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/7_flyer-dessert-restaurant.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/8_product-flyer-instagram-post.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/9_kindergarten-kids-poster-instagram-ad.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/10_children-poster-flyer.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/11_music-night-club-poster.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/12_product-ads-city-light-poster.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/13_magazine-ad-healthy-food.jpg" },
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/14_techno-music-event-ads.jpg"},
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/15_night-club-event-led-display.jpg"},
      { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/16_club-party-dance-billboards.jpg"}
    ],
  },
  {
    type: ServiceType.BillboardsBannersRollUps,
    images: [
      { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg" },
      { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/2_billboard-banner-backdrop-design.jpg" },
      { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/3_roll-up-retractable-banners-design.jpg" },
      { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/4_city-light-advertising.jpg" },
      { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/5_market-ads-banner.jpg" },
      { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/6_vinyl-banners-poster-design.jpg" },
    ],
  },
  {
    type: ServiceType.VehicleBranding,
    images: [
      { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/1_truck-lorry-branding-design.jpg" },
      { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/2_van_branding_design.jpg" },
      { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/3_van-vehicle-branding.jpg" },
      { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/4_van-vehicle-design.jpg" },
    ],
  },
  {
    type: ServiceType.TradePromoBooths,
    images: [
      { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/1_promo-trade-booth-stand-fair-design.jpg" },
      { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/2_promo-booth-stand-fair-branding.jpg" },
      { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/3_promo-booth-stand-fair-branding-elements.jpg" },
      { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/4_promo-trade-booth-stand-fair-kiosk.jpg" },
      { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/5_promo-trade-booth-stand-fair-kiosk-elements.jpg" },
      { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/6_promo-table-design.jpg" },
    ]
  },
  {
    type: ServiceType.PromoShelves,
    images: [
      { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/1_shelves-market-branding-design.jpg" },
      { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/2_standing-retail-display-shelves.jpg" },
      { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/3_standing-retail-display-design.jpg" },
      { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/4_product-display-design.jpg" },
    ]
  },
  {
    type: ServiceType.Logo,
    images: [
      { name: ServiceType.Logo, src: "/portfolio/logos/1_logo-corporate-identity.jpg" },
      { name: ServiceType.Logo, src: "/portfolio/logos/2_logo-packaging.jpg" },
      { name: ServiceType.Logo, src: "/portfolio/logos/3_logo-visual-identity-design.jpg" },
      { name: ServiceType.Logo, src: "/portfolio/logos/4_logo-logotype-business.jpg" },
      { name: ServiceType.Logo, src: "/portfolio/logos/5_logo-monogram-restaurant-pub.jpg" },
      { name: ServiceType.Logo, src: "/portfolio/logos/6_logo-wordmark-jci.jpg" },
    ]
  },
  {
    type: ServiceType.TShirtDesign,
    images: [
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/1_t-shirt-design.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/2_casual-wear-design.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/3_graphic-tee.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/4_streetwear-design.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/5_t-shirt-custom-design.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/6_t-shirt-design-sublimation.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/7_fashion-design-t-shirt.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/8_printed-tee-design.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/9_design-casual-wear.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/10_graphic-tee-t-shirt.jpg" },
      { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/11_t-shirt-streetwear-design.jpg" },
    ]
  }
];

// 🎬 Motion Variants for Animation
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ✅ Main Component
const ServicesGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceType>(ServiceType.All);



  // ✅ Filtered Images Based on Selection
  const filteredServices =
    selectedCategory === ServiceType.All
      ? allServices // Show all categories
      : allServices.filter((service) => service.type === selectedCategory); // Show only selected category

  // ✅ Lightbox States
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeCategoryImages, setActiveCategoryImages] = useState<ServiceImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ✅ Keyboard Navigation for Lightbox
  useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (!lightboxOpen) return;
  
        if (e.key === "ArrowLeft") {
          setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : activeCategoryImages.length - 1));
        } else if (e.key === "ArrowRight") {
          setCurrentImageIndex((prev) => (prev < activeCategoryImages.length - 1 ? prev + 1 : 0));
        } else if (e.key === "Escape") {
          setLightboxOpen(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, activeCategoryImages.length]);




  return (
    <div className="container mx-auto p-4">
      <TitleAnimation
          title="WORK / PORTFOLIO / SOLUTIONS"
          message="IMAGINE YOUR PROJECT HERE"
          smallTitle="PORTFOLIO"
          smallMessage="IMAGINE YOUR PROJECT HERE" />
      {/* ✅ Filter Dropdown */}
      <div className="md:mb-6 flex justify-end my-1 md:my-14  mr-4 lg:mr-10">
        <label className="block text-lg font-semibold mb-2">Filter by Category:</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as ServiceType)}
          className="p-2 border-2 border-white rounded-md font-bold text-white dark:text-white bg-[#101010] dark:bg-[#101010] tracking-wide"
        >
          {Object.values(ServiceType).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* ✅ Display Filtered Images with Titles */}
      {/* ✅ Display Filtered Images with Titles */}
      {filteredServices.map(({ type, images }) => (
        <div key={type} className="mb-12 mx-4 lg:mx-10">
          {/* ✅ Show Category Title */}
          <p className="text-lg lg:text-3xl 2xl:text-4xl 4xl:text-5xl 5xl:text-7xl font-bold mb-10 border-b-2 border-gray-700 pb-2 text-white uppercase mt-36">
            {type}
          </p>

          {/* ✅ Display Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 4xl:grid-cols-6 gap-4 2xl:gap-10 3xl:gap-11 4xl:gap-12 5xl:gap-14">
            {images.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="cursor-pointer"
                onClick={() => {
                  setActiveCategoryImages(images);
                  setCurrentImageIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={`/sm/${service.src}`}
                  alt={service.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}


      {/* ✅ Custom Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-6 text-white text-4xl"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>

          <button
            className="absolute left-4 text-white text-4xl"
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev > 0 ? prev - 1 : activeCategoryImages.length - 1
              )
            }
            aria-label="Previous"
          >
            &#8592;
          </button>

          <img
            src={activeCategoryImages[currentImageIndex].src}
            alt={activeCategoryImages[currentImageIndex].name}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
          />

          <button
            className="absolute right-4 text-white text-4xl"
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev < activeCategoryImages.length - 1 ? prev + 1 : 0
              )
            }
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
      )}






    </div>
  );
};

export default ServicesGallery;
