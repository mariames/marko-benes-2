import React from 'react';
import './AnimatedCard.css'; // We'll write minimal CSS for animation separately
import Image from 'next/image';

const AnimatedCard = () => {
  return (
    <div className="flex justify-center items-center bg-black">
      <div className="relative w-full px-7 4xl:mx-52">
        <Image
          src="/about/6406_frellance-carrier.jpg"
          alt="The Great Path"
          className="rounded-2xl w-full"
          width={3840}
          height={1679}
        />

        <div className="card-data absolute left-1/2 transform -translate-x-1/2 bottom-[-11rem] w-[680px] 2xl:w-[800px] 3xl:w-[900px] 4xl:w-[1800px] bg-gray-50 rounded-xl 4xl:p-20 shadow-lg opacity-95 transition-all duration-1000 ">
          <p className="sm:text-2xl md:text-4xl 2xl:text-5xl 3xl:text-5xl 4xl:text-7xl 5xl:text-9xl  font-medium farmhouse-title text-black mb-4 text-center">
            Hi! I am Marko!
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-2 4xl:text-5xl text-center popins-title">
            A graphic designer specializing in creating delightful designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
