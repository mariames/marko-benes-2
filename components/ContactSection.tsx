"use client";
import React from "react";
import { Mail } from "lucide-react";




const ContactSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-10 px-6 ">
      <div className="max-w-3xl mx-auto">
        
        <div className="bg-[#101010] border border-gray-700 rounded-lg p-6">
          {/* Email Section */}
          <div className="mb-6">
            <span className="text-gray-400 flex items-center">
              <Mail size={20} className="mr-2" /> Email:
            </span>
            <a
              href="mailto:marko@benis.studio"
              className="text-lg font-semibold mt-2 hover:text-gray-200"
            >
              marko@benis.studio
            </a>
            <hr className="border-gray-600 mt-2" />
          </div>



        </div>
      </div>
    </section>
  );
};

export default ContactSection;
