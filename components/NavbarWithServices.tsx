"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
                            src="/Marko Benis_logo_beli.svg"
                            width={200}
                            height={50} 
                            className=" object-contain ml-1 w-20 h-auto"
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
                                        fill="currentColor"
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
                                        stroke="currentColor"
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
                    <ul className="items-end justify-end space-y-4 md:flex md:space-x-6 md:space-y-0">
                        <li className="relative" ref={dropdownRef}>
                        <motion.div
                            key={"services"}
                            className="relative"
                            whileHover="hover" >
                            <button
                                onClick={() => setBlogOpen(!blogOpen)}
                                className="flex items-center text-gray-100"
                            >
                                Services
                            </button>
                            <motion.div
                                className="absolute bottom-0 top-8 left-0 h-[2px] bg-white"
                                initial={{ width: "0%" }}
                                variants={{
                                hover: { width: "100%", transition: { duration: 0.4 } },
                                }}
                            />
                            </motion.div>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    blogOpen ? "max-h-96 w-80 mt-5 -ml-4 p-1" : "max-h-0"
                                } md:absolute md:left-0 md:z-10 md:min-w-[16rem] md:max-w-[24rem] md:w-auto`}
                            >
                                <ul
                                    className={`bg-black shadow-lg z-50 ${
                                        blogOpen ? "opacity-100" : "opacity-0"
                                    } transition-opacity duration-300`}
                                >
                                    <li>
                                        <Link
                                            href="/services/labels_and_packaging"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-100"
                                        >
                                            Labels &amp; Packaging
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/posters_and_flyers"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-100"
                                        >
                                            Posters &amp; Flyers
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/billboards_banners_roll_ups"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-100"
                                        >
                                            Billboards, Banners & Roll Ups
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/vehicle_branding"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-100"
                                        >
                                            Vehicle Branding
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/trade_promo_booths"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-100"
                                        >
                                            Trade Promo Booths
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/promo_shelves"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-100"
                                        >
                                            Promo Shelves
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/logo"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-100"
                                        >
                                            Logo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/t-shirt_design"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-gray-100"
                                        >
                                            T-Shirt design
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/services/video_design"
                                            onClick={handleItemClick}
                                            className="block px-3 py-2 text-white"
                                        >
                                            Video Design
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="text-white hover:text-gray-100">
                            <motion.div
                                key={"services"}
                                className="relative"
                                whileHover="hover" >
                                <Link href="/portfolio">
                                    Portfolio
                                </Link>
                            <motion.div
                                className="absolute bottom-0 top-8 left-0 h-[2px] bg-white"
                                initial={{ width: "0%" }}
                                variants={{
                                hover: { width: "100%", transition: { duration: 0.4 } },
                                }}
                            />
                            </motion.div>
                        </li>
                        <li className="text-white hover:text-gray-100">
                            <motion.div
                                key={"services"}
                                className="relative"
                                whileHover="hover" >
                                    <Link href="/about">
                                        About
                                    </Link>
                                <motion.div
                                className="absolute bottom-0 top-8 left-0 h-[2px] bg-white"
                                initial={{ width: "0%" }}
                                variants={{
                                hover: { width: "100%", transition: { duration: 0.4 } },
                                }}
                            />
                            </motion.div>
                        </li>
                        <li className="text-white hover:text-gray-100">
                            <motion.div
                                key={"services"}
                                className="relative"
                                whileHover="hover" >
                                <Link href="/collaborate">
                                    Collaborate
                                </Link>
                            <motion.div
                                className="absolute bottom-0 top-8 left-0 h-[2px] bg-white"
                                initial={{ width: "0%" }}
                                variants={{
                                hover: { width: "100%", transition: { duration: 0.4 } },
                                }}
                            />
                            </motion.div>
                        </li>
                        <li className="text-white hover:text-gray-100">
                            <motion.div
                                key={"services"}
                                className="relative"
                                whileHover="hover" >
                                <Link href="/contact">
                                    Contact
                                </Link>
                            <motion.div
                                className="absolute bottom-0 top-8 left-0 h-[2px] bg-white"
                                initial={{ width: "0%" }}
                                variants={{
                                hover: { width: "100%", transition: { duration: 0.4 } },
                                }}
                            />
                            </motion.div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
