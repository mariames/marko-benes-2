import React from 'react';
import AnimatedButton from './AnimatedButton/AnimatedButton';

const CallToAction = () => {

  return (
    <div className="flex flex-col items-center justify-center h-[90vw] md:h-screen 4xl:h-[30vw] bg-black">
      <p className="text-sm font-medium text-gray-500 mb-5">CONTACT ME</p>
      <p className="text-5xl max-sm:text-lg font-semibold mb-5 tracking-wide autour-font text-white">Let&apos;s get in touch</p>
      <p className="text-lg text-center mt-3 mb-8 text-gray-200 font-light">
        Need web solution or have question?
        <br></br>
        I&apos;m here to help.
      </p>
      <AnimatedButton text="Contact me" link="/contact" />
    </div>
  );
};

export default CallToAction;