"use client";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import Image from "next/image";
import AnimatedCard from "@/components/AnimatedCard/AnimatedCard";

export default function Home() {
  return (
    <main>
      {/** <MouseTrail /> */}
      <CustomCursor />
      {/** 
        <Image 
          src="/about/6406_frellance-carrier.jpg" 
          width={3840} height={1679} 
          alt="Marko Benis" 
          className="w-full h-auto rounded-lg" />
                  <p className="sm:text-2xl md:text-4xl 2xl:text-5xl 3xl:text-5xl 4xl:text-7xl 5xl:text-9xl  font-medium farmhouse-title text-white mb-4">
          Hi! I am Marko!
        </p>
        <p className="sm:text-base md:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-7xl 5xl:text-8xl  text-neutral-100 dark:text-neutral-200 font-semibold text-xs  ">
          A <span className="text-gray-400">Graphic Designer</span> specializing in creating delightful designs.
        </p>
      */}
      <AnimatedCard />
      <div className="h-32"></div>
      <Services />
      <Logos />
      <CallToAction />
      <AnimatedCard />     
    </main>
  );
}
