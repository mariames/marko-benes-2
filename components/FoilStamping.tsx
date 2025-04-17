import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import LiItem from "./LiItem";

const FoilStamping: React.FC = () => {
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
      <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold">Foil Stamping</h2>
      <hr className="border-gray-600 my-2" />
      <p className="text-lg 2xl:text-2xl text-left lg:text-justify">
        Foil stamping or foil blocking is a printing technique in which a metallic or pigmented foil is transferred to the surface of the paper using a heated die and pressure. This technique gives a reflective glossy or matte effect and is used for luxury and premium materials.
      </p>
      <p className="text-lg 2xl:text-2xl my-7">Characteristics of foil stamping:</p>

      <div className="space-y-4">

        <LiItem>Glossy or matte effect &mdash; most common in gold, silver, copper and various other colors.</LiItem>

        <LiItem>High precision &mdash; enables sharp details and fine lines.</LiItem>

        <LiItem>Visual premium experience &mdash; the foil reflects light, giving an elegant look.</LiItem>

        <LiItem>Can be combined with embossing for added dimension.</LiItem>
        
      </div>
    </motion.div>
  );
};

export default FoilStamping;
