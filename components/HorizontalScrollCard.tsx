"use client";
import React, { useRef } from "react";
import {motion, useScroll, useTransform } from "framer-motion";
import ImageContainer from "./ImageContainer/ImageContainer";
import "./horizontalScroll.css";

const HorizontalScrollCard = () => {

    const targetRef = useRef(null);

    const {scrollYProgress} = useScroll({target: targetRef});

    const x = useTransform(scrollYProgress, [0, 1], ["100%", "-55%"]);

    return <div className="carousel" ref={targetRef}>
        <div className="backgroundText">SERVICES</div>
        <div className="contentContainer">
        <motion.div className="images" style={{ x }}>
            <div className="imageItem">
                <div className="card">
                    <p className="card-title">LABELS & PACKAGING</p>
                    <img
                        src="/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg"
                        alt="la la"
                        className="image"
                    />
                </div>
            </div>
            <div className="imageItem">
                <div className="card">
                    <p className="card-title">BILLBOARDS & BANNERS</p>
                    <img
                        src="/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg"
                        alt="la la"
                        className="image"
                    />
                </div>
            </div>
            <div className="imageItem">
                <div className="card">
                <p className="card-title">PROMO SHELVES</p>
                    <img
                        src="/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg"
                        alt="la la"
                        className="image"
                    />
                </div>
            </div>
            <div className="imageItem">
                <div className="card">
                <p className="card-title">VEHICLE BRANDING</p>
                    <img
                        src="/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg"
                        alt="la la"
                        className="image"
                    />
                </div>
            </div>
        </motion.div>

        </div>
    </div>;
};

export default HorizontalScrollCard;