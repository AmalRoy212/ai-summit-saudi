"use client";

import React from "react";
import BgCards from "../bgCards/BgCards";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/viewMotions";

function Occation() {
  const cardsData = [
    {
      number: "$49.98 B",
      title: "2024 Market size",
      margin: 20,
    },
    {
      number: "$81.78 B",
      title: "Expected market growth by 2029",
    },
    {
      number: "10.35%",
      title: "CAGR 2029",
    },
  ];

  return (
    <div className="pb-10">
      <div className="relative h-full w-full flex justify-start px-10 md:mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          WHY SAUDI ?
        </h1>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-fill-transparent"></div>
      </div>

      <div className="md:flex flex-row w-full h-auto py-10 md:py-0">
        {cardsData.map((card, index) => (
          <BgCards key={index} data={card} index={index} />
        ))}
        <motion.div
          variants={zoomIn(0.5, 0.7)}
          initial="hidden"
          whileInView="show"
          className="relative flex flex-col md:w-1/4 w-full h-[50vh] justify-center items-center p-5 md:mt-[-5rem] mt-[-8rem]"
        >
          {/* <h1 className="md: absolute md:top-16 mt-[-9rem] text-5xl md:m-[-1rem] text-center font-bold text-slate-200 z-10">
            $28.50B
          </h1> */}
          <h1 className="font-bold text-6xl text-slate-200 absolute top-36 md:top-14 z-10">
            $28.50B
          </h1>
          <p className="font-bold text-1xl text-slate-300 absolute z-10">
            Current ICT Market value
          </p>
          <div className="absolute top-0 left-0 w-full h-full z-0 md:flex hidden">
            <video
              loop
              autoPlay
              muted
              className="flex transform rotate-90 h-full w-full object-contain"
              src="/videos/cards_bg.mp4/"
            ></video>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Occation;
