import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; 

const TargetAudienceCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className="bg-black text-white border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-xl font-semibold">Who Hires Me</h2>
      <hr className="border-gray-600 my-2" />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-green-500" />
          <p className="text-gray-300">Start-up companies</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-green-500" />
          <p className="text-gray-300">Marketing agencies and teams</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-green-500" />
          <p className="text-gray-300">Marketing agencies and teams</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-green-500" />
          <p className="text-gray-300">Individuals with a vision</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TargetAudienceCard;
