import Hero from "@/components/Hero";
import { InfoCards } from "@/components/InfoCard";
import Competitors from "@/components/Competitors";
import Leaders from "@/components/Leaders";
import { StickyScrollRevealDemo } from "@/components/StickyScrollDemo";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Intro from "@/components/Intro";
import Wizard from "@/components/Wizard";
import Logos from "@/components/Logos";


export default function Home() {
  return (
    <main>
      <Intro />
      <Services />
      <Logos />
      <Footer />      
    </main>
  );
}
