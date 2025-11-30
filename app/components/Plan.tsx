import { useState } from "react";

export default function Plan({
  title,
  subtitle,
  steps,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  steps: { title: string; content: string }[];
}) {
  const [active, setActive] = useState("");

  return (
    <div className="px-24 mt-20">
      <h1>{title}</h1>
      <p className="mt-2">{subtitle}</p>
      <div className="mt-20 flex flex-col gap-15">
        {steps.map((step, index) => (
          <div key={index} className="hover:cursor-pointer w-2/4 p-5 pl-0">
            <h1 className="text-[#254055] font-bold text-3xl ">
              {step.title}
            </h1>
            <p className="text-[#4D4D4D] mt-3">{step.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
