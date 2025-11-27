import Link from "next/link";
import React, { useState } from "react";

export default function AnimatedLink() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href="#"
      className="relative bg-white p-2 rounded-2xl flex items-center justify-around gap-6 pr-5 text-sm md:text-base overflow-hidden group transition-all duration-500 md:mt-15 mt-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered
          ? "0 20px 60px rgba(141, 209, 186, 0.4)"
          : "0 10px 30px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Border Reveal Effect - Animated Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ borderRadius: "1rem" }}
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="16"
          ry="16"
          fill="none"
          stroke="#8DD1BA"
          strokeWidth="5"
          strokeDasharray="1000"
          strokeDashoffset={isHovered ? "0" : "1000"}
          style={{
            transition: "stroke-dashoffset 0.3s ease-in-out",
          }}
        />
      </svg>

      {/* Arrow icon with rotation and scale */}
      <div className="relative z-10">
        <div className="bg-[#8DD1BA] w-12 h-12 rounded-xl p-3 flex items-center justify-center transition-all duration-500">
          <img
            src="/assets/arrow-right.svg"
            className={`${
              isHovered ? "rotate-0" : "rotate-45"
            } transition-all duration-300 w-5`}
            alt=""
          />
        </div>

        
      </div>

      {/* Text with slide animation */}
      <span
        className="relative font-medium transition-all duration-300 z-10"
        style={{
          fontFamily: "Poppins",
          transform: isHovered ? "translateX(6px)" : "translateX(0px)",
          color: isHovered ? "#2D2D2D" : "#4D4D4D",
          // fontWeight: isHovered ? "600" : "500",
        }}
      >
        Plan vandaag nog een consult met Rutger
      </span>

      {/* Shimmer effect */}
      <div
        className="absolute inset-0 bg-linear-to-r from-[white] via-[white] to-transparent transition-transform duration-1000 pointer-events-none rounded-2xl"
        style={{
          transform: isHovered
            ? "translateX(110%) skewX(-15deg)"
            : "translateX(-100%) skewX(-15deg)",
        }}
      />

      {/* Corner accent reveals */}
      <div
        className="absolute top-0 right-0 h-20 bg-[#82c71324] rounded-2xl transition-all duration-300"
        style={{
          width: isHovered ? "100%" : "0%",
        }}
      />
    </Link>
  );
}
