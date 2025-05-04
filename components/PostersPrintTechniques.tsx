import { motion } from "framer-motion";
import Image from "next/image";

const PostersPrintTechnique: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }}
      viewport={{ once: true }}
      className="bg-black text-white rounded-lg p-6 my-20 mx-1 lg:mx-3"
    >
      <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold">Print Finishing Techniques</h2>
      <hr className="border-gray-600 my-2" />
      <div className="space-y-2">
        <p className="text-gray-100 text-lg 2xl:text-2xl text-left lg:text-justify">
            Effects such as dry stamp, folio printing and UV varnish add elegance and a premium effect to printed materials. These effects are mainly used for luxurious materials such as business cards, invitations or promotional materials to emphasize the design, provide a luxurious touch and leave a strong impression.
        </p>
        <p className="text-gray-100 text-lg 2xl:text-2xl text-left lg:text-justify">
            If you want to apply any of these effects I will be happy to help you with suggestions and advice on how and in what way it would be appropriate to apply it to your design.
        </p>
      </div>
      {/** 
      <div className=" grid grid-cols-1 xl:grid-cols-3 mt-10 space-x-5">
        <Image src="/service-section/PostersAndFlyers/print_finishing_techniques/dry_stamp_embossing_debossing_busuness_card_invitation.jpg" alt="Foil stamping" className="w-full h-auto rounded-lg" width={1400} height={972} />
        <Image src="/service-section/PostersAndFlyers/print_finishing_techniques/hot_foil_stamping_foil_blocking_menu_flyer_design.jpg" alt="Foil stamping" className="w-full h-auto rounded-lg" width={1400} height={972} />
        <Image src="/service-section/PostersAndFlyers/print_finishing_techniques/uv_varnish_uv_coating_spot_flyer_design.jpg" alt="Foil stamping" className="w-full h-auto rounded-lg" width={1400} height={972} />
      </div>
      */}
      <div className="bg-black py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {/* First Image */}
          <div className="relative group">
    
              <img
                src="/service-section/PostersAndFlyers/print_finishing_techniques/dry_stamp_embossing_debossing_busuness_card_invitation.jpg"
                srcSet="
                /sm/service-section/PostersAndFlyers/print_finishing_techniques/dry_stamp_embossing_debossing_busuness_card_invitation.jpg 960w,
                   /service-section/PostersAndFlyers/print_finishing_techniques/dry_stamp_embossing_debossing_busuness_card_invitation.jpg 3840w
                "
                sizes="(max-width: 640px) 100vw, 80vw"
                alt="Dry Stamp Embossing"
                className="absolute inset-0 w-full h-full object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-lg"
                loading="lazy"
              />

            {/** 
            <Image 
              src="/service-section/PostersAndFlyers/print_finishing_techniques/dry_stamp_embossing_debossing_busuness_card_invitation.jpg" 
              alt="Dry Stamp Embossing" 
              className="w-full h-auto rounded-lg transition-transform transform group-hover:scale-105 group-hover:shadow-lg" 
              width={1400} 
              height={972} 
            />
            */}
          </div>

          {/* Second Image */}
          <div className="relative group">
            {/** 
            <Image 
              src="/service-section/PostersAndFlyers/print_finishing_techniques/hot_foil_stamping_foil_blocking_menu_flyer_design.jpg" 
              alt="Foil Stamping" 
              className="w-full h-auto rounded-lg transition-transform transform group-hover:scale-105 group-hover:shadow-lg" 
              width={1400} 
              height={972} 
            />
            */}
              <img
                src="/service-section/PostersAndFlyers/print_finishing_techniques/hot_foil_stamping_foil_blocking_menu_flyer_design.jpg"
                srcSet="
                /sm/service-section/PostersAndFlyers/print_finishing_techniques/hot_foil_stamping_foil_blocking_menu_flyer_design.jpg 960w,
                  /service-section/PostersAndFlyers/print_finishing_techniques/hot_foil_stamping_foil_blocking_menu_flyer_design.jpg 3840w
                "
                sizes="(max-width: 640px) 100vw, 80vw"
                alt="Foil Stamping"
                className="absolute inset-0 w-full h-full object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-lg"
                loading="lazy"
              />
          </div>

          {/* Third Image */}
          <div className="relative group">
            {/** 
            <Image 
              src="/service-section/PostersAndFlyers/print_finishing_techniques/uv_varnish_uv_coating_spot_flyer_design.jpg" 
              alt="UV Varnish Coating" 
              className="w-full h-auto rounded-lg transition-transform transform group-hover:scale-105 group-hover:shadow-lg" 
              width={1400} 
              height={972} 
            />
            */}
              <img
                src="/service-section/PostersAndFlyers/print_finishing_techniques/uv_varnish_uv_coating_spot_flyer_design.jpg"
                srcSet="
                /sm/service-section/PostersAndFlyers/print_finishing_techniques/uv_varnish_uv_coating_spot_flyer_design.jpg 960w,
                   /service-section/PostersAndFlyers/print_finishing_techniques/uv_varnish_uv_coating_spot_flyer_design.jpg 3840w
                "
                sizes="(max-width: 640px) 100vw, 80vw"
                alt="UV Varnish Coating"
                className="absolute inset-0 w-full h-full object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-lg"
                loading="lazy"
              />
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default PostersPrintTechnique;
