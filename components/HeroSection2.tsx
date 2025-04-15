import Image from 'next/image'
import React from 'react'

const HeroSection2 = () => {
  return (
    <>
        <Image
            src="/about/6406_frellance-carrier.jpg"
            alt="Marko Benis"
            className="rounded-2xl w-full h-auto"
            width={3840}
            height={1679}
            />
        
        <div className='pt-32'>
        <span className="sm:text-2xl md:text-4xl 2xl:text-5xl 3xl:text-5xl 4xl:text-7xl 5xl:text-9xl  font-medium farmhouse-title text-white mb-4 text-center flex justify-center">
            Hi! I am Marko!
          </span>
          <p className="text-xl font-semibold text-white mb-2 4xl:text-7xl text-center popins-title">
            A graphic designer specializing in creating delightful designs.
          </p>
        </div>
    </>
  )
}

export default HeroSection2