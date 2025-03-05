import React from "react";

interface MainTitleOfThePageProps {
    title: string
}
const MainTitleOfThePage: React.FC<MainTitleOfThePageProps> = ({title}) => {
  return (
    <div className="relative flex items-center justify-center w-full  mx-auto">
        {/* White Section (Larger & Centered) */}
        <div className="bg-white text-black text-center py-4 px-6 rounded-xl shadow-lg w-full max-w-full sm:max-w-5xl max-sm:w-5/6 relative">
          <p className="text-4xl sm:text-9xl pt-6 sm:pt-10 mn-title">{title}</p>
        </div>
    </div>
  );
};

export default MainTitleOfThePage;
