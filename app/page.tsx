"use client";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import HeroSection2 from "@/components/HeroSection2";
import LogosMobie from "@/components/LogosMobile";

export default function Home() {
  return (
    <main>
      <CustomCursor />
        <HeroSection2 />
    
      <div className="h-10 lg:h-96"></div>
      
       <Services />
      
      
        <Logos />
        <LogosMobie />
         
      <CallToAction />    
    </main>
  );
}
