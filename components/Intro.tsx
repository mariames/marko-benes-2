// components/ResponsiveComponent.tsx

import React from 'react';
import { TypewriterEffectSmoothDemo } from './TypewriterEffectSmoothDemo';
import Image from 'next/image';

const Intro: React.FC = () => {
  return (
    <div className="flex justify-center py-10 px-5">

        <Image
          src="/About_Marko.jpg" // replace with your image path
          alt="Sample"
          width={2660}
          height={2000}
          className="max-w-6xl h-auto rounded-lg transform transition-all duration-700 ease-in-out hover:scale-105"
        />
    </div>
  );
};

export default Intro;
