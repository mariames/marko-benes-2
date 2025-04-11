import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; 

const DryStamp: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className="bg-black text-white border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-lg lg:text-3xl 2xl:text-4xl font-normal">Dry stamp</h2>
      <hr className="border-gray-600 my-2" />
      <p>Dry stamp is a technique of embossing a design into paper or cardboard without using ink or foil, which results in a
      relief effect. This technique is often used to add a refined and luxurious look to printed materials.</p>
      <p>Characteristics of dry stamp:</p>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Embossing – the design is raised above the surface of the paper, Debossing – the design is pressed below the surface of the paper.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">No ink or foil – only pressure is applied using a specially crafted die.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Visual effect – gives 3D dimensionality and premium look.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Best effect on thicker paper – softer and thicker papers or special art papers give the most pronounced
          effect</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DryStamp;
