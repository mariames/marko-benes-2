import { motion } from "framer-motion";

const TextInfo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className=" text-white rounded-lg p-6 my-1  lg:my-20 mx-1 lg:mx-3"
    >
      <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold">Print Finishing Techniques</p>
      <hr className="border-gray-600 my-2" />
      <div className="space-y-2">
        <p className="text-gray-100 text-lg 2xl:text-2xl text-left lg:text-justify">
            In addition to the printing itself, special effects can be added to the labels, which give the packaging an exclusive and
            more striking look. The most commonly used techniques are dry stamp, foil stamping and UV varnish, and they are
            especially popular with luxury packaging for alcoholic beverages - wine and beer labels, labels for spirits such as
            whiskey, cognac, gin, vodka, liqueur, tequila and brandy, but also for luxury cosmetic products. They can also be
            applied to any other product whose brand wants to make a strong impression.
        </p>
        <p className="text-gray-100 text-lg 2xl:text-2xl text-left lg:text-justify">
            If you want to have some of these effects on your packaging, I will provide you with expert suggestions for their ideal
            positioning and technically prepare the files for realization in the printing house.
        </p>
      </div>
    </motion.div>
  );
};

export default TextInfo;
