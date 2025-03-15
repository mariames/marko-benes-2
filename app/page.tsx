import Intro from "@/components/Intro";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import LandingSection from "@/components/LandingSection/LandingSection";


export default function Home() {
  return (
    <main>
      <LandingSection />
      {/** <Intro /> */}
      <Services />
      <Logos />
      <CallToAction />     
    </main>
  );
}
