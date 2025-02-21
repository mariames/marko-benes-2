"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageZoomProps {
  src: string;
  alt: string;
  zoomArea: { x: number; y: number; width: number; height: number }; // Defines the area of the image to zoom in on
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, alt, zoomArea }) => {
  const { x, y, width, height } = zoomArea;

  return (
    <motion.div
      className="relative w-full h-full"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
        style={{
          objectPosition: `${x}% ${y}%`,
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
};

const ImageGrid: React.FC = () => {
  // Main image
  const mainImage = "/portfolio/vehicles/2_van_branding_design.jpg"; // Example image URL
  const detail1 = "/portfolio/vehicles/2_van_branding_design.jpg"; // Example detail image
  const detail2 = "/portfolio/vehicles/2_van_branding_design.jpg"; // Example detail image

  // Coordinates and dimensions for zoomed-in sections
  const zoomArea1 = { x: 25, y: 25, width: 50, height: 50 };
  const zoomArea2 = { x: 75, y: 25, width: 50, height: 50 };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Main Image */}
      <div className="mb-4">
        <motion.img
          src={mainImage}
          alt="Main Image"
          className="w-full h-auto object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Detail Images (Zoomed-in sections) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="relative w-full h-full">
          <ImageZoom src={mainImage} alt="Detail 1" zoomArea={zoomArea1} />
        </div>
        <div className="relative w-full h-full">
          <ImageZoom src={mainImage} alt="Detail 2" zoomArea={zoomArea2} />
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
