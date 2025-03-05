import React from "react";

const AboutTitle: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center w-full max-sm:mx-7">
      {/* White Section (Larger & Centered) */}
      <div className="bg-white text-black text-center py-4 px-6 sm:px-8 rounded-xl shadow-lg w-full  max-w-5xl max-sm:w-5/6 relative">
        <p className="text-4xl sm:text-9xl pt-6 sm:pt-10 mn-title">About</p>
      </div>

      {/* Black Section (Full Width) */}
      <div className="bg-black w-full h-20 mt-[-3rem]"></div>

      {/* Image Positioned Over Both Sections */}
      <div className="absolute top-[150px] sm:top-[100] transform -translate-y-1/2 sm:ml-[650px] ml-[300px] max-sm:hidden">
        <img
          src="/slika-About.png"
          alt="Profile"
          className="w-32 sm:w-auto h-32 sm:h-64 rounded-full border-4 border-white shadow-lg z-10"
        />
      </div>
    </div>
  );
};

export default AboutTitle;
