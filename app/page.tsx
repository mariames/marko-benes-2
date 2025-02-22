import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Logos from "@/components/Logos";
import HorizontalScrollCard from "@/components/HorizontalScrollCard";
import CardsParallaxContainer from "@/components/CardsParallaxContainer/CardsParallaxContainer";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main>
      <Intro />
      {/** <CardsParallaxContainer /> */}
      {/** <HorizontalScrollCard /> */}
      <Services />
      <Logos />
      <Footer />      
    </main>
  );
}
