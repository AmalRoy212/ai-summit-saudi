// "use client";

// import React from "react";
// import { RxSewingPin, RxLinkedinLogo } from "react-icons/rx";
// import { IoHome } from "react-icons/io5";
// import { FaInstagram } from "react-icons/fa";
// import { FcAbout } from "react-icons/fc";
// import { FaXTwitter } from "react-icons/fa6";
// import { usePathname } from "next/navigation";
// import { HiArrowCircleRight } from "react-icons/hi";

// const Footer = () => {
//   const pathname = usePathname();

//   return (
//     <div
//       className={`bg-transparent text-gray-200 shadow-lg p-[15px]  mt-${
//         pathname === "/delegates" ? 0 : 10
//       } cursor-pointer`}
//     >
//       <div className="w-full rounded-xl p-10 flex flex-col items-center justify-center m-auto bg-slate-900">
//         <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
//           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">About IDA-Summit</div>
//             <p
//               data-aos="fade-right"
//               data-aos-duration={200}
//               className="flex flex-row items-center my-[15px] cursor-pointer"
//             >
//               <RxSewingPin />
//               <span className="text-[15px] ml-[6px]">Riyadh, Saudi Arabia</span>
//             </p>
//             {/* <div data-aos="fade-right" data-aos-duration={300} className="font-bold text-[16px]">GFES</div> */}
//             <a data-aos="fade-right" data-aos-duration={500} href="#about-us">
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <FcAbout />
//                 <span className="text-[15px] ml-[6px]">About Us</span>
//               </p>
//             </a>
//             <a data-aos="fade-right" data-aos-duration={400} href="#hero">
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <IoHome />
//                 <span className="text-[15px] ml-[6px]">Event</span>
//               </p>
//             </a>
//           </div>

//           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">Registrations</div>
//             <a data-aos="fade-right" data-aos-duration={600} href="/delegates">
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <HiArrowCircleRight />
//                 <span className="text-[15px] ml-[6px]">Delegates</span>
//               </p>
//             </a>
//             <a data-aos="fade-right" data-aos-duration={700} href="/sponsors">
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <HiArrowCircleRight />
//                 <span className="text-[15px] ml-[6px]">Sponsors</span>
//               </p>
//             </a>
//             <a data-aos="fade-right" data-aos-duration={800} href="/speakers">
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <HiArrowCircleRight />
//                 <span className="text-[15px] ml-[6px]">Speakers</span>
//               </p>
//             </a>
//           </div>

//           {/* <div className="min-w-[200px] h-auto md:h-[185px] flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">Social Media</div>
//             <a
//               data-aos="fade-right"
//               data-aos-duration={600}
//               target="_blank"
//               href="https://www.instagram.com/genfinityglobal/"
//             >
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <FaInstagram />
//                 <span className="text-[15px] ml-[6px]">Instagram</span>
//               </p>
//             </a>
//             <a
//               data-aos="fade-right"
//               data-aos-duration={700}
//               target="_blank"
//               href="https://twitter.com/GenfinityGlobal"
//             >
//               <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                 <FaXTwitter />
//                 <span className="text-[15px] ml-[6px]">Twitter</span>
//               </p>
//             </a>
//             <a
//               data-aos="fade-right"
//               data-aos-duration={800}
//               target="_blank"
//               href="https://www.linkedin.com/company/capstonemena"
//             >
//               <p className="flex flex-row items-center my-[15px] justify-between w-full cursor-pointer">
//                 <RxLinkedinLogo />
//                 <span className="text-[15px] ml-[6px]">Linkedin</span>
//               </p>
//             </a>
//           </div> */}

//           <div className="min-w-[200px] h-[215px] flex flex-col items-center justify-start">
//             <p className="flex flex-row items-center my-[15px] cursor-pointer">
//               <span className="text-[15px] font-bold ml-[6px]">Contact Us</span>
//             </p>
//             <p
//               data-aos="fade-right"
//               data-aos-duration={900}
//               className="flex flex-row items-center cursor-pointer"
//             >
//               <span className="text-[15px] ml-[6px]">
//                 {" "}
//                 harshad.Ibrahim@capstonemiddleeast.com
//               </span>
//             </p>
//             <br />
//             <p
//               data-aos="fade-right"
//               data-aos-duration={900}
//               className="flex flex-col mt-2 items-center cursor-pointer"
//             >
//               FOR SPEAKING ENQUIRIES PLEASE CONTACT <br />
//               <span className="text-[15px] ml-[6px]">
//                 {" "}
//                 mohammed@capstonemiddleeast.com
//               </span>
//             </p>
//             <p
//               data-aos="fade-right"
//               data-aos-duration={900}
//               className="flex flex-col mt-5 items-center cursor-pointer"
//             >
//               FOR SPONSORSHIP ENQUIRIES PLEASE CONTACT <br />
//               <span className="text-[15px] ml-[6px]">
//                 {" "}
//                 Ryan.jeffrey@capstonemiddleeast.com
//               </span>
//             </p>
//           </div>

