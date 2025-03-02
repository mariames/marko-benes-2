import React from "react";

interface TitleOFPageProps {
  title: string;
}

const TitleOFPage: React.FC<TitleOFPageProps> = ({ title }) => {
  return (
    <p className="text-xl sm:text-3xl lg:text-5x text-center py-16 text-gray-300 mn-title bg-black">
      {title}
    </p>
  );
};

export default TitleOFPage;
