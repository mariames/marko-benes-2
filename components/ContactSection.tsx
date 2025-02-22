"use client";
import React from "react";
import { Mail } from "lucide-react";
import { FaDribbble, FaLinkedin, FaBehance } from "react-icons/fa";

const socialLinks = [
  { icon: <FaDribbble size={24} />, href: "https://dribbble.com/maremb" },
  { icon: <FaBehance size={24} />, href: "https://www.behance.net/markobenis" },
  { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/marko-beni%C5%A1-a4554ab6/" },
];

const ContactSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        {/** <h2 className="text-3xl font-bold mb-6">Contact Me</h2> */}
        <div className="bg-[#101010] border border-gray-700 rounded-lg p-6">
          {/* Email Section */}
          <div className="mb-6">
            <span className="text-gray-400 flex items-center">
              <Mail size={20} className="mr-2" /> Email:
            </span>
            <p className="text-lg font-semibold mt-2">markobenis@gmail.com</p>
            <hr className="border-gray-600 mt-2" />
          </div>

          {/* Socials Section */}
          <div>
            <span className="text-gray-400">Socials:</span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
