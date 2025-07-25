"use client";

// import { useEffect } from "react";
import Cards from "@/ui/main/cards/Cards";
// import Pricing from "@/ui/main/index/Pricing";
import DetailsHolder from "@/ui/main/index/aboutEvent/DetailsHolder";
// import AwardsProvider from "@/ui/main/index/awardSection/AwardsProvide";
import Card from "@/ui/main/index/cards/Card";
// import ChartsHolder from "@/ui/main/index/chartArea/ChartsHolder";
// import ContactUs from "@/ui/main/index/contactUs/ContactUs";
import Encryption from "@/ui/main/index/encryption/Encryption";
// import End from "@/ui/main/index/end/End";
import Hero from "@/ui/main/index/hero/Hero";
// import Sponsors from "@/ui/main/index/sponsors/Sponsors";
// import StartUp from "@/ui/main/index/startUp/StartUp";
import TopicsProvide from "@/ui/main/index/topics/TopicsProvide";
// import StarsCanvas from "@/ui/main/starBackground/StarBackground";
// import WhoIndustries from "@/ui/sub/index/WhyIndustries/WhyIndustries";
// import SpeakerProfiles from "../ui/main/speakers/SpeakersSection";
// import CaroselHolder from "@/ui/main/index/caroselHolder/CaroselHolser";
// import NewsLetter from "@/ui/main/index/news/NewsLetter";
import WhitePaper from "@/ui/sub/round-table/RoundTableMeeting";
// import EventName from "@/ui/main/event-name/EventName";
// import RoundHolder from "@/DeletedComponents/RoundHolder";
// import Footer from "@/ui/main/footer/Footer";
import FooterHolder from "@/ui/main/footer/FooterHolder";
import SummitKeyThemes from "@/ui/main/key-thems/FirstTheme";
import MarketOverview from "@/ui/sub/index/aboutEvent/MarketOverview";
// import Carousel from "@/ui/main/index/news/NewsCarousel";
// import NewCarousel from "@/ui/main/index/news/newCarousel";
// import NewsTicker from "@/ui/main/index/news/NewsTicker";
import NewsCarousel from "@/ui/main/index/news/NewsCarousels";

export default function Home() {
  // useEffect(() => {
  //   if (localStorage.getItem("reloaded")) {
  //     localStorage.removeItem("reloaded");
  //     window.location.reload();
  //   }
  // }, []);

  return (
    <main className="h-full w-full md:w-[100%] overflow-hidden">
      {/* <StarsCanvas /> */}
      <div className="flex flex-col ">
        <Hero />
        <DetailsHolder />
        <MarketOverview />
        <Card />
        {/* <SpeakerProfiles /> */}
        {/* <CaroselHolder /> */}
        <Encryption />
        <Cards />
        {/* <RoundHolder /> */}
        {/* <ChartsHolder /> */}
        {/* <AwardsProvider /> */}
        <SummitKeyThemes />
        {/* <TopicsProvide /> */}
        {/* <WhoIndustries /> */}
        {/* <Pricing /> */}
        {/* <Sponsors /> */}
        <WhitePaper />
        {/* <StartUp /> */}
        {/* <End /> */}
        {/* <Carousel /> */}
        {/* <NewsLetter /> */}
        <NewsCarousel />
        {/* <NewCarousel /> */}
        {/* <NewsTicker /> */}
        {/* <div className="w-full flex justify-center items-center">
          <EventName />
        </div> */}
        {/* <ContactUs /> */}
        <FooterHolder />
      </div>
    </main>
  );
}
