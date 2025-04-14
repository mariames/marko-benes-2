import React from 'react';
import './AnimatedCard.css'; // We'll write minimal CSS for animation separately

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="relative w-full px-7">
        <img
          src="/about/6406_frellance-carrier.jpg"
          alt="The Great Path"
          className="rounded-2xl w-full"
        />

        <div className="card-data absolute left-1/2 transform -translate-x-1/2 bottom-[-9rem] w-[680px] bg-gray-50 rounded-xl p-10 shadow-lg opacity-0 transition-all duration-1000">
          <p className="sm:text-2xl md:text-4xl 2xl:text-5xl 3xl:text-5xl 4xl:text-7xl 5xl:text-9xl  font-medium farmhouse-title text-black mb-4">
            Hi! I am Marko!
          </p>
          <p className="text-xl font-medium text-gray-800 mb-2">
            A graphic designer specializing in creating delightful designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
