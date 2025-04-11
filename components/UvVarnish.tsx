import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa"; 

const UvVarnish: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className="bg-black text-white border border-gray-700 rounded-lg p-6"
    >
      <h2 className="text-lg lg:text-3xl 2xl:text-4xl font-normal">UV varnish</h2>
      <hr className="border-gray-600 my-2" />
      <p className="text-lg 2xl:text-2xl text-justify">UV varnish or UV coating is a surface finishing technique in which a transparent varnish is applied to certain parts of the printed surface and dried using ultraviolet (UV) light. This technique is used to emphasize slightly raised design elements and add a premium visual and tactile effect.</p>
      <p className="text-lg 2xl:text-2xl my-7">Characteristics of UV varnish:</p>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Glossy or matte effect &mdash; can be high gloss or matte finish.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Tactile and visual feeling &mdash; parts with UV varnish are smoother and reflect light.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Contrast with matte paper &mdash; especially effective on matte lamination.</p>
        </div>
        <div className="flex items-center space-x-2">
          <FaCheckCircle className="text-[#e5dfd3]" />
          <p className="text-gray-300 2xl:text-2xl">Abrasion Protection &mdash; adds a layer of resistance to scratches and moisture.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default UvVarnish;
