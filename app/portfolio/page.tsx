"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TitleOFPage from "@/components/TitleOFPage";

// ✅ Define an Enum for Service Types
enum ServiceType {
  LabelsAndPackaging = "Labels & Packaging",
  PostersAndFlyers = "Posters & Flyers",
  BillboardsBannersRollUps = "Billboards, Banners & Roll Ups",
  VehicleBranding = "Vehicle Branding",
  TradePromoBooths = "Trade Promo Booths",
  PromoShelves = "Promo Shelves",
  Logo = "Logo",
  TShirtDesign = "T-Shirt Design",
  VideoDesign = "Video Design",
}

// ✅ Define an Enum for Service Links
enum ServiceLink {
  LabelsAndPackaging = "/services/labels_and_packaging",
  PostersAndFlyers = "/services/posters_and_flyers",
  BillboardsBannersRollUps = "/services/billboards_banners_roll_ups",
  VehicleBranding = "/services/vehicle_branding",
  TradePromoBooths = "/services/trade_promo_booths",
  PromoShelves = "/services/promo_shelves",
  Logo = "/services/logo",
  TShirtDesign = "/services/t-shirt_design",
  VideoDesign = "/services/video_design",
}

// ✅ Function to Dynamically Map ServiceType to ServiceLink
const getServiceLink = (service: ServiceType): string => {
  switch (service) {
    case ServiceType.LabelsAndPackaging:
      return ServiceLink.LabelsAndPackaging;
    case ServiceType.PostersAndFlyers:
      return ServiceLink.PostersAndFlyers;
    case ServiceType.BillboardsBannersRollUps:
      return ServiceLink.BillboardsBannersRollUps;
    case ServiceType.VehicleBranding:
      return ServiceLink.VehicleBranding;
    case ServiceType.TradePromoBooths:
      return ServiceLink.TradePromoBooths;
    case ServiceType.PromoShelves:
      return ServiceLink.PromoShelves;
    case ServiceType.Logo:
      return ServiceLink.Logo;
    case ServiceType.TShirtDesign:
      return ServiceLink.TShirtDesign;
    case ServiceType.VideoDesign:
      return ServiceLink.VideoDesign;
    default:
      return "/";
  }
};

// ✅ Define Service Interface
interface Service {
  name: ServiceType;
  src: string;
}


