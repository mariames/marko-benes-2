import CallToAction from "@/components/CallToAction";
import CardSection from "@/components/CardSection";
import LandingSection from "@/components/LandingSection/LandingSection";
import Stack from "@/components/Stack";
import TitleAnimation from "@/components/TitleAnimation";

const About = () => {
  return (
    <>
      {/** <TitleOFPage title="About" /> */}
      <TitleAnimation
          title="ABOUT / CAREER"
          message="DESIGN AS A CALLING" />
      <LandingSection />
      <CardSection />
      <Stack />
      <CallToAction />
    </>
  );
};

export default About;
