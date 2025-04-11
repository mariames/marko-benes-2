"use client";
import React, { useState, useEffect } from 'react';
import './MouseTrail.css';

const MouseTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const newCircle = {
        x: event.clientX,
        y: event.clientY,
        id: Date.now(),
      };
      setTrail((prevTrail) => [...prevTrail, newCircle]);

      setTimeout(() => {
        setTrail((prevTrail) =>
          prevTrail.filter((circle) => circle.id !== newCircle.id)
        );
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="trail-container">
      {trail.map((circle) => (
        <div
          key={circle.id}
          className="circle-wrapper"
          style={{
            left: `${circle.x - 20}px`,
            top: `${circle.y - 20}px`,
          }}
        >
          <div className="inner-circle" />
          <div className="outer-circle" />
        </div>
      ))}
    </div>
  );
};

export default MouseTrail;
