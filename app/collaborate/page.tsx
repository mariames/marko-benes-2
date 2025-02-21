// components/SimpleComponent.js

import CallToAction from "@/components/CallToAction";
import CollaborateSection from "@/components/CollaborateSection";
import TitleOFPage from "@/components/TitleOFPage";

export default function Collaborate() {
    return (
      <div>
        <TitleOFPage title="Collaborate" />
        <CollaborateSection />
        <CallToAction />
      </div>
    );
  }
  