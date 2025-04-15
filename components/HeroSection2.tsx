import Image from 'next/image'
import React from 'react'

const HeroSection2 = () => {
  return (
    <>
        <div className='p-52'>
        <Image
            src="/about/6406_frellance-carrier.jpg"
            alt="The Great Path"
            className="rounded-2xl w-full"
            width={3840}
            height={1679}
            />
        </div>
    </>
  )
}

export default HeroSection2