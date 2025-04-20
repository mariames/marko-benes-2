import React, { ReactNode } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface LiItemProps {
  children: ReactNode;
}

const LiItem: React.FC<LiItemProps> = ({ children }) => {
  return (
    <div className="flex items-start space-x-3 mt-2">
        <div className="flex self-center">
            <FaCheckCircle className="text-[#e5dfd3] w-3 h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5" />
        </div>
        <p className="text-gray-300 2xl:text-2xl">
            {children}
        </p>
    </div>
  )
}

export default LiItem