"use client";
import SectionTitle from "./SectionTitle";
import { data } from "../data/faq";
import { useState } from "react";
import { motion } from "framer-motion";

// export default function Faq() {
//   const services = [
//     "Algemene vragen",
//     "Energielabels",
//     "GACS",
//     "Informatieplicht",
//     "WKO-beheer",
//     "Trainingen",
//   ];
//   const [active, setActive] = useState("Algemene vragen");

//   const toggleActive = ({ title }: { title: string }) => {
//     setActive(title);
//   };

//   return (
//     <div
//       className="my-40 flex flex-col items-center"
//       style={{ fontFamily: "Poppins" }}
//     >
//       <SectionTitle
//         title="FAQ"
//         span={
//           <div className="md:text-4xl text-2xl font-extrabold text-center">
//             <span className="text-[#254055]">Veelgestelde </span>
//             <span className="text-[#81C713]">vragen</span>
//           </div>
//         }
//       />
//       <div className="text-[#254055] flex gap-3 mt-13 max-w-3/4">
//         {/* services */}
//         <div className="flex flex-col gap-2">
//           {data.map((faq, index) => (
//             <button
//               onClick={() => toggleActive({ title: faq.title })}
//               key={index}
//               className={`text-left font-semibold rounded-lg pl-5 pr-40 text-nowrap py-4 hover:cursor-pointer transition-colors duration-200 ${
//                 active === faq.title
//                   ? "bg-[#F0F8E2]"
//                   : "bg-[#F6F6F6] hover:bg-[#f0f8e2c4]"
//               }`}
//             >
//               {faq.title}
//             </button>
//           ))}
//         </div>

//         {/* FAQs */}
//         <div className="flex flex-col gap-2">
//           {data[services.indexOf(active)].faqs.map((faq, index) => (
//             <motion.div
//               initial={{ opacity: 0.5 }}
//               animate={{ opacity: 1 }}
//               key={index}
//               transition={{ duration: 0.6 }}
//               className="bg-[#F0F8E2] p-4 rounded-xl pl-16 relative"
//             >
//               <div className="bg-[#254055] size-3 rounded absolute left-3"></div>
//               <div className="bg-[#254055] w-3 h-0.5 rounded absolute right-5 mt-2"></div>
//               <div className="pr-5">
//                 <h1>{faq.question}</h1>
//                 <p className="text-[#808080] mt-2 text-[15px]">{faq.answer}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Faq() {
  const services = [
    "Algemene vragen",
    "Energielabels",
    "GACS",
    "Informatieplicht",
    "WKO-beheer",
    "Trainingen",
  ];
  const [active, setActive] = useState<string>("Algemene vragen");

  const toggleActive = ({ title }: { title: string }) => {
    setActive(title);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div
      className="my-20 md:mt-28 flex flex-col items-center"
      style={{ fontFamily: "Poppins" }}
    >
      <SectionTitle
        title="FAQ"
        span={
          <div className="md:text-4xl text-2xl font-extrabold text-center">
            <span className="text-[#254055]">Veelgestelde </span>
            <span className="text-[#81C713]">vragen</span>
          </div>
        }
      />
      <div className="text-[#254055] flex gap-3 md:mt-13 mt-10 md:max-w-3/4">
        {/* services */}
        <div className="flex flex-col gap-2">
          {data.map((faq, index) => (
            <div key={index} className="flex flex-col gap-2">
              <motion.button
                onClick={() => toggleActive({ title: faq.title })}
                key={index}
                className={`md:mx-0 mx-10 text-left font-semibold rounded-lg pl-5 md:pr-40 text-nowrap py-4 hover:cursor-pointer transition-colors duration-200 ${
                  active === faq.title
                    ? "bg-[#F0F8E2]"
                    : "bg-[#F6F6F6] hover:bg-[#f0f8e2b5]"
                }`}
              >
                {faq.title}
              </motion.button>
              {active === faq.title ? (
                <motion.div
                  key={active}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="md:hidden flex flex-col gap-2 mx-5 mt-5"
                >
                  {data[services.indexOf(active)].faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-[#F0F8E2] py-4 rounded-xl pl-2 relative"
                    >
                      <motion.div
                        className="bg-[#254055] size-3 rounded absolute"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          delay: 0.1 + index * 0.08,
                          duration: 0.3,
                        }}
                      />
                      <motion.div
                        className="bg-[#254055] w-3 h-0.5 rounded absolute right-2 mt-2"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          delay: 0.15 + index * 0.08,
                          duration: 0.3,
                        }}
                      />
                      <div className="">
                        <h1 className="text-[13px] mx-6">{faq.question}</h1>
                        <p className="text-[#808080] mt-2 text-xs">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : null}
            </div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          key={active}
          variants={containerVariants}
          initial="visible"
          // animate="visible"
          className="md:flex hidden flex-col gap-2"
        >
          {data[services.indexOf(active)].faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#F0F8E2] p-4 rounded-xl pl-16 relative"
            >
              <motion.div
                className="bg-[#254055] size-3 rounded absolute left-3 top-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.3 }}
              />
              <motion.div
                className="bg-[#254055] w-3 h-0.5 rounded absolute right-5 mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.3 }}
              />
              <div className="pr-5">
                <h1>{faq.question}</h1>
                <p className="text-[#808080] mt-2 text-[15px]">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
