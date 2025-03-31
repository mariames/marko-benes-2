import AboutTitle from "@/components/AboutTitle";
import CallToAction from "@/components/CallToAction";
import CardSection from "@/components/CardSection";
import { Cta } from "@/components/Cta";
import ImageGrid from "@/components/ImageGrid";
import Stack from "@/components/Stack";
import TitleAnimation from "@/components/TitleAnimation";
import TitleOFPage from "@/components/TitleOFPage";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/** <TitleOFPage title="About" /> */}
      <TitleAnimation
          title="ABOUT / CAREER"
          message="DESIGN AS A CALLING" />
      <CardSection />
      <Image src="/about/6406_frellance-carrier.jpg" width={3840} height={1679} alt="Marko Benis" className="w-full h-auto" />
      <Stack />
      <CallToAction />
    </>
  );
};

export default About;
