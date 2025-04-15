import { motion } from "framer-motion";
interface CollaborationStep {
  title: string;
  description: React.ReactNode; // Change from string to ReactNode to allow JSX
}

export const SummaryCard: React.FC<CollaborationStep> = ({ title, description }) => {
    return (
      <div className="flex justify-center">
        <div className="4xl:max-w-[2080px] w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
            }}
            viewport={{ once: true }}
            className="bg-[#101010] text-white border border-gray-700 rounded-lg p-6 my-20 mx-1 lg:mx-3 4xl:w-full "
          >
            <p className="text-lg lg:text-3xl 2xl:text-4xl font-normal">{title}</p>
            <hr className="border-gray-600 my-2" />
            {description}
          </motion.div>
        </div>
      </div>
    );
  };