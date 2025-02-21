import React from "react";
import "./AnimatedButton.css";

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
      <a href={link} className="icon-button">
        <span className="arrow">➔</span>
      </a>
    </div>
  );
};

export default AnimatedButton;
