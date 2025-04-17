import { motion } from "framer-motion";
import LiItem from "./LiItem";

const DryStamp: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
      }}
      viewport={{ once: true }}
      className="bg-black text-white lg:border lg:border-gray-700 rounded-lg p-6"
    >
      <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold">Dry Stamp</p>
      <hr className="border-gray-600 my-2" />
      <p className="text-lg 2xl:text-2xl text-left lg:text-justify break-words overflow-wrap">
        Dry stamp is a technique of embossing a design into paper or cardboard without using ink or foil, which results in a
        relief effect. This technique is often used to add a refined and luxurious look to printed materials.
      </p>
      <p className="text-lg 2xl:text-2xl my-7">Characteristics of dry stamp:</p>
      <div className="space-y-4">

        <LiItem>Embossing &mdash; the design is raised above the surface of the paper, Debossing &mdash; the design is pressed below the surface of the paper.</LiItem>

        <LiItem>No ink or foil &mdash; only pressure is applied using a specially crafted die.</LiItem>

        <LiItem>Visual effect &mdash; gives 3D dimensionality and premium look.</LiItem>

        <LiItem>Best effect on thicker paper &mdash; softer and thicker papers or special art papers give the most pronounced effect.</LiItem>

      </div>
    </motion.div>
  );
};

export default DryStamp;
