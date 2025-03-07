import { motion } from "framer-motion";
import { FaCheck, FaCheckCircle } from "react-icons/fa"; 

const TargetAudienceCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className="bg-black text-white border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-lg lg:text-3xl 2xl:text-4xl font-normal">Who Hires Me</h2>
      <hr className="border-gray-600 my-2" />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <FaCheck className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Start-up companies</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheck className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Marketing agencies and teams</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheck className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Companies and entrepreneurs</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheck className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Individuals with a vision</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TargetAudienceCard;
