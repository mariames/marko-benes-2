import { motion } from "framer-motion";
import TextBlock from "./TextBlock";
import Image from "next/image";

const PostersPrintTechnique: React.FC = () => {
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
            Effects such as dry stamp, folio printing and UV varnish add elegance and a premium effect to printed materials. These effects are mainly used for luxurious materials such as business cards, invitations or promotional materials to emphasize the design, provide a luxurious touch and leave a strong impression.
        </p>
        <p className="text-gray-100 text-2xl text-justify">
            If you want to apply any of these effects I will be happy to help you with suggestions and advice on how and in what way it would be appropriate to apply it to your design.
        </p>
      </div>
      <div className=" grid grid-cols-1 xl:grid-cols-3 mt-10 space-x-5">
        <Image src="/service-section/PostersAndFlyers/print_finishing_techniques/dry_stamp_embossing_debossing_busuness_card_invitation.jpg" alt="Foil stamping" className="w-full h-auto rounded-lg" width={1400} height={972} />
        <Image src="/service-section/PostersAndFlyers/print_finishing_techniques/hot_foil_stamping_foil_blocking_menu_flyer_design.jpg" alt="Foil stamping" className="w-full h-auto rounded-lg" width={1400} height={972} />
        <Image src="/service-section/PostersAndFlyers/print_finishing_techniques/uv_varnish_uv_coating_spot_flyer_design.jpg" alt="Foil stamping" className="w-full h-auto rounded-lg" width={1400} height={972} />
      </div>
    </motion.div>
  );
};

export default PostersPrintTechnique;
