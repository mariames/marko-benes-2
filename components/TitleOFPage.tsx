import React from "react";

interface TitleOFPageProps {
  title: string;
}

const TitleOFPage: React.FC<TitleOFPageProps> = ({ title }) => {
  return (
    <p className="max-sm:text-xl md:text-3xl lg:text-5xl text-center py-16 text-gray-300 mn-title bg-black">
      {title}
    </p>
  );
};

export default TitleOFPage;
