import ContactContent from "@/components/ContactContent";
import TitleAnimation from "@/components/TitleAnimation";

export default function Contact() {
    return (
      <>
      <TitleAnimation
        title="CONTACT / PLANNER / EMAIL "
        message="LETS TALK ABOUT PROJECT" />
         <ContactContent />
        {/** <ContactSection /> */}
      </>
    );
}