//           <div className="min-w-[200px] h-auto md:h-[185px] flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">ORGANIZED BY</div>
//             <img src="/images/logos/logo.png" className="w-44 h-44 object-contain" alt="" />
//             <a
//               data-aos="fade-right"
//               data-aos-duration={800}
//               target="_blank"
//               href="https://www.linkedin.com/company/capstonemena"
//             >
//               <p className="flex flex-row items-center my-[15px] justify-between w-full cursor-pointer">
//                 <RxLinkedinLogo />
//                 {/* <span className="text-[15px] ml-[6px]">Linkedin</span> */}
//               </p>
//             </a>
//           </div>
//         </div>

//         <div className="text-[15px] mt-14 text-center">
//           <a href="/privacy-policy">Privacy & Policy</a> and{" "}
//           <a href="/terms-conditions">Terms & Conditions</a>
//         </div>
//         <div className="text-[12px] font-thin text-center">
//           &copy; 2024 All rights reserved by Capstone
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

"use client";

import React from "react";
import { RxSewingPin, RxLinkedinLogo } from "react-icons/rx";
import { IoHome } from "react-icons/io5";
import { HiArrowCircleRight } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      className={`bg-gradient-to-r from-[#0c1222] via-[#10172b] to-black text-gray-100 shadow-lg p-10 mt-${
        pathname === "/delegates" ? 0 : 10
      }`}
    >
      <div className="container mx-auto max-w-6xl p-6 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column: About Us */}
        <div className="flex flex-col items-start space-y-6">
          <div className="font-bold text-sm text-white">About Us</div>
          {/* <a
            href="#about-us"
            className="text-xs text-gray-300 hover:text-purple-500 flex items-center"
          >
            <FcAbout className="mr-2" />
            Event Details
          </a> */}
          <a
            href="#hero"
            className="text-xs text-gray-300 hover:text-purple-500 flex items-center"
          >
            <IoHome className="mr-2" />
            About IDA-Summit
          </a>
          <p className="text-xs text-gray-300 flex items-center">
            <RxSewingPin className="mr-2" />
            Riyadh, Saudi Arabia
          </p>
        </div>

        {/* Middle Column: Registrations */}
        <div className="flex flex-col items-start space-y-6">
          <div className="font-bold text-sm text-white">Quick Links</div>
          <a
            href="/delegates"
            className="text-xs text-gray-300 hover:text-purple-500 flex items-center"
          >
            <HiArrowCircleRight className="mr-2" />
            Delegates Registration
          </a>
          <a
            href="/sponsors"
            className="text-xs text-gray-300 hover:text-purple-500 flex items-center"
          >
            <HiArrowCircleRight className="mr-2" />
            Sponsors Enquiries
          </a>
          <a
            href="/speakers"
            className="text-xs text-gray-300 hover:text-purple-500 flex items-center"
          >
            <HiArrowCircleRight className="mr-2" />
            Speakers Enquiries
          </a>
        </div>

        {/* Right Column: Contact */}
        <div className="flex flex-col items-start space-y-6">
          <div className="font-bold text-sm text-white">Contact Us</div>
          <p className="text-xs text-gray-300">
            For Speaking Enquiries: <br />
            mohammed@capstonemiddleeast.com
          </p>
          <p className="text-xs text-gray-300">
            For Sponsorship Enquiries: <br />
            Ryan.jeffrey@capstonemiddleeast.com
          </p>
        </div>

        {/* Organized By Section */}
        <div className="flex flex-col items-start space-y-6">
          <div className="font-bold text-sm text-white">Organized By</div>
          <img
            src="/images/logos/logo.png"
            className="w-36 object-contain mb-4"
            alt="Event Logo"
          />
          <a
            href="https://www.linkedin.com/company/capstonemena"
            target="_blank"
            className="text-xs text-gray-300 justify-center hover:text-purple-500 flex items-center w-full"
          >
            <RxLinkedinLogo className="mr-2" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        <div>
          <a href="/privacy-policy" className="mx-2 hover:text-purple-500">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-conditions" className="mx-2 hover:text-purple-500">
            Terms & Conditions
          </a>
        </div>
        <div className="mt-2 text-xs">
          © 2024 All rights reserved by Capstone
        </div>
      </div>
    </div>
  );
};

export default Footer;
