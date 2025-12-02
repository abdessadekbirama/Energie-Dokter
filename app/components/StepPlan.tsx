"use client";
import { useState } from "react";
import Plan from "./Plan";
import { planSteps } from "../data/planSteps";

export default function StepPlan() {
  const [active, setActive] = useState("Onze aanpak");

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActive(e.currentTarget.innerText);
  };

  const NavLink = ({ text }: { text: string }) => (
    <button
      onClick={toggleActive}
      className={`font-semibold py-4 px-7 rounded-2xl hover:cursor-pointer transition-all duration-300 text-nowrap w-full md:w-fit relative overflow-hidden ${
        active === text
          ? "bg-[#81C713] text-white"
          : "text-[#254055] bg-white hover:bg-[#82c71324]"
      }`}
    >
      <span className="relative z-10">{text}</span>
    </button>
  );

  return (
    <div
      className="bg-[linear-gradient(to_top,#FFFFFF,#F2F2CA80,#E5F0BFBF,#D0F0E7BF)] md:p-10 p-5"
      style={{ fontFamily: "Poppins" }}
    >
      <nav className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
        <NavLink text="Onze aanpak" />
        <NavLink text="Energielabels" />
        <NavLink text="GACS" />
        <NavLink text="Informatieplicht" />
        <NavLink text="WKO-beheer" />
        <NavLink text="Trainingen" />
      </nav>
      <Plan active={active} />
    </div>
  );
}
