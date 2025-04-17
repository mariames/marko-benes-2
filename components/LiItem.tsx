import React, { ReactNode } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

interface LiItemProps {
  children: ReactNode;
}

const LiItem: React.FC<LiItemProps> = ({ children }) => {
  return (
    <div className="flex items-start space-x-3">
        <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-3 h-3 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8" />
        </div>
        <p className="text-gray-300 2xl:text-2xl">
            {children}
        </p>
    </div>
  )
}

export default LiItem