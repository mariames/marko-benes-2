import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import LiItem from "./LiItem";

const UvVarnish: React.FC = () => {
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
      <p className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold">UV Varnish</p>
      <hr className="border-gray-600 my-2" />
      <p className="text-lg 2xl:text-2xl text-left lg:text-justify">
        UV varnish or UV coating is a surface finishing technique in which a transparent varnish is applied to certain parts of the printed surface and dried using ultraviolet (UV) light. This technique is used to emphasize slightly raised design elements and add a premium visual and tactile effect.
      </p>
      <p className="text-lg 2xl:text-2xl my-7">Characteristics of UV varnish:</p>

      <div className="space-y-4">
        
        <LiItem>Glossy or matte effect &mdash; can be high gloss or matte finish.</LiItem>
        <LiItem>Tactile and visual feeling &mdash; parts with UV varnish are smoother and reflect light.</LiItem>
        <LiItem>Contrast with matte paper &mdash; especially effective on matte lamination.</LiItem>
        <LiItem>Abrasion protection &mdash; adds a layer of resistance to scratches and moisture.</LiItem>
        
      </div>
    </motion.div>
  );
};

export default UvVarnish;
