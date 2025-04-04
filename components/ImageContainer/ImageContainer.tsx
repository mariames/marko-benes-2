import React from "react";
import "./imagecontainer.css";
import Image from "next/image";

// Define types for the component props
interface ImageContainerProps {
  imageSource: string;   // image source should be a string (URL or path)
  description: string;   // description should be a string
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageSource, description }) => {
  return (
    <div className="image-container">
      <Image className="image" src={imageSource} alt="Image description" />
      <p className="date">{description}</p>
    </div>
  );
};

export default ImageContainer;
