import React, { useEffect, useRef } from "react";
import Carousel from "./NewsCarousel";
import NewsTicker from "./NewsTicker";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import NewCarousel from "./newCarousel";
import NewsCarousel from "./NewsCarousels";

const NewsLetter: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const maxScrollLeft =
          scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
        if (scrollRef.current.scrollLeft < maxScrollLeft) {
          scrollRef.current.scrollLeft += 10;
        } else {
          scrollRef.current.scrollLeft = 0;
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="md:w-[95%] max-w-7xl mx-auto flex flex-col md:mx-auto pt-5 md:px-5 rounded-2xl">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          NEWS & ARTICLES{" "}
        </span>
      </motion.div>
      {/* <div className="flex flex-col md:flex-row px-5 md:my-20  z-10">
        <div className="w-2/3">
          <Carousel />
        </div>
        <div className="w-1/3">
          <NewsTicker />
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row md:my-20 z-10 gap-x-5">
        <div className="w-full">
          {/* <NewCarousel /> */}
          {/* <NewsCarousel /> */}
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
