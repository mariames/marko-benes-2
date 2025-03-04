import React from "react";

const AboutTitle: React.FC = () => {
  return (
        <div className="relative flex flex-col items-center w-full">
        {/* White Section (Larger & Centered) */}
        <div className="bg-white text-black text-center py-4 px-8 rounded-xl shadow-lg max-w-5xl w-full relative ">
            <p className="text-9xl pt-10 mn-title">About</p>
        </div>

        {/* Black Section (Full Width) */}
        <div className="bg-black w-full h-20 mt-[-3rem]"></div>

            {/* Image Positioned Over Both Sections */}
            <div className="absolute top-[150px] transform -translate-y-1/2 ml-[700px]">
                <img
                src="/slika-About.png"
                alt="Profile"
                className="w-auto h-64 rounded-full border-4 border-white shadow-lg z-10"
                />
            </div>
        </div>


  );
};

export default AboutTitle;
