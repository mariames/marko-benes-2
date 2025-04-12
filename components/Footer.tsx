import Image from "next/image";
import ContactSection from "./ContactSection";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-4 border-t border-gray-500">
      <div className="flex justify-between items-center container mx-auto px-4">
        {/* Left Side: Copyright Text */}
        <div>
          <Image
            src="/Marko-Benis-logo.svg"
            width={200}
            height={50} 
            className="object-contain ml-1 w-52 h-auto"
            alt="Marko Benis" />
            {/** 
            <p className="text-sm text-slate-900">
              &copy; 2025 Marijana Vujovic | marijanavujovic92@gmail.com
            </p>
            */}
        </div>


        {/* Right Side: Contact Icons */}
        <div className="flex space-x-4">
          <ContactSection />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
