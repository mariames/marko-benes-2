import ContactContent from "@/components/ContactContent";
import ContactSection from "@/components/ContactSection";
import TitleOFPage from "@/components/TitleOFPage";

export default function Contact() {
    return (
      <div>
        <TitleOFPage title="Contact" />
        <ContactContent />
        {/** <ContactSection /> */}
      </div>
    );
}