import React from "react";

interface TitleOFPageProps {
  title: string;
}

const TitleOFPage: React.FC<TitleOFPageProps> = ({ title }) => {
  return (
    <p className="text-5xl text-center py-16 text-gray-300 popins-title bg-black">
      {title}
    </p>
  );
};

export default TitleOFPage;
