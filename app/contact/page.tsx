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
        
        <div className="flex justify-center text-center">
          <p className='text-white text-lg md:text-xl 2xl:text-3xl 4xl:text-4xl font-medium'>
            Submit the <span className="font-semibold">planner form</span > or email me at <span className="font-semibold">marko@benis.studio</span>
          </p>
        </div>
        
      <ProjectPlaner />
              
      </>
    );
}