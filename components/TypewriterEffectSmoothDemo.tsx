"use client";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
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
    <div className="flex flex-col items-center justify-center h-[25rem]">
      
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-base md:text-xl lg:text:2xl xl:text-2xl ">
        A Graphic Designer specializing in creating delightful designs.
      </p>
      <p className="mb-5 text-neutral-800 dark:text-neutral-200 font-semibold text-xs sm:text-base md:text-xl lg:text:2xl xl:text-2xl ">
        Partnering with agencies, start-ups, and companies globally.
      </p>
      <div className="mt-5 mb-3">
        <AnimatedTooltipPreview />
      </div>
      
    </div>
  );
}
