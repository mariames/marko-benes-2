"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CrossTextEffect from "./CrossTextEffect";

export default function NavbarWithServices() {
    const [navbar, setNavbar] = useState(false);
    const [blogOpen, setBlogOpen] = useState(false);
    const dropdownRef = useRef<HTMLLIElement | null>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setBlogOpen(false);
        }
    };

    const handleItemClick = () => {
        // Close navbar and blog dropdown if open
        setNavbar(false);
        setBlogOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <nav className="w-full bg-transparent shadow z-50">
            <div className="justify-between px-2 mx-auto md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/"  className="flex flex-row">
                            <Image
                            src="/Marko-Benis-logo.svg"
                            width={200}
                            height={50} 
                            className=" object-contain ml-1 w-36 h-auto"
                            alt="Marko Benis" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                                aria-label={navbar ? "Close menu" : "Open menu"}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="#E5E7EB"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="#E5E7EB"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? "block" : "hidden"
                    }`}
                >
                    {/** className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0" */}
                    <ul className="items-end justify-end space-y-4 md:flex md:space-x-6 md:space-y-0 max-md:pl-5">
                        <li className="relative" ref={dropdownRef}>
                        <motion.div
                            key={"services"}
                            className="relative"
                            whileHover="hover"
                            >
                            <button
                                onClick={() => setBlogOpen(!blogOpen)}
                                className="flex items-center tracking-wide"
                            >
                                {Array.from("SERVICES").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    className="text-gray-100"
                                    variants={{
                                    hover: { color: "#ef4444" }, // Tailwind red-500
                                    }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    {letter}
                                </motion.span>
                                ))}
                            </button>
                            <motion.div
                                className="pointer-events-none absolute bottom-0 top-3 left-0 h-[2px] bg-red-500"
                                initial={{ width: "0%" }}
                                variants={{
                                hover: { width: "100%", transition: { duration: 0.4 } },
                                }}
                            />
                        </motion.div>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    blogOpen ? "max-h-96 w-[450px] mt-4  " : "max-h-0"
                                } md:absolute md:left-0 md:z-10 w-[97%] md:min-w-[16rem] md:max-w-[24rem] md:w-auto`}
                            > {/** -ml-2 */}
                                <ul
                                    className={`bg-black shadow-lg z-50 ${
                                        blogOpen ? "opacity-100" : "opacity-0"
                                    } transition-opacity duration-300`}
                                >
                                    <li className="p-2">
                                        <CrossTextEffect text="LABELS&nbsp;&amp;&nbsp;PACKAGING" href="/services/labels_and_packaging" />
                                    </li>
                                    <li className="p-2">
                                        <CrossTextEffect text="POSTERS&nbsp;&amp;&nbsp;FLYERS" href="/services/posters_and_flyers" />
                                    </li>
                                    <li className="p-2">
                                        <CrossTextEffect text="BILLBOARDS,&nbsp;BANNERS&nbsp;&&nbsp;ROLL&nbsp;UPS" href="/services/billboards_banners_roll_ups" />
                                    </li>
                                    <li className="p-2">
                                        <CrossTextEffect text="VEHICLE&nbsp;BRANDING" href="/services/vehicle_branding" />
                                    </li>
                                    <li className="p-2">
                                        <CrossTextEffect text="TRADE&nbsp;PROMO&nbsp;BOOTHS" href="/services/trade_promo_booths" />
                                    </li>
                                    <li className="p-2">
                                        <CrossTextEffect text="PROMO&nbsp;SHELVES" href="/services/promo_shelves" />
                                    </li>
                                    <li className="p-2">
                                        <CrossTextEffect text="LOGO" href="/services/logo" />
                                    </li>
                                    <li className="p-2">
                                        <CrossTextEffect text="T-SHIRT&nbsp;DESIGN" href="/services/t-shirt_design" />
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-white">
                            <CrossTextEffect text="PORTFOLIO" href="/portfolio/" onClick={handleItemClick} />
                        </li>
                        <li className="text-white">
                            <CrossTextEffect text="ABOUT" href="/about/" onClick={handleItemClick} />
                        </li>
                        <li className="text-white">
                            <CrossTextEffect text="COLLABORATE" href="/collaborate/" onClick={handleItemClick} />
                        </li>
                        <li className="text-white">
                            <CrossTextEffect text="CONTACT" href="/contact/" onClick={handleItemClick} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
