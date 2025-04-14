import { motion } from "framer-motion";
import TextBlock from "./TextBlock";

const TextInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className="bg-black text-white border border-gray-700 rounded-lg p-6 my-20 mx-1 lg:mx-3"
    >
      <h2 className="text-lg lg:text-3xl 2xl:text-4xl font-normal">Print Finishing Techniques</h2>
      <hr className="border-gray-600 my-2" />
      <div className="space-y-2">
        <p className="text-gray-100 text-2xl text-justify">
            In addition to the printing itself, special effects can be added to the labels, which give the packaging an exclusive and
            more striking look. The most commonly used techniques are dry stamp, foil stamping and UV varnish, and they are
            especially popular with luxury packaging for alcoholic beverages - wine and beer labels, labels for spirits such as
            whiskey, cognac, gin, vodka, liqueur, tequila and brandy, but also for luxury cosmetic products. They can also be
            applied to any other product whose brand wants to make a strong impression.
        </p>
        <p className="text-gray-100 text-2xl text-justify">
            If you want to have some of these effects on your packaging, I will provide you with expert suggestions for their ideal
            positioning and technically prepare the files for realization in the printing house.
        </p>
      </div>
    </motion.div>
  );
};

export default TextInfo;
