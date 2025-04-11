import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

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
      className="bg-black text-white border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-lg lg:text-3xl 2xl:text-4xl font-normal">Dry stamp</h2>
      <hr className="border-gray-600 my-2" />
      <p className="text-lg 2xl:text-2xl text-justify">
        Dry stamp is a technique of embossing a design into paper or cardboard without using ink or foil, which results in a
        relief effect. This technique is often used to add a refined and luxurious look to printed materials.
      </p>
      <p className="text-lg 2xl:text-2xl my-7">Characteristics of dry stamp:</p>
      <div className="space-y-4">
        {/* List item 1 */}
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-6 h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-gray-300 2xl:text-2xl">
            Embossing &mdash; the design is raised above the surface of the paper, Debossing &mdash; the design is pressed below the surface of the paper.
          </p>
        </div>

        {/* List item 2 */}
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-6 h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-gray-300 2xl:text-2xl">
            No ink or foil &mdash; only pressure is applied using a specially crafted die.
          </p>
        </div>

        {/* List item 3 */}
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-6 h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-gray-300 2xl:text-2xl">
            Visual effect &mdash; gives 3D dimensionality and premium look.
          </p>
        </div>

        {/* List item 4 */}
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-6 h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-gray-300 2xl:text-2xl">
            Best effect on thicker paper &mdash; softer and thicker papers or special art papers give the most pronounced effect.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default DryStamp;
