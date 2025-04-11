import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; 

const FoilStamping: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className="bg-black text-white border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-lg lg:text-3xl 2xl:text-4xl font-normal">Foil stamping</h2>
      <hr className="border-gray-600 my-2" />
      <p className="text-lg 2xl:text-2xl text-justify">Foil stamping or foil blocking is a printing technique in which a metallic or pigmented foil is transferred to the surface of the paper using a heated die and pressure. This technique gives a reflective glossy or matte effect and is used for luxury and premium materials.</p>
      <p className="text-lg 2xl:text-2xl my-7">Characteristics of foil stamping:</p>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Glossy or matte effect - most common in gold, silver, copper and various other colors.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">High precision &mdash; enables sharp details and fine lines.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Visual premium experience &mdash; the foil reflects light, giving an elegant look.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Can be combined with embossing for added dimension.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FoilStamping;
