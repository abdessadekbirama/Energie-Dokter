"use client";

import SectionTitle from "./SectionTitle";
import AnimatedLink from "./AnimatedLink";

export default function About() {
  const aboutStatistiques = [
    {
      title: "150+",
      subtitle: (
        <span>
          Gebouwen <br /> verduurzaamd
        </span>
      ),
    },
    {
      title: "60+",
      subtitle: (
        <span>
          Gemiddeld <br /> energiebesparing
        </span>
      ),
    },
    {
      title: "10+",
      subtitle: (
        <span>
          Jaar ervaring <br /> in verduurzamen
        </span>
      ),
    },
    {
      title: "12+",
      subtitle: (
        <span>
          Gecertificeerde <br /> specialisten
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="mt-20 md:px-20 lg:px-24 px-1 flex flex-col items-center">
        {/* First section */}
        <div className="flex items-start justify-between gap-5">
          <div className="md:w-1/2 w-1/5 mt-3">
            <SectionTitle
              title="Wie wij zijn"
              span={
                <div className="md:text-4xl text-2xl font-extrabold text-center">
                  <span className="text-[#254055]">Over </span>
                  <span className="text-[#81C713]">ons</span>
                </div>
              }
            />
          </div>

          {/* paragraphs */}
          <div
            className="text-[#4D4D4D] md:text-lg  flex flex-col gap-5 w-[60%] md:w-auto md:text-[16px] text-sm"
            style={{ fontFamily: "Poppins" }}
          >
            <p>
              Wij helpen organisaties hun gebouwen toekomstbestendig te maken.
              Van energiediagnose tot uitvoering zorgen we dat techniek,
              financiën en duurzaamheid naadloos op elkaar aansluiten.
            </p>
            <p>
              We begrijpen dat gebouwtechniek nooit op zichzelf staat. Door ook
              gebruikers, processen en praktische belangen mee te nemen, vinden
              we oplossingen die écht werken. Met heldere communicatie, snelheid
              en de juiste experts aan tafel realiseren we duurzame resultaten
              waar gebouw én organisatie direct van profiteren.
            </p>
          </div>
        </div>
        {/* Second Section */}
        <div
          className="bg-[#F6F6F6] flex flex-col md:flex-row items-center justify-center py-2 mt-10 rounded-4xl md:mx-0 mx-10 md:px-0 px-10 w-fit m-auto"
          style={{ fontFamily: "Poppins" }}
        >
          {aboutStatistiques.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-2 md:px-20 py-5 ${
                stat.title !== "12+"
                  ? "md:border-r-4 border-r-0 md:border-b-0 border-b-4 border-white"
                  : ""
              } `}
            >
              <span className="text-[#3C8101] text-3xl font-bold ">
                {stat.title}
              </span>
              <span className="text-[rgb(77,77,77)] text-center">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </div>

        <div className="w-fit m-auto">
          <AnimatedLink
            text="Lees Meer"
            bg="#63A0AC"
            arrowColor="#417A85"
            arrowBg="white"
            textColor="white"
            borderColor="transparent"
            shimmerColor="transparent"
            fillBg="#266d78b4"
            href="/about-us"
          />
          <span className="bg-[#266d78b4]"></span>
        </div>
      </div>
      <div
        className="md:mt-20 mt-10 flex flex-col items-center md:gap-8 gap-5 md:py-20 py-10 bg-[url('/assets/HomeHeroBg.svg')] bg-cover bg-center"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="md:text-4xl text-2xl text-center text-[#254055] font-bold ">
          ″The future will be <span className="text-[#81C713] ">green</span>, or
          not at all″
        </h1>
        <div className="bg-[#254055] md:py-0.5 py-px rounded-full w-20 "></div>
        <span className="text-[#81c713] font-semibold md:text-2xl text-xl ">
          Jonathon Porritt
        </span>
      </div>
    </>
  );
}
