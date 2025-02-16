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
        <div className="contentContainer">
            <motion.div className="images" style={{x}}>
                <div className="imageItem">
                    <ImageContainer 
                        imageSource="/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg" 
                        description="la la" />
                </div>
                <div className="imageItem">
                    <ImageContainer 
                        imageSource="/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg" 
                        description="la la" />
                </div>
                <div className="imageItem">
                    <ImageContainer 
                        imageSource="/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg" 
                        description="la la" />
                </div>
                <div className="imageItem">
                    <ImageContainer 
                        imageSource="/portfolio/billboards-banners-roll-ups/1_billboards-design.jpg" 
                        description="la la" />
                </div>
            </motion.div>
        </div>
    </div>;
};

export default HorizontalScrollCard;