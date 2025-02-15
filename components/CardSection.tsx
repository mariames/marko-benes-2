import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const cardData: CardProps[] = [
  {
    title: "Hey there! I'm Rachel!",
    description: "A product and digital designer on a mission to blend innovation with aesthetic finesse.",
  },
  {
    title: "Innovation at the Core",
    description: "In every project, I strive to infuse a spark of innovation. From conceptualizing sleek interfaces to devising user-centric solutions, my design philosophy revolves around creating products that not only meet user needs but exceed expectations.",
  },
  {
    title: "Crafting Digital Experiences",
    description: "With a passion for pixels and a penchant for problem-solving, I navigate the ever-evolving landscape of digital design. My journey began with a curiosity about how technology intersects with creativity, and it's been a thrilling ride ever since.",
  },
];

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-black text-white border border-gray-700 rounded-lg p-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      <hr className="border-gray-600 my-2" />
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const CardSection: React.FC = () => {
  return (
    <section className="bg-black px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-6">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
