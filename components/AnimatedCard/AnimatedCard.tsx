import Image from "next/image";
import React from "react";

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-start min-h-screen md:h-auto max-sm:h-72 4xl:h-3/4 bg-purple-500 4xl:px-40 px-4 overflow-hidden">
      <div className="relative group w-full">
        {/* Image */}
        <Image
          src="/about/6406_frellance-carrier.jpg"
          alt="The Great Path"
          className="rounded-2xl w-full"
          width={3840}
          height={1679}
        />

        {/* Hidden content that appears on hover */}
        <div
          className="
            absolute left-1/2 top-1/2 transform -translate-x-1/2 
            translate-y-[100%] group-hover:translate-y-[-10%]
            bg-white rounded-xl shadow-lg
            w-[90%]
            px-6 py-7
            opacity-0 group-hover:opacity-100
            transition-all duration-700 ease-in-out
            z-10
            pointer-events-none group-hover:pointer-events-auto
          "
        >
          <span className="sm:text-2xl md:text-4xl 2xl:text-5xl 3xl:text-5xl 4xl:text-7xl 5xl:text-9xl  font-medium farmhouse-title text-black mb-4 text-center">
            Hi! I am Marko!
          </span>
          <p className="text-xl font-semibold text-gray-800 mb-2 4xl:text-7xl text-center popins-title">
            A graphic designer specializing in creating delightful designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
