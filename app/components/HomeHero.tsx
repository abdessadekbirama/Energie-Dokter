"use client";
import Link from "next/link";
import BrandList from "./BrandList";
import AnimatedLink from "./AnimatedLink";

export default function HomeHero() {
  return (
    <div className="w-full h-screen bg-[url('/assets/HomeHeroBg.svg')] bg-cover bg-center px-5">
    {/* <div className="w-full h-screen bg-[url('/assets/HomeHeroBg.svg')] bg-cover bg-center px-5 animate-slow-pan bg-rotate"> */}
      <div className="m-auto md:pt-44 pt-40 flex flex-col items-center ">
        <h1
          style={{ fontFamily: "Poppins" }}
          className="font-black text-[#254055] md:text-5xl text-3xl text-center "
        >
          Tijd voor een check-up door de <br />
          <span className="text-[#81C713]">Energie Dokter</span>
        </h1>
        <div className="text-center mt-10">
          <p
            className="text-[#4D4D4D] text-sm md:text-[16px]"
            style={{ fontFamily: "Poppins" }}
          >
            Ontdek hoe uw pand beter kan presteren — technisch, ﬁnancieel én
            duurzaam. Wij maken inzichtelijk
          </p>
          <p
            className="text-[#4D4D4D] text-sm md:text-[16px] mt-2"
            style={{ fontFamily: "Poppins" }}
          >
            waar de kansen liggen en begeleiden u stap voor stap naar een
            toekomstbestendig gebouw.
          </p>
        </div>
        <AnimatedLink />

        <p
          className="text-[#254055] font-semibold mt-5 text-sm text-center"
          style={{ fontFamily: "Poppins" }}
        >
          Geen verplichtingen, wel inzicht in de mogelijkheden voor uw gebouw
        </p>
      </div>
    </div>
  );
}
