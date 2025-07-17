"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const items = [
  {
    id: 1,
    title: "Google is opening an AI hub in oil-rich Saudi Arabia",
    content: `Google might be lagging in its climate goals, but that isn’t stopping the tech giant from building a new AI-focused data center in fossil fuel-dependent Saudi Arabia.
     The new AI hub will support research into Arab language AI models and “Saudi-specific AI applications,” according to an announcement from the Saudi Public Investment fund and Google. Aramco, the state-owned petroleum company, says it currently uses AI throughout its operations. At one oil field, the technology has helped boost production by 15%.`,
    imageUrl:
      "https://techcrunch.com/wp-content/uploads/2024/04/IMG_3912.jpg?resize=1536,1152",
    link: "https://techcrunch.com/2024/11/05/google-is-opening-an-ai-hub-in-oil-rich-saudi-arabia/",
  },
  {
    id: 2,
    title: "Saudi’s $100b AI project challenges UAE’s tech leadership",
    content: `Saudi Arabia is reportedly developing a plan for an AI initiative called “Project Transcendence.”
      Anonymous sources claim the project may involve an investment of up to US$100 billion and aims to establish a technological hub challenging the United Arab Emirates’ regional role.
      The initiative is expected to focus on infrastructure development, data centers, startup investments, and talent acquisition to strengthen the local AI sector.`,
    imageUrl:
      "https://cdn.techinasia.com/wp-content/uploads/2024/11/1730960934_shutterstock_2214315035-scaled.jpg",
    link: "https://www.techinasia.com/news/saudis-100b-ai-project-challenges-uaes-tech-leadership",
  },
  {
    id: 3,
    title:
      "‘To the Future’: Saudi Arabia spends big to become an AI superpower",
    content: `More than 200,000 people converged at the conference, including Adam Selipsky, CEO of Amazon’s cloud computing division, who announced a $5.3 billion investment in Saudi Arabia for data centers and artificial intelligence technology.`,
    imageUrl:
      "https://images.deccanherald.com/deccanherald%2F2024-04%2F1ee87693-3cb6-4188-a3a0-5a21e520a5cc%2F2022newsmlRC2H8X9QJ95S27591129.jpeg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.5",
    link: "https://www.deccanherald.com//world/to-the-future-saudi-arabia-spends-big-to-become-an-ai-superpower-2993869",
  },
  {
    id: 4,
    title: "Saudi Arabia highlights AI, data efforts at UN meeting",
    content: `RIYADH: The Saudi Data and Artificial Intelligence Authority participated in a dialogue session on AI capabilities at the 79th UN General Assembly in New York, the Saudi Press Agency reported on Wednesday.
      The authority’s general manager of strategic partnerships, Rehab Alarfaj, highlighted the Kingdom’s efforts in data and AI, focusing on building national human capacities and its global contributions.`,
    imageUrl:
      "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/09/25/4527997-288834617.jpg?itok=0UB1JEDl",
    link: "https://www.arabnews.com/node/2572737/saudi-arabia",
  },
  {
    id: 5,
    title:
      "Saudi Arabia Big Data Market Outlook, Trends by Offerings, Data Type, Enterprise Size, Application, and End User 2024-2030",
    content: `Report Ocean has released a new report on the Saudi Arabia Big Data market, offering a comprehensive analysis of various factors, including market restraints, drivers, and opportunities. The report provides an in-depth review of industry developments and trends that are influencing the growth of the Saudi Arabia Big Data market. Additionally, the report includes a thorough analysis and estimation of the Saudi Arabia Big Data market.`,
    imageUrl:
      "https://nz.eragroup.com/wp-content/uploads/2018/01/business-meeting-with-iPad-1.jpg",
    link: "https://taiwannews.com.tw/news/5919330",
  },
  {
    id: 6,
    title: "Saudi Arabia Plans $40 Billion Push Into Artificial Intelligence",
    content: `The Middle Eastern country is creating a gigantic fund to invest in A.I. technology, potentially becoming the largest player in the hot market.`,
    imageUrl:
      "https://static01.nyt.com/images/2024/03/19/multimedia/00SAUDI-AI-FUND-01-mtjb/00SAUDI-AI-FUND-01-mtjb-jumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/03/19/business/saudi-arabia-investment-artificial-intelligence.html",
  },
  {
    id: 7,
    title:
      "‘To the Future’: Saudi Arabia Spends Big to Become an A.I. Superpower",
    content: `The oil-rich kingdom is plowing money into glitzy events, computing power and artificial intelligence research, putting it in the middle of an escalating U.S.-China struggle for technological influence.`,
    imageUrl:
      "https://static01.nyt.com/images/2024/04/19/multimedia/SAUDI-AI-09-vtlj/SAUDI-AI-09-vtlj-superJumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/04/25/technology/saudi-arabia-ai.html",
  },
  {
    id: 8,
    title:
      "Saudi Arabia’s AI adoption ignites technological advancement and economic growth",
    content: `RIYADH: As artificial intelligence gains global attention and becomes a buzzword, Saudi Arabia is positioned for accelerated adoption to enhance efficiency across its industries.`,
    imageUrl:
      "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2024/04/18/4324406-212207675.jpg?itok=t9zfm1pP",
    link: "https://www.arabnews.pk/node/2495391/business-economy",
  },
  {
    id: 7,
    title:
      "‘To the Future’: Saudi Arabia Spends Big to Become an A.I. Superpower",
    content: `The oil-rich kingdom is plowing money into glitzy events, computing power and artificial intelligence research, putting it in the middle of an escalating U.S.-China struggle for technological influence.`,
    imageUrl:
      "https://static01.nyt.com/images/2024/04/19/multimedia/SAUDI-AI-09-vtlj/SAUDI-AI-09-vtlj-superJumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/04/25/technology/saudi-arabia-ai.html",
  },
];

const ITEM_HEIGHT = 120;

const NewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({
        top: currentIndex * ITEM_HEIGHT,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="bg-[#0c1222] w-full py-10 px-6">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-extrabold text-white text-left mb-6"
      >
        NEWS & ARTICLES
      </motion.div>

      <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Left Side - Featured Article */}
        <div className="flex-1 bg-[#1b1e32] h-[490px] text-white rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-[300px]">
            <img
              src={items[currentIndex].imageUrl}
              alt={items[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 z-10">
              <h2 className="text-4xl font-bold mb-2">
                {items[currentIndex].title}
              </h2>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm">{items[currentIndex].content}</p>
            <a
              href={items[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 border-2 text-white rounded-md font-medium"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Right Side - Scrolling List */}
        <div className="w-full md:w-[30%] h-[490px] overflow-hidden">
          <div
            ref={listRef}
            className="space-y-3 h-full overflow-hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex gap-3 p-3 rounded-md transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-300 text-black"
                    : "bg-[#2c2f48] text-white"
                }`}
                style={{
                  height: `${ITEM_HEIGHT}px`,
                }}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-20 h-16 object-cover rounded"
                />
                <div className="overflow-hidden">
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs mt-1 line-clamp-2">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
};

export default NewsCarousel;
