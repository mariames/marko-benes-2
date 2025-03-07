import Intro from "@/components/Intro";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";


export default function Home() {
  return (
    <main>
      <Intro />
      <Services />
      <Logos />
      <CallToAction />     
    </main>
  );
}
