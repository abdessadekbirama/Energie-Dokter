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
      className="mb-80 bg-[linear-gradient(to_top,#FFFFFF,#F2F2CA80,#E5F0BFBF,#D0F0E7BF)] md:p-10 p-5"
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
      <Plan
        title={
          <span className="text-[#254055] font-extrabold text-3xl">
            {active === "Onze aanpak" ? (
              <>
                Zo <span className="text-[#81C713]">verduurzamen</span> we uw
                gebouw
              </>
            ) : active === "Energielabels" ? (
              <>
                Zo komt u tot een{" "}
                <span className="text-[#81C713]">energielabel</span>
              </>
            ) : active === "GACS" ? (
              <>
                Onze <span className="text-[#81C713]">energielabel</span> bij
                GACS
              </>
            ) : active === "Informatieplicht" ? (
              <>
                Onze <span className="text-[#81C713]">aanpak</span> bij
                informatieplicht
              </>
            ) : active === "WKO-beheer" ? (
              <>
                Onze <span className="text-[#81C713]">aanpak</span> bij
                WKO-beheer
              </>
            ) : active === "Trainingen" ? (
              <>
                Onze <span className="text-[#81C713]">aanpak</span> bij
                trainingen
              </>
            ) : null}
          </span>
        }
        subtitle={
          <div className="text-[#4D4D4D] max-w-1/2">
            {active === "Onze aanpak"
              ? "Van aanvraag tot nazorg: wij begeleiden u stap voor stap"
              : active === "Energielabels"
              ? "Van aanvraag tot ontvangst: wij begeleiden u stap voor stap"
              : active === "GACS"
              ? "Bij Energie Dokter zorgen we dat uw pand of woning niet alleen voldoet aan de regels, maar ook maximaal profiteert van energiebesparende maatregelen. Onze vierstappen-aanpak maakt verduurzaming inzichtelijk en haalbaar:"
              : active === "Informatieplicht"
              ? "Bij Energie Dokter maken we het naleven van de informatieplicht eenvoudig en overzichtelijk. Met onze vierstappen-aanpak weet u precies wat er moet gebeuren, bent u verzekerd van correcte resultaten, en haalt u maximaal inzicht en waarde uit uw energiebeheer."
              : active === "WKO-beheer"
              ? "Bij Energie Dokter zorgen we dat uw WKO-installatie efficiënt, betrouwbaar en toekomstbestendig werkt. Met onze vierstappen-aanpak krijgt u grip op prestaties, besparing en onderhoud:"
              : active === "Trainingen"
              ? "Bij Energie Dokter helpen we professionals en bedrijven om kennis en vaardigheden op het gebied van energieadvies en duurzaam bouwen te ontwikkelen. Onze vierstappen-aanpak maakt leren praktisch, efficiënt en direct toepasbaar:"
              : null}
          </div>
        }
        steps={
          active === "Onze aanpak"
            ? planSteps[0]
            : active === "Energielabels"
            ? planSteps[1]
            : active === "GACS"
            ? planSteps[2]
            : active === "Informatieplicht"
            ? planSteps[3]
            : active === "WKO-beheer"
            ? planSteps[4]
            : active === "Trainingen"
            ? planSteps[5]
            : []
        }
      />
    </div>
  );
}
