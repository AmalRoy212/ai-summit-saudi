"use client";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sponsor.css";
import { managingSponsors } from "@/constants/sponsorsDataProvider";
import SponsordsData from "@/ui/sub/index/sponsors/SponsordsData";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { Button, Modal } from "antd";
import Typography from "@/ui/sub/headers/Typography";

function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        onClick={showModal}
        style={{ zIndex: 99 }}
        className="w-full flex items-center md:flex-row flex-col justify-center min-h-52 cursor-pointer"
      >
        <SponsordsData imgSrc="uic.jpg" />
      </div>
      <Modal
        title="UIC"
        footer={false}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <p>
          Utrecht IT Consulting is an IT consulting and services company
          headquartered in the Netherlands, with a global presence in the United
          States, Saudi Arabia, Oman, the UAE, and India. We offer a wide range
          of IT solutions, specializing in data management, digital
          transformation, and enterprise IT services. UIC is Technology Partner
          with Denodo, a leader in data management. The award-winning Denodo
          Platform is the leading logical data management platform, delivering
          data in the language of business, at the speed of business, for all
          data-related initiatives. With customers achieving over 400% ROI and
          realizing millions in benefits, Denodo's solutions enable payback in
          less than six months. Enterprises across 30+ industries globally rely
          on Denodo to accelerate their digital transformation.
        </p>
        <p>
          To learn more, please visit:{" "}
          <a
            target="_blank"
            className="text-blue-600"
            href="https://utrechtitconsulting.com/"
          >
            https://utrechtitconsulting.com/
          </a>
        </p>
      </Modal>
    </>
  );
}

function Sponsors() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div id="sponsors&partners" className="mainContainer">
      <Typography first="SPONSORS" middle="&" last="PARTNERS" />

      <div data-aos="zoom-in" className="w-full flex flex-col gap-y-6 justify-center items-center mb-10">
        <h4 className="text-center text-lg text-white">
          <span className="px-5 py-1 border rounded-xl bg-gradient-to-r from-purple-500/70 to-cyan-500/70">
            KNOWLEDGE PARTNER
          </span>
        </h4>
        <SponsordsData imgSrc="logo1.jpeg" />
      </div>

      <div data-aos="zoom-in" className="w-full flex flex-col gap-y-6 justify-center items-center mb-10">
        <h4 className="text-center text-lg text-white">
          <span className="px-5 py-1 border rounded-xl bg-gradient-to-r from-purple-500/70 to-cyan-500/70">
            LEAD SPONSORS
          </span>
        </h4>
        <div className="w-full flex gap-x-6 md:flex-row flex-col justify-center items-center">
          <SponsordsData imgSrc="logo2.jpeg" />
          <SponsordsData imgSrc="logo3.jpeg" />
          <SponsordsData imgSrc="logo4.jpeg" />
        </div>
      </div>

      <div data-aos="zoom-in" className="w-full flex flex-col gap-y-6 justify-center items-center mb-10">
        <h4 className="text-center text-lg text-white">
          <span className="px-5 py-1 border rounded-xl bg-gradient-to-r from-purple-500/70 to-cyan-500/70">
            GOLD SPONSOR
          </span>
        </h4>
        <SponsordsData imgSrc="logo5.jpeg" />
      </div>

      <div data-aos="zoom-in" className="w-full flex flex-col gap-y-6 justify-center items-center mb-10">
        <h4 className="text-center text-lg text-white">
          <span className="px-5 py-1 border rounded-xl bg-gradient-to-r from-purple-500/70 to-cyan-500/70">
            ROUNDTABLE PARTNER
          </span>
        </h4>
        <div className="w-full flex md:flex-row flex-col justify-center items-center">
          <div className="flex flex-row md:-ml-5">
            <span className="ml-5">
              <SponsordsData imgSrc="logo6.jpeg" />
            </span>
            <span className="-ml-5">
              <SponsordsData imgSrc="logo7.jpeg" />
            </span>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="w-full flex flex-col gap-y-6 justify-center items-center mb-10">
        <h4 className="text-center text-lg text-white">
          <span className="px-5 py-1 border rounded-xl bg-gradient-to-r from-purple-500/70 to-cyan-500/70">
            BUSINESS AI PARTNER
          </span>
        </h4>
        <SponsordsData imgSrc="logo8.jpeg" />
      </div>

      <div data-aos="zoom-in" className="w-full flex flex-col gap-y-6 justify-center items-center mb-10">
        <h4 className="text-center text-lg text-white">
          <span className="px-5 py-1 border rounded-xl bg-gradient-to-r from-purple-500/70 to-cyan-500/70">
            EXHIBITING PARTNER
          </span>
        </h4>
        <div className="w-full flex gap-x-6 md:flex-row flex-col justify-center items-center">
          <SponsordsData imgSrc="logo9.jpeg" />
          <SponsordsData imgSrc="logo10.jpeg" />
        </div>
      </div>

      <div data-aos="zoom-in" className="w-full flex flex-col gap-y-6 justify-center items-center mb-10">
        <h4 className="text-center text-lg text-white">
          <span className="px-5 py-1 border rounded-xl bg-gradient-to-r from-purple-500/70 to-cyan-500/70">
            BI & ANALYTICS PARTNER
          </span>
        </h4>
        <SponsordsData imgSrc="logo11.jpeg" />
      </div>

      <div data-aos="zoom-in" className="w-full flex flex-col gap-y-6 justify-center items-center mb-10">
        <h4 className="text-center text-lg text-white">
          <span className="px-5 py-1 border rounded-xl bg-gradient-to-r from-purple-500/70 to-cyan-500/70">
            ASSOCIATION PARTNER
          </span>
        </h4>
        <div className="w-full flex gap-x-6 md:flex-row flex-col justify-center items-center">
          <SponsordsData imgSrc="logo12.jpeg" />
          <SponsordsData imgSrc="logo13.jpeg" />
          <SponsordsData imgSrc="logo14.jpeg" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
