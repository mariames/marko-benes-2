import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (

<div className="w-full bg-black">    
    <div className="flex flex-col md:flex-row items-center justify-between bg-black text-white p-8 rounded-xl max-w-7xl mx-auto">
    {/* Right Section - Profile Image */}
    <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
        <Image
          src="/Marko-BW.png" 
          alt="Marko Benis"
          width={320}
          height={320}
          className="rounded-lg grayscale object-cover w-80 h-80 border border-gray-700"
        />
    </div>
      
      
      {/* Left Section */}
      <div className="md:w-2/3 space-y-6">
        <div className="border border-gray-700 p-6 rounded-lg">
          <h1 className="text-4xl font-bold farmhouse-title">
            Hey! I&apos;m Marko
        </h1>
          <hr className="border-gray-700 my-2" />
          <h2 className="text-2xl text-gray-400"> A Graphic Designer specializing in creating delightful designs.</h2>
        </div>
        <div className="border border-gray-700 p-4 rounded-lg">
          <p className="text-gray-400 text-2xl">
          Partnering with agencies, start-ups, and companies worldwide.
          </p>
        </div>
        <div className="flex items-center justify-between border border-gray-700 p-4 rounded-lg">
          <span className="text-gray-400 text-xl">• Available for Work</span>
          <button className="bg-transparent border border-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 christmas-title">Let&apos;s Connect!</button>
        </div>
      </div>
      
    </div>
</div>
  );
};

export default HeroSection;
