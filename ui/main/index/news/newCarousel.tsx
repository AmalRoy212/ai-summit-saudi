import React, { useEffect, useState } from "react";

const items = [
  {
    id: 1,
    title: "Google is opening an AI hub in oil-rich Saudi Arabia",
    content: `Google might be lagging in its climate goals, but that isn’t stopping the tech giant from building a new AI-focused data center in fossil fuel-dependent Saudi Arabia....`,
    imageUrl:
      "https://techcrunch.com/wp-content/uploads/2024/04/IMG_3912.jpg?resize=1536,1152",
    link: "https://techcrunch.com/2024/11/05/google-is-opening-an-ai-hub-in-oil-rich-saudi-arabia/",
  },
  {
    id: 2,
    title: "Saudi’s $100b AI project challenges UAE’s tech leadership",
    content: `Saudi Arabia is reportedly developing a plan for an AI initiative called “Project Transcendence.”
        Anonymous sources claim the project may involve an investment of up to US$100...`,
    imageUrl:
      "https://cdn.techinasia.com/wp-content/uploads/2024/11/1730960934_shutterstock_2214315035-scaled.jpg",
    link: "https://www.techinasia.com/news/saudis-100b-ai-project-challenges-uaes-tech-leadership",
  },
  {
    id: 3,
    title:
      "‘To the Future’: Saudi Arabia spends big to become an AI superpower",
    content: `More than 200,000 people converged at the conference, including Adam Selipsky, CEO of Amazon’s cloud computing division ...`,
    imageUrl:
      "https://images.deccanherald.com/deccanherald%2F2024-04%2F1ee87693-3cb6-4188-a3a0-5a21e520a5cc%2F2022newsmlRC2H8X9QJ95S27591129.jpeg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.5",
    link: "https://www.deccanherald.com//world/to-the-future-saudi-arabia-spends-big-to-become-an-ai-superpower-2993869",
  },
  {
    id: 4,
    title: "Saudi Arabia highlights AI, data efforts at UN meeting",
    content: `RIYADH: The Saudi Data and Artificial Intelligence Authority participated in a dialogue session on AI capabilities at the 79th UN General Assembly in New York, the Saudi Press Agency reported on Wednesday ...`,
    imageUrl:
      "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2024/09/25/4527997-288834617.jpg?itok=0UB1JEDl",
    link: "https://www.arabnews.com/node/2572737/saudi-arabia",
  },
  {
    id: 5,
    title:
      "Saudi Arabia Big Data Market Outlook, Trends by Offerings, Data Type, Enterprise Size, Application, and End User 2024-2030",
    content: `Report Ocean has released a new ...`,
    imageUrl:
      "https://nz.eragroup.com/wp-content/uploads/2018/01/business-meeting-with-iPad-1.jpg",
    link: "https://taiwannews.com.tw/news/5919330",
  },
  {
    id: 6,
    title: "Saudi Arabia Plans $40 Billion Push Into Artificial Intelligence",
    content: `The Middle Eastern country is creating a gigantic fund to invest in A.I. technology, potentially becoming the largest player in the hot market ...`,
    imageUrl:
      "https://static01.nyt.com/images/2024/03/19/multimedia/00SAUDI-AI-FUND-01-mtjb/00SAUDI-AI-FUND-01-mtjb-jumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/03/19/business/saudi-arabia-investment-artificial-intelligence.html",
  },
  {
    id: 7,
    title:
      "‘To the Future’: Saudi Arabia Spends Big to Become an A.I. Superpower",
    content: `The oil-rich kingdom is plowing money into glitzy events, computing power and artificial intelligence research, putting it in the middle of an escalating ...`,
    imageUrl:
      "https://static01.nyt.com/images/2024/04/19/multimedia/SAUDI-AI-09-vtlj/SAUDI-AI-09-vtlj-superJumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/04/25/technology/saudi-arabia-ai.html",
  },
  {
    id: 8,
    title:
      "Saudi Arabia’s AI adoption ignites technological advancement and economic growth",
    content: `RIYADH: As artificial intelligence gains global attention and becomes a buzzword, Saudi Arabia is posi ...`,
    imageUrl:
      "https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2024/04/18/4324406-212207675.jpg?itok=t9zfm1pP",
    link: "https://www.arabnews.pk/node/2495391/business-economy",
  },
  {
    id: 7,
    title:
      "‘To the Future’: Saudi Arabia Spends Big to Become an A.I. Superpower",
    content: `The oil-rich kingdom is plowing money into glitzy events, computing power and artificial intelligence research, putting it in the middle of an escalating ...`,
    imageUrl:
      "https://static01.nyt.com/images/2024/04/19/multimedia/SAUDI-AI-09-vtlj/SAUDI-AI-09-vtlj-superJumbo.jpg?quality=75&auto=webp",
    link: "https://www.nytimes.com/2024/04/25/technology/saudi-arabia-ai.html",
  },
  {
    id: 1,
    title:
      "Informatica launches AI-powered Data Management Cloud in Saudi Arabia",
    content:
      "Informatica, an enterprise Cloud data management services provider in the Middle East, has launched its Artificial Intelligence (AI)-powered Intelligent Data ...",
    imageUrl: "https://w.media/wp-content/uploads/2022/12/saudi-1.jpg",
    link: "https://w.media/informatica-launches-ai-powered-data-management-cloud-in-saudi-arabia/",
  },
  {
    id: 2,
    title:
      "LinkedIn data shows KSA workforce rapidly adopting digital skills as the hiring.",
    content:
      "LinkedIn data shows KSA workforce rapidly adopting digital skills as the hiring ...",
    imageUrl: "https://etimg.etb2bimg.com/photo/110784908.cms",
    link: "https://hrme.economictimes.indiatimes.com/news/linkedin-data-shows-ksa-workforce-rapidly-adopting-digital-skills-as-the-hiring-of-ai-talent-grows-24-in-one-year/110784895",
  },
  {
    id: 3,
    title: "AI, analytics and the future of Saudi Arabia’s workforce",
    content : "Saudi Arabia is making significant strides in the world of artificial intelligence, in pursuit of its ambitious initiatives to position the Kingdom as a global leader in AI.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSh1AKmDllp5VjcBc2IvRS8fT1ymYQjdrLQWg-fQeLq8TFRssCgjKriasyVs6ml1cpjA&usqp=CAU",
    link: "https://www.arabnews.com/node/2530096",
  },
  {
    id: 4,
    title:
      "Presight signs deal to enhance emergency management through AI, Big Data analytics",
      content : "The partnership aims to revolutionise crisis, emergency, and disaster management through the integration of advanced data analytics and AI into ...",
    imageUrl:
      "https://static.zawya.com/view/acePublic/alias/contentid/Nzc2NmRkMjgtOWZiZC00/37/1464561797.webp?f=3%3A2&q=0.75&w=1080",
    link: "https://www.zawya.com/en/business/technology-and-telecom/presight-signs-deal-to-enhance-emergency-management-through-ai-big-data-analytics-q3s6428u",
  },
];

const NewCarousel: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const visibleCards = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const maxOffset = items.length - visibleCards;
        return prevOffset >= maxOffset ? 0 : prevOffset + 2;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${offset * (100 / visibleCards)}%)`,
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="w-1/4 flex-none h-[70vh] md:h-[450px] bg-cover bg-center ml-2 text-white relative rounded-xl overflow-hidden"
            style={{
              border: "1px solid gray",
            }}
          >
            <img
              src={item.imageUrl}
              alt="img"
              className="w-full h-1/3 object-cover"
            />
            <div className="bg-opacity-70 text-xl md:text-xl max-w-[90%] text-white p-4 font-bold">
              {item.title}
            </div>
            <div className="bg-opacity-70 text-sm font-thin  p-4">
              {item.content}
            </div>
            <div className="w-full absolute bottom-0 flex justify-center py-2">
              <a
                className="text-sm z-10 px-5 py-2 rounded-xl text-black"
                style={{
                  border: "1px solid black",
                  cursor: "pointer",
                  backgroundColor: "white",
                }}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCarousel;