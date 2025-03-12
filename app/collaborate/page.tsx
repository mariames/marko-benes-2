// components/SimpleComponent.js

import CallToAction from "@/components/CallToAction";
import CollaborateSection from "@/components/CollaborateSection";
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
        <CallToAction />
      </div>
    );
  }
  