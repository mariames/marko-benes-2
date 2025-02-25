import AboutTitle from "@/components/AboutTitle";
import CallToAction from "@/components/CallToAction";
import CardSection from "@/components/CardSection";
import { Cta } from "@/components/Cta";
import ImageGrid from "@/components/ImageGrid";
import Stack from "@/components/Stack";
import TitleOFPage from "@/components/TitleOFPage";

const About = () => {
  return (
    <>
      {/** <TitleOFPage title="About" /> */}
      <AboutTitle />
      <CardSection />
      <Stack />
      <CallToAction />
    </>
  );
};

export default About;
