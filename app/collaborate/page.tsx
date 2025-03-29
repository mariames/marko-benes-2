// components/SimpleComponent.js

import CallToAction from "@/components/CallToAction";
import CollaborateSection from "@/components/CollaborateSection";
import FaqToggle from "@/components/FaqToggle";
import MainTitleOfThePage from "@/components/MainTitleofThePage";
import TitleAnimation from "@/components/TitleAnimation";
import TitleOFPage from "@/components/TitleOFPage";

export default function Collaborate() {
    return (
      <div>
        <TitleAnimation
          title="APPROACH / COLLABORATE "
          message="LET'S MAKE YOUR IDEAS HAPPEN" />
        <CollaborateSection />
        <FaqToggle />
        <CallToAction />
      </div>
    );
  }
  