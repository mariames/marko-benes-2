"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScrollReveal";
import Image from "next/image";

const content = [
    {
      title: "What I do",
      description: (
        <>
          <p>
          With over 14 years of experience in graphic design, I specialize in creating visual solutions that leave a strong
          impression.
          </p>
          <br></br>
          <p>
            My expertise includes the design of packaging, labels, posters, flyers, designs for social networks,
            billboards, promo shelves, promo stands, roll-ups, vehicle branding, logos, video animation, etc. I adapt each project
            to the specific needs of clients and the market.
          </p>
          <p>
          <br></br>
          I passionately believe in the power of design to enhance brand
          recognition and contribute to its success.
          </p>
          <br></br>
          <p>
          I am dedicated to details and creative solutions. For each project, I
          research the latest industry trends, allowing me to deliver visually appealing and functional products.
          </p>
          <br></br>
        </>
      ),
      content: (
          <Image
            src="/kompyte_img_2.jpg"
            width={700}
            height={600}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
      ),
    },
    {
      title: "Who hires me",
      description: (
        <>
          <p>
          <u>Start-up companies</u> - If you are starting out and want to create a recognizable visual identity, I can help you with
          creating logos, branding, promotional materials, and packaging that will grab the attention of your potential
          customers.
          </p>
          <p>
          <u>Marketing agencies and teams</u> - If you need a graphic designer like an external collaborator, I am always open to
          cooperating. Collaborating with marketing agencies is often a great experience for me, and together we create
          visually appealing and effective campaigns. Whether you need design for digital or print materials, together we can
          realize creative concepts that deliver results.
          </p>
          <br></br>
          <p>
          <u>Companies and entrepreneurs</u> - If you need a graphic designer like an external collaborator, I am always open to
          cooperating. Collaborating with marketing agencies is often a great experience for me, and together we create
          visually appealing and effective campaigns. Whether you need design for digital or print materials, together we can
          realize creative concepts that deliver results.
          </p>

          <p>
          <u>Individuals with a vision</u> - If you need a graphic designer like an external collaborator, I am always open to
          cooperating. Collaborating with marketing agencies is often a great experience for me, and together we create
          visually appealing and effective campaigns. Whether you need design for digital or print materials, together we can
          realize creative concepts that deliver results.
          </p>
        </>
      ),
      content: (
          <Image
            src="/kompyte_img_3.jpg"
            width={700}
            height={600}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
      ),
    },
    {
      title: "The Flow of Cooperation",
      description: (
        <>
          <p>
          The key to successful collaboration with clients is a professional and strategic approach. That is why it is very
          important to me that all elements of cooperation are defined in advance:
          </p>
          <p className="text-3xl my-3">1. Understanding the client&#39;s needs</p>
          <p>Before starting any work, it is important to understand the client&#39;s needs and expectations fully.</p>
          <ul className="list-disc ml-5">
            <li>What is the purpose of the project?</li>
            <li>Who is the target audience and preferred style?</li>
            <li>What are the key visual elements that need to be highlighted?</li>
            <li>Are there any reference materials or brand guidelines?</li>
          </ul>
          <br></br>
          <p>In the Services section, you can view all the necessary information that I need for each type of service.</p>
          <br></br>
          <p>With AI Daily Summaries, what used to take days now takes about an hour a week.</p>
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
      title: "The Flow of Cooperation",
      description: (
        <>
          <p>2. Setting clear expectations</p>
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
      title: "The Flow of Cooperation",
      description: (
        <>
          <p>3. Research and conceptualization</p>
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
      title: "The Flow of Cooperation",
      description: (
        <>
          <p>4. Transparent communication</p>
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
      title: "The Flow of Cooperation",
      description: (
        <>
          <p>
          5. Flexibility and adaptation
          </p>
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
      title: "The Flow of Cooperation",
      description: (
        <>
          <p>
          6. Delivery of final materials
          </p>
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