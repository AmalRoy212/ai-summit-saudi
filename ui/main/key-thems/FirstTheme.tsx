"use client";

import KeyConferenceHeading from "@/ui/sub/headers/ConfigHeader";
import Typography from "@/ui/sub/headers/Typography";

const data = [
  {
    backgroundName: "DAY 1 THEME",
    configHeadingOne:
      "Intelligent by Design: Building Saudi’s Future with Data & AI",
    p: "Saudi Arabia’s future-ready vision is being built on the intelligent use of data, AI, and cloud technologies. This theme focuses on how organizations are leveraging real-time intelligence, scalable platforms, and secure innovation to accelerate national and enterprise transformation.",
    imgSource: "/images/chart/img4.png",
  },
  {
    backgroundName: "DAY 1 THEME",
    configHeadingOne:
      "Intelligent by Design: Building Saudi’s Future with Data & AI",
    p: `In a fast-paced digital economy, simplicity is power. Day 2 focuses on
        how organizations can accelerate transformation using intuitive, visual
        platforms that enable faster development, automation, and execution with
        less complexity and more collaboration.`,
    imgSource: "/images/chart/img3.png",
  },
];

export default function FocusChart() {
  return (
    <div>
      <Typography first="KEY" middle="SUMMIT" last="THEMES" />
      {data.map((item, index) => (
        <div
          key={index}
          className="">
          <KeyConferenceHeading
            backgroundName={item.backgroundName}
            configHeadingOne={item.configHeadingOne}
          />
          <p className="text-lg p-10 text-gray-300 mt-4 mb-8">{item.p}</p>
          <img
            src={item.imgSource}
            alt="Focus Areas Chart"
            className="object-contain md:w-[80%] mx-auto my-10 px-10 "
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
}
