"use client";

import { useState } from "react";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";

// Helper function to format title (supports ordinal suffixes + "+" and "_" symbols)
function formatTitle(title: string) {
  const match = title.match(/^(\d+)(st|nd|rd|th)?(\+|_)?$/i);

  if (match) {
    const [, number, suffix, symbol] = match;
    return (
      <>
        <span className="text-3xl">{number}</span>
        {suffix && <sup className="text-sm align-super ml-0.5">{suffix}</sup>}
        {symbol && <span className="text-3xl ml-0.5">{symbol}</span>}
      </>
    );
  }

  // Handles more complex cases like "8.7K+", "12_th", etc.
  return (
    <>
      {title.split(/(\+|_|\d+st|\d+nd|\d+rd|\d+th)/i).map((part, idx) => {
        if (/\d+/.test(part)) {
          return (
            <span key={idx} className="text-3xl">
              {part}
            </span>
          );
        } else if (/^(st|nd|rd|th)$/i.test(part)) {
          return (
            <sup key={idx} className="text-sm align-super ml-0.5">
              {part}
            </sup>
          );
        } else if (part === "+" || part === "_") {
          return (
            <span key={idx} className="text-4xl ml-0.5">
              {part}
            </span>
          );
        } else {
          return <span key={idx}>{part}</span>;
        }
      })}
    </>
  );
}

