import React from "react";

function DetailsProvider() {
  return (
    <div className="md:flex flex-row w-full h-auto py-10 md:py-0">
      <div
        data-aos="fade-up-right"
        className="flex p-3 flex-col md:w-2/4 w-full md:h-screen justify-center items-center"
      >
        <img
          src="/images/alts/bg-1.png"
          style={{ height: "400px" }}
          className="rounded-xl w-full object-cover"
        />
      </div>
      <div
        data-aos="fade-up-left"
        className="flex flex-col md:w-2/4 w-full md:h-screen h-auto justify-center items-center p-5"
      >
        <p className="text-[12px] text-gray-400 dark:text-gray-400 md:p-5 text-justify">
          The Intelligent Data, AI & Automation Summit (IDA) is a premier
          business-centric event driven by thought leadership, focusing on the
          latest challenges and technological trends in Saudi's innovation
          landscape. <br /> Saudi Arabia stands at a pivotal point in its
          transformation journey, led by the bold ambitions of Vision 2030. As
          the Kingdom redefines its national identity and economic model,
          investments in smart infrastructure, giga projects, and globally
          recognized events such as NEOM, The Red Sea Project, World Expo 2030,
          and the FIFA World Cup 2034 bid signal a shift toward a tech-enabled,
          knowledge-driven future. <br /> This dynamic evolution is compelling public
          institutions and private enterprises alike to modernize at pace
          embracing technologies that enable speed, intelligence, and
          adaptability. In this context, AI, intelligent data architecture,
          process automation, and Low Code/No Code development have emerged as
          core enablers of digital maturity and enterprise innovation. <br /> As
          organizations look to enhance operational efficiency, unlock insights
          from vast data ecosystems, and deploy AI at scale, spending on
          next-gen analytics, AIOps, AI-enabled security, GenAI, and
          cloud-native solutions continues to rise across the Kingdom. Notably,
          recent studies show that over half of Saudi organizations are actively
          prioritizing AI and automation initiatives within the coming year,
          reinforcing the national push toward a smarter, more agile economy. <br />
          The IDA Summit will bring together C-suite executives, government
          leaders, data & AI leaders, automation strategists, and solution
          providers for two powerful days of dialogue and discovery in Riyadh.
          This high-level gathering will explore how Saudi enterprises are
          adopting emerging technologies to accelerate transformation with
          reduced complexity and greater speed.
        </p>
      </div>
    </div>
  );
}

export default DetailsProvider;
