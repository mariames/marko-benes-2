"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";
import Image from "next/image";

const content = [
    {
      title: "The Flow of Cooperation",
      description: (
        <>
          <p>
          The key to successful collaboration with clients is a professional and strategic approach. That is why it is very
          important to me that all elements of cooperation are defined in advance:
          </p>
        </>
      ),
      content: (
        <Image
          src="/kompyte_img_1.jpg"
          width={700}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "1. Understanding the client's needs",
      description: (
        <>
          <p>
          Before starting any work, it is important to understand the client&#39;s needs and expectations fully.
          </p>
          <ul className="list-disc ml-5">
            <li>What is the purpose of the project?</li>
            <li>Who is the target audience and preferred style?</li>
            <li>What are the key visual elements that need to be highlighted?</li>
            <li>Are there any reference materials or brand guidelines?</li>
          </ul>          
          <p>In the Services section, you can view all the necessary information that I need for each type of service.</p>
        </>
      ),
      content: (
        <Image
          src="/kompyte_img_1.jpg"
          width={700}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "2. Setting clear expectations",
      description: (
        <>
          <p>The scope of work, deadlines, and budget are clearly defined to avoid disagreements at a later stage. Let&#39;s agree on
          the following:</p>
          <ul className="list-disc ml-5">
            <li>Number of revisions</li>
            <li>Time frame for each phase of the project</li>
            <li>Method of communication and delivery of materials in specific formats</li>
            <li>Rights to use the final design solutions so that both parties are protected.</li>
            <li>After the invoice is issued and the client makes full payment, I start work.</li>
          </ul>
        </>
      ),
      content: (
        <Image
          src="/kompyte_img_1.jpg"
          width={700}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "3. Research and conceptualization",
      description: (
        <>
          <p>Before designing, I research the client&#39;s industry and the competition. This will help me offer creative and innovative
          solutions in order to create a quality design with trends in the requested area.</p>
        </>
      ),
      content: (
        <Image
          src="/kompyte_img_1.jpg"
          width={700}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "4. Transparent communication",
      description: (
        <>
          <p>Maintaining regular and open communication is key to successful cooperation. I regularly inform the client about the
          progress of the project, ask additional questions if they come up during the project, and ask for feedback.</p>
        </>
      ),
      content: (
        <Image
          src="/kompyte_img_1.jpg"
          width={700}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "5. Flexibility and adaptation",
      description: (
        <>
          <p>
          Although it is important to have a clear vision, I am ready to accept constructive suggestions and possible changes. A
          flexible approach is very important to me for the ultimate goal - a satisfied client and good-quality design.
          </p>
        </>
      ),
      content: (
        <Image
          src="/kompyte_img_1.jpg"
          width={700}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "6. Delivery of final materials",
      description: (
        <>
          <p>
          After approval of the final design, I send a professional preparation for print and deliver all necessary files in the
          agreed formats (PSD, AI, PDF, PNG, etc.).
          </p>
        </>
      ),
      content: (
        <Image
          src="/kompyte_img_1.jpg"
          width={700}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
  ];
  
export function StickyScrollRevealDemo() {
  return (
    <div className="p-0">
      <StickyScroll content={content} />
    </div>
  );
}