import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWithServices from "@/components/NavbarWithServices";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Marko Benis",
  description: "Designer",
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
