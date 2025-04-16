import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

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
        {/* List item 1 */}
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-6 h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-gray-300 2xl:text-2xl">
            Glossy or matte effect &mdash; can be high gloss or matte finish.
          </p>
        </div>

        {/* List item 2 */}
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-6 h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-gray-300 2xl:text-2xl">
            Tactile and visual feeling &mdash; parts with UV varnish are smoother and reflect light.
          </p>
        </div>

        {/* List item 3 */}
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-6 h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-gray-300 2xl:text-2xl">
            Contrast with matte paper &mdash; especially effective on matte lamination.
          </p>
        </div>

        {/* List item 4 */}
        <div className="flex items-start space-x-3">
          <div className="pt-1">
            <FaCheckCircle className="text-[#e5dfd3] w-6 h-6 2xl:w-8 2xl:h-8" />
          </div>
          <p className="text-gray-300 2xl:text-2xl">
            Abrasion protection &mdash; adds a layer of resistance to scratches and moisture.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default UvVarnish;
