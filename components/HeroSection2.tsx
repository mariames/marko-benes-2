import Image from 'next/image'
import React from 'react'

const HeroSection2 = () => {
  return (
    <>
      <div className="max-w-full px-4 mx-auto">
        {/*
        <Image
          src="/about/6406_frellance-carrier.jpg"
          alt="Marko Benis"
          className="rounded-2xl w-full h-auto"
          width={3840}
          height={1679}
          priority
        />
        */}
        {/** 
        <img
          src="/about/6406_frellance-carrier.jpg"
          alt="Marko Benis"
          className="rounded-2xl w-full h-auto"
        />
        */}
        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
          <img
            src="/about/6406_frellance-carrier-large.webp"
            srcSet="
              /about/6406_frellance-carrier-small.webp 960w,
              /about/6406_frellance-carrier-medium.webp 2047w,
              /about/6406_frellance-carrier-large.webp 3840w
            "
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
            alt="Marko Benis"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>


        <div className="pt-16 lg:pt-32 text-center">
          <span className="block text-4xl md:text-4xl xl:text-5xl 4xl:text-8xl 5xl:text-8xl font-medium farmhouse-title text-white mb-4">
            Hi! I am Marko!
          </span>
          <p className="text-xl font-semibold text-white mb-2 xl:text-3xl 4xl:text-6xl 5xl:text-8xl popins-title">
            A graphic designer specializing in creating delightful designs.
          </p>
        </div>
      </div>
    </>
  )
}

export default HeroSection2