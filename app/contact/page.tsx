import ContactContent from "@/components/ContactContent";
import ContactSection from "@/components/ContactSection";
import MainTitleOfThePage from "@/components/MainTitleofThePage";
import TitleOFPage from "@/components/TitleOFPage";

export default function Contact() {
    return (
      <>
        <MainTitleOfThePage title="Contact" />
         <ContactContent />
        {/** <ContactSection /> */}
      </>
    );
}