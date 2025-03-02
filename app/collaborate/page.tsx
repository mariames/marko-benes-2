// components/SimpleComponent.js

import CallToAction from "@/components/CallToAction";
import CollaborateSection from "@/components/CollaborateSection";
import MainTitleOfThePage from "@/components/MainTitleofThePage";
import TitleOFPage from "@/components/TitleOFPage";

export default function Collaborate() {
    return (
      <div>
        <MainTitleOfThePage title={"Collaborate"} />
        <CollaborateSection />
        <CallToAction />
      </div>
    );
  }
  