export default function MarketOverview() {
  const [showMore, setShowMore] = useState(false);

  const stats = [
    {
      title: "14",
      desc: "Regulations and policies related to data and AI published by SDAIA.",
      source: "SDAIA, 2024",
    },
    {
      title: "245",
      desc: "The total number of established data management offices in the public sector until 2024.",
      source: "SDAIA, 2024",
    },
    {
      title: "$1.7 Billion",
      desc: "The total attracted funds in AI Saudi companies in 2023.",
      source: "Crunchbase, 2024",
    },
    {
      title: "75%",
      desc: "Of the Saudi population is knowledgeable about AI's concept, and 64% knowledgeable about AI use cases and their applications.",
      source: "SDAIA Public Awareness Survey, 2024",
    },
    {
      title: "320.0+",
      desc: "Government systems integrated in NDB National Data Lake, resulting in 100TB+ of total stored data volume provided by 60+ government entities.",
      source: "SDAIA, 2024",
    },
    {
      title: "8.7K+",
      desc: "Datasets hosted in the NDB Open Data Platform from 249+ government and private entities.",
      source: "SDAIA, 2024",
    },
    {
      title: "39%",
      desc: "Of Saudi government entities are using or experimenting with AI.",
      source: "SDAIA Readiness & Adoption Survey, 2024",
    },
    {
      title: "81%",
      desc: "Of Saudi government entities using or experimenting AI reported that AI has significantly enhanced their service delivery.",
      source: "SDAIA Readiness & Adoption Survey, 2024",
    },
    {
      title: "12%",
      desc: "The estimated AI contribution to Saudi Arabia's GDP from AI by 2030.",
      source: "PwC, 2017",
    },
    {
      title: "29%",
      desc: "The CAGR of the AI market in Saudi Arabia until 2030.",
      source: "Statista, 2024",
    },
    {
      title: "1st",
      desc: "Place globally in the pillar of government strategy for AI.",
      source: "The Global AI Index - Tortoise, 2023",
    },
    {
      title: "2nd",
      desc: "Place in MENA government readiness for AI implementation in public services delivery.",
      source: "Oxford AI Readiness Index, 2023",
    },
    {
      title: "Full Score",
      desc: "In open government data along with 10 other countries—out of 193 countries—by United Nations.",
      source: "OGDI, 2022",
    },
    {
      title: "2nd",
      desc: "Place globally in terms of positivity and optimism towards AI products and services.",
      source: "Stanford AI Index, 2023",
    },
    {
      title: "5",
      desc: "Of Saudi Arabia's cities are among the top 100 smart cities around the world.",
      source: "IMD Smart City Index, 2024",
    },
  ];

  return (
    <div className="bg-[#0b0b1d] w-full mb-24">
      <div className="max-w-7xl mx-auto text-white py-12 px-4 md:px-10 my-10 min-h-[100vh] z-10">
        <h1 className="text-4xl font-bold text-white py-8">MARKET OVERVIEW</h1>

        <div className="flex flex-col md:flex-row items-start justify-end gap-6">
          <p className="w-2/3 text-justify text-[14px]">
            Saudi Arabia, under its transformative Vision 2030, is rapidly
            positioning itself as a global leader in artificial intelligence
            (AI) by leveraging its potential to drive innovation, economic
            growth, and improved public services. Central to this effort is the
            Saudi Data & AI Authority (SDAIA), established in 2019, tasked with
            driving AI adoption across government entities, raising public
            awareness, and ensuring the strategic use of data and AI
            technologies to create a data-driven future. AI, which enables
            systems to perform tasks requiring human intelligence, has evolved
            significantly since its inception, driven by advancements in
            computing and data availability, and now plays a vital role in daily
            activities and business operations. Globally, AI is projected to
            contribute $15.7 trillion (SAR 58.9 trillion) to the economy by
            2030, with transformative applications across sectors such as
            healthcare, where it could cut 5–10% of expenses, and smart cities,
            enhancing urban living through intelligent traffic management and
            optimized energy consumption. Recognizing these opportunities, Saudi
            Arabia launched its National Strategy for Data & AI (NSDAI) in 2020,
            aiming to establish itself as a leader in data-driven economies and
            harness AI to enhance economic performance, increase productivity,
            and improve the quality of life for its citizens.
          </p>
          <div
            className="min-h-[250px] w-1/3 bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage:
                'url("https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540915_1280.jpg")',
              opacity: 0.5,
            }}
          ></div>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 justify-start">
          {stats.slice(0, 3).map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-700 to-blue-500 rounded-xl p-5 min-w-[280px] text-white shadow-md flex-1"
            >
              <div className="font-bold mb-2 text-white text-3xl">
                {formatTitle(stat.title)}
              </div>
              <div className="text-sm text-gray-200 mb-1">{stat.desc}</div>
              <div className="text-xs text-gray-300">{stat.source}</div>
            </div>
          ))}
        </div>

        {!showMore && (
          <div className="w-full flex justify-center items-center mt-6 z-10">
            <button
              onClick={() => setShowMore(true)}
              className="px-6 flex justify-center items-center gap-x-2 cursor-pointer py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
            >
              <IoIosArrowDropdown size={18} />
              Show More
            </button>
          </div>
        )}

        {showMore && (
          <div className="mt-8 flex flex-wrap gap-6 justify-start">
            {stats.slice(3).map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-purple-700 to-blue-500 rounded-xl p-5 min-w-[280px] text-white shadow-md flex-1"
              >
                <div className="font-bold mb-2 text-white text-3xl">
                  {formatTitle(stat.title)}
                </div>
                <div className="text-sm text-gray-200 mb-1">{stat.desc}</div>
                <div className="text-xs text-gray-300">{stat.source}</div>
              </div>
            ))}

            {/* City Ranking Section */}
            <div className="w-full flex flex-col md:flex-row py-5 px-10">
              {[
                { city: "Riyadh", rank: "25th" },
                { city: "Makkah", rank: "52ND" },
                { city: "Jeddah", rank: "55th" },
                { city: "Medina", rank: "77th" },
                { city: "Al-Khobar", rank: "99th" },
              ].map(({ city, rank }, i) => {
                const match = rank.match(/^(\d+)(st|nd|rd|th)$/i);
                return (
                  <div
                    key={i}
                    className="w-1/5 flex justify-center flex-col items-center"
                  >
                    <h1 className="text-white text-6xl text-tick">
                      {match ? (
                        <>
                          {match[1]}
                          <sup className="text-2xl align-super ml-0.5">
                            {match[2]}
                          </sup>
                        </>
                      ) : (
                        rank
                      )}
                    </h1>
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-[5px] w-1/3 mb-2 rounded-2xl"></div>
                    <p className="text-white text-tick">{city}</p>
                  </div>
                );
              })}
            </div>

            <div className="w-full flex justify-center mt-6 z-10">
              <button
                onClick={() => setShowMore(false)}
                className="px-6 flex justify-center items-center gap-x-2 cursor-pointer py-2 bg-white text-black rounded-full hover:bg-gray-200 transition"
              >
                <IoIosArrowDropup size={18} /> Show Less
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
