import React from "react";
import "./AnimatedButton.css";
import Link from "next/link";

interface AnimatedButtonProps {
  text: string;
  link: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ text, link }) => {
  return (
    <div className="button-container">
      <a href={link} className="main-button">
        {text}
      </a>
      <Link href={link} className="icon-button">
        <span className="arrow">➔</span>
      </Link>
    </div>
  );
};

export default AnimatedButton;
