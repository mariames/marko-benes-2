"use client";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi! ",
      className: "font-semibold",
    },
    {
      text: "I am ",
      className: "font-semibold",
    },
    {
      text: "Marko",
      className: "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-600 dark:text-blue-500",
    },
    {
        text: "!",
        className: "font-semibold",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[12rem]">
      
      <p className="farmhouse-title text-5xl mb-5">Hi! I am Marko!</p>  
      <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-base md:text-xl lg:text:2xl xl:text-2xl ">
        A <span className="text-gray-600">Graphic Designer</span> specializing in creating delightful designs.
      </p>
      <p className="mb-5 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-base md:text-xl lg:text:2xl xl:text-2xl ">
        Partnering with agencies, start-ups, and companies worldwide.
      </p>
    </div>
  );
}
