"use client";
import React from "react";
import { HoverBorderGradient } from "./HoverBorderGradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex"
      onClick={() => {
        window.open("https://assets.kodego.ph/public/isa/2300qL21pGeNLaHHWvF3XwYsWMrlmd2dovfOqbfV.pdf")
      }}
    >
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>View Certificate</span>  
      </HoverBorderGradient>
    </div>
  );
}

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};
