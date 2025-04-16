import React from 'react';

type TextBlockProps = {
  children: React.ReactNode;
};

const TextBlock: React.FC<TextBlockProps> = ({ children }) => {
  return (
    <div className="text-gray-100 text-lg md:text-xl lg:text-2xl text-justify m-5">
      {children}
    </div>
  );
};

export default TextBlock;
