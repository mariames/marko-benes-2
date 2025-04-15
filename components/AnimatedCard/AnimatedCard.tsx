import Image from "next/image";
import React from "react";

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen max-md:h-96 bg-black px-4">
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
            absolute left-0 right-0 mx-auto
            bg-white rounded-xl shadow-lg
            md:w-[680px] sm:w-[316px]
            px-6 py-7
            opacity-0 group-hover:opacity-100
            translate-y-32 group-hover:translate-y-[-7rem]
            transition-all duration-700
            z-10
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
