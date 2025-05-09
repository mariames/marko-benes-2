"use client";
import Logos from "@/components/Logos";
import Services from "@/components/Services";
import CallToAction from "@/components/CallToAction";
import LogosMobie from "@/components/LogosMobile";
import ResponsiveServiceHeroWithDesc from "@/components/ResponsiveServiceHeroWithDesc";
import Word from "@/components/Word/Word";
import AboutMarko from "@/components/AboutMarko";
import TitleOFPage from "@/components/TitleOFPage";
import TitleAnimation from "@/components/TitleAnimation";
import FaqToggle from "@/components/FaqToggle";

export default function Home() {

    const leftImgs = [
    { id: 1, name: "Kompyte", location:"London", img: "/service-section/Kompyte.png" },
    { id: 2, name: "Benis Studio", location:"Subotica", img: "/service-section/benis-studio.png" },
    { id: 3, name: "3D studio", location:"Novi Sad", img: "/service-section/3D-components.png" },
    { id: 4, name: "Lawyer Zoltan", location:"Belgrade", img: "/service-section/Lawyers-Bg.png" },
    { id: 5, name: "Posture and Performance", location:"Abu Dhabi", img: "/service-section/LabelsAndPackaging/5_paneer-pouch-design.jpg" },
    { id: 6, name: "Palacinkarnica Kec", location:"Novi Sad", img: "/service-section/palacinkarnica-kec.png" }
  ];

  const rightImgs = [
    { id: 1, name: "Posture and Performance", location:"Abu Dhabi", img: "/service-section/posture-and-performance.png" },
    { id: 2, name: "Palacinkarnica Kec", location:"Novi Sad", img: "/service-section/palacinkarnica-kec.png" },
    { id: 3, name: "Arabic Calligraphy", location:"Copenhagen", img: "/service-section/Arabic.png" },
    { id: 4, name: "Lawyer Petkovic", location:"Subotica", img: "/service-section/Lawyers.png" },
    { id: 5, name: "Posture and Performance", location:"Abu Dhabi", img: "/service-section/LabelsAndPackaging/5_paneer-pouch-design.jpg" },
    { id: 6, name: "Palacinkarnica Kec", location:"Novi Sad", img: "/service-section/palacinkarnica-kec.png" }
  ];

  const paragraph = "Hello, I'm Marijana Vujovic, a passionate web developer based in Europe. With a creative spirit and an eye for performance details, I specialize in crafting visually appealing web solutions.";

  return (
    <main>
      {/** <CustomCursor /> */}
      <ResponsiveServiceHeroWithDesc
        title={["Marijana Vujovic"]}
        subtitle="Web Performance Developer"
        description="Making the modern web faster, smoother, better. I collaborate with early-stage startups to craft visually stunning and functional websites."
        leftImgs={leftImgs}
        rightImgs={rightImgs}
        portfolioLink="/portfolio"
         />
      
      <div className="h-10 lg:h-20"></div>

        <Word paragraph = {paragraph} />
        <AboutMarko />
        <FaqToggle />
      {/** 
      <TitleAnimation
          title="WORK / PORTFOLIO / SOLUTIONS"
          message="IMAGINE YOUR PROJECT HERE"
          smallTitle="PORTFOLIO"
          smallMessage="IMAGINE YOUR PROJECT HERE" />
          */}
      {/** Skills */}


       {/** <Services /> */}
       {/** WHY ME */}
      {/** Testemonial */}
    
         
      <CallToAction />    
    </main>
  );
}
