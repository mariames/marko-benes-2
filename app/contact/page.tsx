import ProjectPlaner from "@/components/ProjectPlanner";
import TitleAnimation from "@/components/TitleAnimation";

export default function Contact() {
    return (
      <>
      <TitleAnimation
        title="PROJECT PLANNER"
        message="LETS TALK ABOUT PROJECT"
        smallTitle="PROJECT PLANNER"
        smallMessage="LETS TALK ABOUT PROJECT" />
         
      <ProjectPlaner />        
      </>
    );
}