"use client";
import Intro from "@/components/Intro";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import LandingSection from "@/components/LandingSection/LandingSection";
import MouseTrail from "@/components/MouseTrail/MouseTrail";
import Word from "@/components/Word/Word";

const paragraph = "Design is more than just visuals—it’s about creating an experience."
const p1="It’s about making people feel something."
const p2="Whether it’s a label that tells a story, a logo that sparks recognition, or a billboard that stops them in their tracks, I craft designs that connect."
const p3=" I’m here to help your brand leave a lasting impression and create moments that resonate."
export default function Home() {
  return (
    <main>
      <MouseTrail />
      <LandingSection />
      {/** <Intro /> */}
      <div className="flex flex-col mx-10 5xl:mx-48">
      <Word paragraph={paragraph} />
      <Word paragraph={p1} />
      <Word paragraph={p2} />
      <Word paragraph={p3} />
      </div>
      <Services />
      <Logos />
      <CallToAction />     
    </main>
  );
}