// ✅ Use the Enum in the Array
const services: Service[] = [
  { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/1_chocolate-bar-design.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/1_baby-kids-cosmetics-poster.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg" },
  { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/1_truck-lorry-branding-design.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/1_promo-trade-booth-stand-fair-design.jpg" },
  { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/1_shelves-market-branding-design.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/1_logo-corporate-identity.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/1_t-shirt-design.jpg" },
  { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/2_product-design-print.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/2_ads-social-network-poster-sport.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/2_billboard-banner-backdrop-design.jpg" },
  { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/2_van_branding_design.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/2_promo-booth-stand-fair-branding.jpg" },
  { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/2_standing-retail-display-shelves.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/2_logo-packaging.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/2_casual-wear-design.jpg" },
  { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/3_label-box-packaging-doypack-laundry-detergent.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/3_magazine-ads-poster-product.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/3_roll-up-retractable-banners-design.jpg" },
  { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/3_van-vehicle-branding.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/3_promo-booth-stand-fair-branding-elements.jpg" },
  { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/3_standing-retail-display-design.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/3_logo-visual-identity-design.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/3_graphic-tee.jpg" },
  { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/4_stand-up-pouch-doypack-laundry-detergent-clothes.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/4_music-party-event-poster.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/4_city-light-advertising.jpg" },
  { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/4_van-vehicle-design.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/4_promo-trade-booth-stand-fair-kiosk.jpg" },
  { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/4_product-display-design.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/4_logo-logotype-business.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/4_streetwear-design.jpg" },
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
  { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/18_liquid-soap-label-design.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/5_music-festival-jazz-poster.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/6_party-night-club-instagram-post-poster.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/7_flyer-dessert-restaurant.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/8_product-flyer-instagram-post.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/9_kindergarten-kids-poster-instagram-ad.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/10_children-poster-flyer.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/11_music-night-club-poster.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/12_product-ads-city-light-poster.jpg" },
  { name: ServiceType.PostersAndFlyers, src: "/portfolio/posters-flyers/13_magazine-ad-healthy-food.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/5_market-ads-banner.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/6_vinyl-banners-poster-design.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/5_promo-trade-booth-stand-fair-kiosk-elements.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/6_promo-table-design.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/5_logo-monogram-restaurant-pub.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/5_t-shirt-custom-design.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/6_logo-wordmark-jci.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/6_t-shirt-design-sublimation.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/7_fashion-design-t-shirt.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/8_printed-tee-design.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/9_design-casual-wear.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/10_graphic-tee-t-shirt.jpg" },
  { name: ServiceType.TShirtDesign, src: "/portfolio/t-shirt/11_t-shirt-streetwear-design.jpg" },
];

const labelsAndPackagingServices: Service[] = [
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
  { name: ServiceType.LabelsAndPackaging, src: "/portfolio/labels-packaging/18_liquid-soap-label-design.jpg" },
];

const postersAndFlyersServices: Service[] = [
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
];

const billboardsBannersRollUpsServices: Service[] = [
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/2_billboard-banner-backdrop-design.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/3_roll-up-retractable-banners-design.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/4_city-light-advertising.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/5_market-ads-banner.jpg" },
  { name: ServiceType.BillboardsBannersRollUps, src: "/portfolio/billboards-banners-roll-ups/6_vinyl-banners-poster-design.jpg" },
];

const vehicleBrandingServices: Service[] = [
  { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/1_truck-lorry-branding-design.jpg" },
  { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/2_van_branding_design.jpg" },
  { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/3_van-vehicle-branding.jpg" },
  { name: ServiceType.VehicleBranding, src: "/portfolio/vehicles/4_van-vehicle-design.jpg" },
];

const tradePromoBoothsServices: Service[] = [
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/1_promo-trade-booth-stand-fair-design.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/2_promo-booth-stand-fair-branding.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/3_promo-booth-stand-fair-branding-elements.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/4_promo-trade-booth-stand-fair-kiosk.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/5_promo-trade-booth-stand-fair-kiosk-elements.jpg" },
  { name: ServiceType.TradePromoBooths, src: "/portfolio/promo-booths/6_promo-table-design.jpg" },
];

const promoShelvesServices: Service[] = [
  { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/1_shelves-market-branding-design.jpg" },
  { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/2_standing-retail-display-shelves.jpg" },
  { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/3_standing-retail-display-design.jpg" },
  { name: ServiceType.PromoShelves, src: "/portfolio/promo-shelves/4_product-display-design.jpg" },
];

const logoServices: Service[] = [
  { name: ServiceType.Logo, src: "/portfolio/logos/1_logo-corporate-identity.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/2_logo-packaging.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/3_logo-visual-identity-design.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/4_logo-logotype-business.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/5_logo-monogram-restaurant-pub.jpg" },
  { name: ServiceType.Logo, src: "/portfolio/logos/6_logo-wordmark-jci.jpg" },
];

const tshirtServices: Service[] = [
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
];

const allServices: Service[] = [
  ...labelsAndPackagingServices,
  ...postersAndFlyersServices,
  ...billboardsBannersRollUpsServices,
  ...vehicleBrandingServices,
  ...tradePromoBoothsServices,
  ...promoShelvesServices,
  ...logoServices,
  ...tshirtServices
];

// 🎬 Motion Variants for Animation
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-950 pb-10 px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-64">
      <TitleOFPage title="Portfolio" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {allServices.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href={getServiceLink(service.name)} className="relative group">
              <div
                className="w-full aspect-[1500/1124] flex items-center justify-center bg-gray-900 rounded-lg border border-slate-800 bg-cover bg-center transition-all duration-300 group-hover:brightness-100"
                style={{ backgroundImage: `url(${service.src})` }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
