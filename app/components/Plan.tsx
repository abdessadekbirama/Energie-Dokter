// "use client";
// import { useAnimation, useInView, motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import { planSteps as steps } from "../data/planSteps";

// export default function Plan({ active }: { active: string }) {
//   const tabs = [
//     "Onze aanpak",
//     "Energielabels",
//     "GACS",
//     "Informatieplicht",
//     "WKO-beheer",
//     "Trainingen",
//   ];

//   // Ref for the title section
//   const titleSection = useRef(null);
//   const titleInView = useInView(titleSection, { amount: 0.2, once: true });

//   // step component
//   const Step = ({ step }: { step: { title: string; content: string } }) => {
//     const stepSection = useRef(null);
//     const inView = useInView(stepSection, { amount: 0.2, once: true });

//     return (
//       <motion.div
//         className="hover:cursor-pointer md:w-1/2 p-5 pl-0"
//         ref={stepSection}
//         initial={{ opacity: 0, x: -30 }}
//         animate={inView ? { opacity: 1, x: 0 } : {}}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-[#254055] font-bold text-3xl ">{step.title}</h1>
//         <p className="text-[#4D4D4D] mt-3">{step.content}</p>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="md:px-24 md:mt-28 mt-20 ">
//       {/* Plan title */}
//       <motion.div
//         key={active}
//         ref={titleSection}
//         initial={{ opacity: 0, y: 30 }}
//         animate={titleInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.6 }}
//       >
//         <h1 className="text-[#254055] font-extrabold text-3xl">{steps[tabs.indexOf(active)][0].header}</h1>
//         <div className="mt-2 text-[#4D4D4D] md:max-w-1/2">
//           {steps[tabs.indexOf(active)][0].subtitle}
//         </div>
//       </motion.div>

//       {/* steps */}
//       <div className="flex flex-col md:gap-15 gap-5 md:mt-20 mt-10">
//         {steps[tabs.indexOf(active)].slice(1).map((step, index) => (
//           <Step step={step} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { planSteps as steps } from "../data/planSteps";

export default function Plan({ active }: { active: string }) {
  const tabs = [
    "Onze aanpak",
    "Energielabels",
    "GACS",
    "Informatieplicht",
    "WKO-beheer",
    "Trainingen",
  ];

  // Ref for the title section
  const titleSection = useRef(null);
  const titleInView = useInView(titleSection, { amount: 0.2, once: true });

  // step component - updated type
  const Step = ({ step }: { step: { title: string; content: string } }) => {
    const stepSection = useRef(null);
    const inView = useInView(stepSection, { amount: 0.2, once: true });

    return (
      <motion.div
        className="hover:cursor-pointer md:w-1/2 p-5 pl-0"
        ref={stepSection}
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[#254055] font-bold text-3xl ">{step.title}</h1>
        <p className="text-[#4D4D4D] mt-3">{step.content}</p>
      </motion.div>
    );
  };

  const currentSteps = steps[tabs.indexOf(active)];

  return (
    <div className="md:px-24 md:mt-28 mt-20 ">
      {/* Plan title */}
      <motion.div
        key={active}
        ref={titleSection}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[#254055] font-extrabold text-3xl">
          {currentSteps[0].header}
        </h1>
        <div className="mt-2 text-[#4D4D4D] md:max-w-1/2">
          {currentSteps[0].subtitle}
        </div>
      </motion.div>

      {/* steps - only pass items that have title and content */}
      <div className="flex flex-col md:gap-15 gap-5 md:mt-20 mt-10">
        {currentSteps.slice(1).map((step, index) => (
          <Step step={step as { title: string; content: string }} key={index} />
        ))}
      </div>
    </div>
  );
}
