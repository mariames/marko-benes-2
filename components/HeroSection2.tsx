import Image from 'next/image'
import React from 'react'

const HeroSection2 = () => {
  return (
    <>
      <div className="max-w-full px-4 mx-auto">
        <Image
          src="/about/6406_frellance-carrier.jpg"
          alt="Marko Benis"
          className="rounded-2xl w-full h-auto"
          width={3840}
          height={1679}
          priority
        />

        <div className="pt-16 lg:pt-32 text-center">
          <span className="block text-3xl md:text-4xl xl:text-5xl 4xl:text-7xl font-medium farmhouse-title text-white mb-4">
            Hi! I am Marko!
          </span>
          <p className="text-xl font-semibold text-white mb-2 xl:text-3xl 4xl:text-5xl 5xl:text-6xl popins-title">
            A graphic designer specializing in creating delightful designs.
          </p>
        </div>
      </div>
    </>
  )
}

export default HeroSection2