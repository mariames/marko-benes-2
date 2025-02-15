import React from "react";

const stackItems = [
  { name: "Framer", icon: "/icons/framer.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "Illustrator", icon: "/icons/illustrator.svg" },
  { name: "Photoshop", icon: "/icons/photoshop.svg" },
  { name: "Slack", icon: "/icons/slack.svg" },
  { name: "Notion", icon: "/icons/notion.svg" },
];

const Stack: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <h2 className="text-3xl font-semibold mb-6">Stack</h2>
      <div className="grid grid-cols-2 gap-4 border-t border-gray-700 pt-4">
        {stackItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-gray-700 p-4 rounded-lg"
          >
            <span className="text-gray-300">{item.name}</span>
            <img src={item.icon} alt={item.name} className="h-6 w-6" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
