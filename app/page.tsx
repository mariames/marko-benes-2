"use client";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import AnimatedCard from "@/components/AnimatedCard/AnimatedCard";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <AnimatedCard />
      <div className="h-96"></div>
      <Services />
      <Logos />
      <CallToAction />    
    </main>
  );
}
