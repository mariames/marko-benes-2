"use client";
import React from "react";
import Wizard from "./Wizard";


const ProjectPlaner: React.FC = () => {

  return (
    <section className="bg-black text-white py-10 px-6">

      <div className="w-full md:max-w-3xl mx-auto">
        
          <Wizard />

      </div>
    </section>
  );
};

export default ProjectPlaner;
