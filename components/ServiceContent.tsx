import React from "react";

const ServiceContent: React.FC = () => {
  return (
    <div className="bg-yellow-100 p-6 md:p-12 rounded-lg shadow-lg max-w-4xl mx-auto text-gray-900 border-4 border-yellow-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-800 uppercase border-b-4 border-yellow-700 pb-2">
        THE 6-SECOND PAUSE
      </h1>
      <h2 className="text-xl md:text-2xl text-center font-semibold text-gray-700 mt-2">
        HOW TO STAY IN CONTROL UNDER PRESSURE
      </h2>
      <p className="text-center text-gray-600 mt-1 text-sm">By Véronique Barrot</p>
      
      {/* Image Placeholder */}
      <div className="flex justify-center my-6">
        <div className="w-48 h-48 bg-gray-300 rounded-lg"></div>
      </div>
      
      <h3 className="text-center text-lg font-bold text-gray-800 border-b-4 border-yellow-700 pb-2">
        4 STEPS TO REGAIN CONTROL:
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md border-l-4 border-yellow-700">
            <h3 className="text-lg font-semibold text-yellow-700 flex items-center">
              <span className="text-2xl font-bold mr-2">{index + 1}.</span> {step.title}
            </h3>
            <p className="text-sm mt-2"><strong>What:</strong> {step.what}</p>
            <p className="text-sm mt-2"><strong>Why:</strong> {step.why}</p>
            <p className="text-sm mt-2"><strong>Benefit:</strong> {step.benefit}</p>
          </div>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {infoBoxes.map((box, index) => (
          <div key={index} className="bg-yellow-200 p-4 rounded-lg shadow-md border-l-4 border-yellow-700 relative">
            <h3 className="text-lg font-bold text-yellow-900 border-b-2 border-yellow-700 pb-1">
              {box.title}
            </h3>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-800">
              {box.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="border-t-4 border-dashed border-yellow-700 my-6"></div>
    </div>
  );
};

const steps = [
  {
    title: "Breathe Before You React",
    what: "Take a slow, deep breath in. Hold. Exhale. Repeat.",
    why: "This simple act slows your heart rate and clears your mind.",
    benefit: "It gives you space to respond, not just react."
  },
  {
    title: "Label the Emotion",
    what: "Name what you're feeling: 'I'm frustrated.' 'I feel overwhelmed.'",
    why: "This moves brain activity from emotion to logic.",
    benefit: "The moment you name it, its power weakens."
  },
  {
    title: "Create a Physical Pause",
    what: "Change your body's state to reset your mind.",
    why: "Stretch, take a sip of water, or stand up.",
    benefit: "Movement disrupts emotional spirals and brings clarity."
  },
  {
    title: "Breathe Before You React Again",
    what: "Don't hit send. Don't snap back. Just wait.",
    why: "Give yourself 6 seconds—enough time for the stress chemicals to fade.",
    benefit: "Most regrets happen when we react too fast."
  }
];

const infoBoxes = [
  {
    title: "HIGH-EQ LEADERS DO THIS DAILY",
    points: ["Pause before reacting.", "Stay calm under pressure.", "Respond thoughtfully, not impulsively."]
  },
  {
    title: "WHY IT WORKS:",
    points: [
      "Pausing for 6 seconds allows stress hormones to fade.",
      "It shifts control from your emotional brain (amygdala) to your rational brain (prefrontal cortex).",
      "Prevents impulsive reactions that lead to regret."
    ]
  },
  {
    title: "QUICK FIXES FOR EMOTIONAL OVERLOAD",
    points: [
      "In a Meeting? Take notes to slow your reaction.",
      "In an Email? Draft a reply and wait 10 minutes before sending.",
      "In a Conversation? Breathe before responding.",
      "Feeling Overwhelmed? Step away for a quick reset."
    ]
  }
];

export default ServiceContent;
