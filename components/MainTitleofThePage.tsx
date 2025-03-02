import React from "react";

interface MainTitleOfThePageProps {
    title: string
}
const MainTitleOfThePage: React.FC<MainTitleOfThePageProps> = ({title}) => {
  return (
    <div className="relative flex flex-col items-center w-full">
        {/* White Section (Larger & Centered) */}
        <div className="bg-white text-black text-center py-4 px-8 rounded-xl shadow-lg max-w-5xl w-full relative ">
            <p className="text-9xl pt-10 mn-title">{title}</p>
        </div>
    </div>
  );
};

export default MainTitleOfThePage;
