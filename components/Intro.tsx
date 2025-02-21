// components/ResponsiveComponent.tsx

import React from 'react';
import { TypewriterEffectSmoothDemo } from './TypewriterEffectSmoothDemo';
import Image from 'next/image';

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start py-10 px-5">
      {/* Left side - Text */}
      <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center mt-2">
        <Image
          src="/hero_image.png" // replace with your image path
          alt="Sample"
          width={300}
          height={300}
          className="w-auto h-80 rounded-lg transform transition-all duration-700 ease-in-out hover:scale-105"
        />
      </div>

      {/* Right side - Image */}
      <div className="md:w-2/3 text-center md:text-left md:px-5">
      <TypewriterEffectSmoothDemo />
      </div>
    </div>
  );
};

export default Intro;
