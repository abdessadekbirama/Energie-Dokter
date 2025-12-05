"use client";

import { useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle";
import Carousel from "./Carousel";
import AnimatedLink from "./AnimatedLink";

// Sample blog card data

// Main Blog Component
export default function Blog() {
  return (
    <div
      className="my-40 flex flex-col items-center"
      style={{ fontFamily: "Poppins" }}
    >
      <SectionTitle
        title="Blog"
        span={
          <div className="md:text-4xl text-2xl font-extrabold text-center">
            <span className="text-[#254055]">
              Inzichten, <span className="text-[#81C713]">nieuws </span>
              &<br />
              energietips
            </span>
          </div>
        }
      />
      <div className="mt-5"></div>
      <Carousel />
      <div className="w-fit m-auto">
        <AnimatedLink
          text="Zie alles"
          bg="#63A0AC"
          arrowColor="#417A85"
          arrowBg="white"
          textColor="white"
          borderColor="transparent"
          shimmerColor="transparent"
          fillBg="#266d78b4"
          href="/blogs"
          textSize="18px"
        />
        <span className="bg-[#266d78b4]"></span>
      </div>
    </div>
  );
}
