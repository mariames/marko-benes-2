import Image from "next/image";
import ContactSection from "./ContactSection";
import { FaDribbble, FaLinkedin, FaBehance } from "react-icons/fa";

const socialLinks = [
  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/marko-beni%C5%A1-a4554ab6/" },
  { icon: <FaBehance size={24} />, href: "https://www.behance.net/markobenis" },
  { icon: <FaDribbble size={24} />, href: "https://dribbble.com/maremb" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-4 border-t border-gray-500 4xl:pb-20">
      <div className="flex flex-col lg:flex-row justify-around items-center container mx-auto px-4">
        {/* Left Side: Logo */}
        <div>
          {/** 
          <Image
            src="/Marko-Benis-logo.svg"
            width={200}
            height={50} 
            className="object-contain ml-1 w-52 h-auto"
            alt="Marko Benis" />
            */}
            <span className="font-bold">MARIJANA VUJOVIC</span>
        </div>
        
        {/* Socials Section 
          
            <div className="grid grid-cols-3 gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          */}


        {/* Right Side: Email */}
        
          <a
              href="mailto:marko@benis.studio"
              className="text-lg font-semibold mt-2 hover:text-gray-200 4xl:text-2xl"
            >
              marijanadev@gmail.com
            </a>
        
      </div>
    </footer>
  );
};

export default Footer;
