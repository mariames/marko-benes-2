"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip"; 
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:"/template2.jpg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:"/template2.jpg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:"/template.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:"/template2.jpg",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:"/template.jpg",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:"/template2.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
