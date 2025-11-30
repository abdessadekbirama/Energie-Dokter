import SectionTitle from "./SectionTitle";
import { services } from "../data/services";
import Link from "next/link";

export default function Diensten() {
  const Card = ({
    title,
    icon,
    text,
  }: {
    title: string;
    icon: string;
    text: string;
  }) => (
    <div className="bg-[#F6F6F6] flex flex-col gap-5 items-center justify-between rounded-tl-[3rem] rounded-br-[3rem] px-8 py-4 hover:bg-[#F0F8E2] hover:-translate-y-1 transition-all duration-300 ">
      <div className="flex justify-between w-full gap-3 ">
        <img
          src={`/assets/icons/service${icon}.svg`}
          className="size-10"
          alt=""
        />
        <h1 className="font-semibold md:max-w-2/3 text-right md:text-[17px] ">
          {title}
        </h1>
      </div>
      <p className="text-sm text-[#4D4D4D] ">{text}</p>
      <Link href="#" className="self-start text-[#4B7939] text-sm ">
        Lees meer
      </Link>
    </div>
  );
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="flex flex-col items-center my-20"
    >
      <SectionTitle
        title="Diensten"
        span={
          <span className="text-[#254055] ">
            Onze <span className="text-[#81C713] ">kerndiensten</span> voor{" "}
            <br /> duurzaam wonen
          </span>
        }
      />
      <p className="text-[#4D4D4D] text-center mt-5 w-2/3 ">
        Wij bieden complete energieke oplossingen die volledig zijn afgestemd op
        uw situatie — of u nu huiseigenaar, verhuurder of ondernemer bent. Van
        analyse tot uitvoering begeleiden wij u naar een comfortabel,
        energiezuinig en toekomstbestendig gebouw
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-10 md:gap-x-15 md:px-24 px-5 mt-10">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            icon={service.icon}
            text={service.text}
          />
        ))}
      </div>
    </div>
  );
}
