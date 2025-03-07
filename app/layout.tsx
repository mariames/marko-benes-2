import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWithServices from "@/components/NavbarWithServices";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marko Benis",
  description: "Marko Benis is a versatile graphic designer specializing in visual communication, branding, and print design. With expertise in Adobe Illustrator, Photoshop, InDesign, After Effects, and Premiere Pro, Marko creates stunning designs for marketing, advertising, video, and large format printing. Offering prepress and print production services, we ensure your brand stands out across all platforms.",
  keywords: "graphic design, graphic designer, visual communication, visual identity, branding, print design, marketing, marketing design, print production, advertising design, prepress, large format printing, print-ready files, social media marketing, video design, creative concepting, adobe illustrator, adobe photoshop, indesign, after effects, premiere pro"
};


export const meta = {
  home: {
    title: "Home - Marko Benis",
    description: "Marko Benis is a versatile graphic designer specializing in visual communication, branding, and print design. With expertise in Adobe Illustrator, Photoshop, InDesign, After Effects, and Premiere Pro, Marko creates stunning designs for marketing, advertising, video, and large format printing. Offering prepress and print production services, we ensure your brand stands out across all platforms.",
    keywords: "graphic design, graphic designer, visual communication, visual identity, branding, print design, marketing, marketing design, print production, advertising design, prepress, large format printing, print-ready files, social media marketing, video design, creative concepting, adobe illustrator, adobe photoshop, indesign, after effects, premiere pro",
  },
  about: {
    title: "About me - Marko Benis",
    description: "Learn more about our company and team.",
    keywords: "about us, team, company info",
  },
  services: {
    title: "Our Services - Your Website",
    description: "Explore our wide range of professional services.",
    keywords: "services, business solutions, professional help",
  },
  contact: {
    title: "Contact Us - Your Website",
    description: "Get in touch with us for any inquiries.",
    keywords: "contact, email, phone, customer support",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" sizes="16" />
      </head>
      <body className={`${inter.className} poppins-font bg-black`}>
        <NavbarWithServices />
        {children}
      </body>
    </html>
  );
}
