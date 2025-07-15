// "use client";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { ThreeDCard } from "../index/3dCards/3D_Speaker";
// import ProfileCard from "@/ui/sub/index/speakers/SpeakersCardComp";
// import Headers from "@/ui/sub/headers/Headers";
// import NewProfileCard from "@/ui/sub/index/speakers/NewSpeaker";
// import Link from "next/link";
// import SpeakerCard from "./SpeakersCard";

// // Profile data array
// const profiles = [
//   {
//     name: "Dr.Khaled Alqahtani",
//     title: "Executive Director of Data & Statistics",
//     company: "NEOM",
//     organization: "OMAN",
//     image: "/images/speakers/speaker54.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Umran Rafi",
//     title: "Director of Data & AI",
//     company: "NEOM",
//     organization: "OMAN",
//     image: "/images/speakers/speaker50.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Ismail A. Almakrami",
//     title: "Vice President of Data Management",
//     company: "Emkan Finance",
//     organization: "OMAN",
//     image: "/images/speakers/img2.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Dr. Mohammed Al Dighriri",
//     title: "General Director of Data Modeling and Analysis",
//     company: "National Center for Environmental Compliance (NCECKSA)",
//     organization: "OMAN",
//     image: "/images/speakers/speaker33.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   // {
//   //   name: "Ghadah Almalki",
//   //   title: "Director of Data & AI",
//   //   company: "Confidential Government",
//   //   organization: "OMAN",
//   //   image: "/images/speakers/img6.png", // Add correct paths to images
//   //   linkedIn: "#", // Replace with actual LinkedIn profile links
//   //   marginTP: 0,
//   // },
//   {
//     name: "Nawaf Alghamdi",
//     title: "Director of Data and AI",
//     company: "Council Of Health Insurance",
//     com: "",
//     organization: "OMAN",
//     image: "/images/speakers/img11.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   // {
//   //   name: "Neeti Khatri",
//   //   title: "AVP Data & Insights",
//   //   company: "Public Investment Fund (PIF)",
//   //   organization: "OMAN",
//   //   image: "/images/speakers/speaker34.png",
//   //   linkedIn: "#",
//   //   marginTP: 0,
//   // },
//   {
//     name: "Muqbil Almuqbil",
//     title: "Director of Data Management",
//     company: "Saudi Food & Drug Authority (SFDA)",
//     com: "",
//     organization: "",
//     image: "/images/speakers/img3.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "DR. Manal AlNemari",
//     title: "Digital Technology Advisor",
//     company: "Ministry of Health",
//     com: "",
//     organization: "OMAN",
//     image: "/images/speakers/speaker45.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Turki AlMukhlfi",
//     title: "Director of the Data Management",
//     company: "Confidential",
//     organization: "OMAN",
//     image: "/images/speakers/img12.png",
//     linkedIn: "#",
//     marginTP: 10,
//   },
//   {
//     name: "Dr. Jihad Al Wahshi ",
//     title: "Head of Data Management",
//     company: "Central Bank of Oman (CBO)",
//     organization: "OMAN",
//     image: "/images/speakers/speaker32.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Filip Nekvinda",
//     title: "Chief Information & Digital Officer",
//     company: "Abdul Latif Jameel Enterprises",
//     organization: "OMAN",
//     image: "/images/speakers/speaker31.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   // {
//   //   name: "Mushtaq Khan",
//   //   title: "General Manager of Automation & Digital Transformation",
//   //   company: "National Water Company(NWC)",
//   //   organization: "OMAN",
//   //   image: "/images/speakers/img7.png",
//   //   linkedIn: "#",
//   //   marginTP: 0,
//   // },
//   {
//     name: "DR. Louai Alarabi",
//     title: "Chief Data Analytics Engineer",
//     company: "Confidential",
//     organization: "OMAN",
//     image: "/images/speakers/speaker36.png",
//     linkedIn: "#",
//     marginTP: 0,
//     fit: "cover",
//   },
//   {
//     name: "Abbasi Poonawala",
//     title: "Executive Director Enterprise Architecture",
//     company: "Alinma Bank",
//     organization: "OMAN",
//     image: "/images/speakers/speaker35.png",
//     linkedIn: "#",
//     marginTP: 0,
//     fit: "cover",
//   },
//   // {
//   //   name: "Muhammad Zohaib",
//   //   title: "Director BI & Data Analytics",
//   //   company: "Salam Mobile",
//   //   organization: "OMAN",
//   //   image: "/images/speakers/speaker37.png",
//   //   linkedIn: "#",
//   //   marginTP: 0,
//   // },
//   {
//     name: "Mushtaq Ahmed",
//     title: "Director Enterprise Architecture & Digital Strategy",
//     company: "Saudi Post (SPL)",
//     organization: "OMAN",
//     image: "/images/speakers/speaker43.png",
//     linkedIn: "#",
//     marginTP: 0,
//     // fit: "cover",
//   },
//   {
//     name: "Ayub Aldakael",
//     title: "Director of Enterprise Management",
//     company: "Confidential Government",
//     organization: "OMAN",
//     image: "/images/speakers/speaker42.png",
//     linkedIn: "#",
//     marginTP: 0,
//     // fit: "cover",
//   },
//   {
//     name: "Ángel Narciso",
//     title: "Senior Director  Data , Analytics & AI",
//     company: "Takamol Holding",
//     organization: "OMAN",
//     image: "/images/speakers/speaker40.png",
//     linkedIn: "#",
//     marginTP: 0,
//     // fit: "cover",
//   },
//   {
//     name: "Ali Hummadi",
//     title: "Executive Director of Digitalization",
//     company: "ARASCO",
//     organization: "OMAN",
//     image: "/images/speakers/speaker44.png",
//     linkedIn: "#",
//     marginTP: 0,
//     // fit: "cover",
//   },
//   {
//     name: "Mohammad Alomair",
//     title: "Chief Data Officer",
//     company: "Saudi Irrigation Orgnaization",
//     organization: "OMAN",
//     image: "/images/speakers/speaker41.png",
//     linkedIn: "#",
//     marginTP: 0,
//     // fit: "cover",
//   },
//   {
//     name: "MOHAMMAD SHALAN",
//     title: "VP of Professional Development & Training",
//     company: "PMI KSA Chapter",
//     organization: "OMAN",
//     image: "/images/speakers/speaker39.png",
//     linkedIn: "#",
//     marginTP: 0,
//     fit: "cover",
//   },
//   {
//     name: "Sivakumar Seshadri",
//     title: "Chief Digital Officer",
//     company: "General organization of Social Insurance (GOSI)",
//     organization: "OMAN",
//     image: "/images/speakers/img8.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Ladle Patel",
//     title: "Senior Advisor, Advanced Data Analytics",
//     company: "Arab National Bank",
//     com: "",
//     organization: "OMAN",
//     image: "/images/speakers/img5.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Nezar Alturki",
//     title: "Chief Information Officer",
//     company: "Ministry of National Guard",
//     organization: "OMAN",
//     image: "/images/speakers/img1.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Dr. Debashis Dutta",
//     title: "Senior Advisor -Risk Group",
//     company: "Saudi EXIIM Bank",
//     organization: "OMAN",
//     image: "/images/speakers/speaker38.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Dr. Fahad Almoqhim",
//     title: "Chief Information Officer",
//     company: "Saudi Accreditation Center",
//     organization: "OMAN",
//     image: "/images/speakers/speaker46.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Ruba Al Dhalaan",
//     title: "Director of Data Management & Statistics",
//     company: "King Saud Medical City (KSMC)",
//     organization: "OMAN",
//     image: "/images/speakers/speaker_plc.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Suzan Katamoura",
//     title: "Head of Data Management",
//     company: "King Abdullah City for Atomic and Renewable Energy (KACARE)",
//     organization: "OMAN",
//     image: "/images/speakers/speaker_plc.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Aamir Khalid Pirzada",
//     title: "Chief Information Officer",
//     company: "National Metal Manufacturing and Casting Company (Maadaniyah)",
//     organization: "OMAN",
//     image: "/images/speakers/speaker47.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Mansour Al Dammas",
//     title: "Chief Information Officer",
//     company: "King Khaled Eye Specialist Hospital (KKESH)",
//     organization: "OMAN",
//     image: "/images/speakers/speaker48.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   // {
//   //   name: "Sarah Koshak",
//   //   title: "Data Expert",
//   //   company: "General Authority For Statistics",
//   //   organization: "OMAN",
//   //   image: "/images/speakers/speaker49.png",
//   //   linkedIn: "#",
//   //   marginTP: 0,
//   // },
//   {
//     name: "ENG. DAUAA SHALABI",
//     title: " Digital Transformation Advisor",
//     company: "Confidential Government",
//     organization: "OMAN",
//     image: "/images/speakers/speaker52.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Mohammed Khalid",
//     title: "Group Chief Information & Digital Officer",
//     company: "Al Bassami International Business Group Co.",
//     organization: "OMAN",
//     image: "/images/speakers/speaker53.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Anas Mosa",
//     title: "Information Technology Director",
//     company: "PIF Projects",
//     organization: "OMAN",
//     image: "/images/speakers/speaker55.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Nahim Bassa",
//     title: "SVP, Group Head of Strategy & Transformation",
//     company: "Bank Aljazira",
//     organization: "OMAN",
//     image: "/images/speakers/speaker56.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Sanjeev Madavi",
//     title: "Chief Innovation Officer",
//     company: "Kale Logistics Solutions",
//     organization: "OMAN",
//     image: "/images/speakers/speaker57.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Saleh Al Robah",
//     title: "Digital and Technology Director",
//     company: "AWJ Holding Company",
//     organization: "OMAN",
//     image: "/images/speakers/speaker58.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
// ];

// // const profilesTwo = [
// //   {
// //     name: "Waqar Afzal",
// //     title: "Head of Data Science",
// //     company: " Medgulf Saudi Arabia",
// //     organization: "OMAN",
// //     image: "/images/speakers/img9.png",
// //     linkedIn: "#",
// //     marginTP: 0,
// //   },
// //   {
// //     name: "Dauaa Shalabi",
// //     title: "Digital Transformation Advisor",
// //     company: "Ministry of Transport and Logistic Services",
// //     organization: "OMAN",
// //     image: "/images/speakers/img10.png",
// //     linkedIn: "#",
// //     marginTP: 0,
// //   },
// //   {
// //     name: "DR.Jalal Alowibdi",
// //     title: "Director, Data Analysis & Business Intelligence Center",
// //     company: "Ministry of Hajj & Umrah",
// //     organization: "OMAN",
// //     image: "/images/speakers/img4.png",
// //     linkedIn: "#",
// //     marginTP: 0,
// //   },
// // ];

// const newSpearks = [
//   {
//     name: "Dr.Khaled Alqahtani",
//     title: "Executive Director of Data & Statistics",
//     company: "NEOM",
//     organization: "OMAN",
//     image: "/images/speakers/speaker54.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Umran Rafi",
//     title: "Director of Data & AI",
//     company: "NEOM",
//     organization: "OMAN",
//     image: "/images/speakers/speaker50.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Ismail A. Almakrami",
//     title: "Vice President of Data Management",
//     company: "Emkan Finance",
//     organization: "OMAN",
//     image: "/images/speakers/img2.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Nawaf Alghamdi",
//     title: "Director of Data and AI",
//     company: "Council Of Health Insurance",
//     com: "",
//     organization: "OMAN",
//     image: "/images/speakers/img11.png",
//     linkedIn: "#",
//     marginTP: 0,
//   },
//   {
//     name: "Ali Hummadi",
//     title: "Executive Director of Digitalization",
//     company: "ARASCO",
//     organization: "OMAN",
//     image: "/images/speakers/speaker44.png",
//     linkedIn: "#",
//     marginTP: 0,
//     // fit: "cover",
//   },
// ];

// const SpeakerProfiles: React.FC = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div
//       id="speakers"
//       className="w-full flex flex-col items-center mb-28 px-4 md:px-16 z-10"
//     >
//       <Headers first="OUR ESTEEMED" middle="SPEAKERS" last="" />
//       <div className="w-full overflow-x-auto py-5 px-2 hide-scrollbar">
//         <div className="flex justify-center items-center gap-4 w-max">
//           {newSpearks.map((item, index) => (
//             <div
//               key={index}
//               className="w-[500px] relative min-w-[300px] rounded-lg shadow-md"
//             >
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//                 data-aos-duration="1200"
//                 className="flex flex-col items-center m-4 rounded-lg overflow-hidden relative h-[400px]"
//               >
//                 {/* Use the previously created SpeakerCard component */}
//                 <SpeakerCard
//                   imageSrc={item.image}
//                   name={item.name}
//                   title={item.title}
//                   organization={item.organization}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Link
//         className="text-white font-bold bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-16 rounded-xl"
//         href="/all-speakers"
//       >
//         See All Speakers
//       </Link>
//     </div>
//   );
// };

// export default SpeakerProfiles;

import React from "react";
import SpeakerCard from "./SpeakersCard";

const SpeakerSection: React.FC = () => {
  const newSpearks = [
    {
      name: "Dr.Khaled Alqahtani",
      title: "Executive Director of Data & Statistics",
      company: "NEOM",
      organization: "OMAN",
      image: "/images/speakers/speaker54.png",
      linkedIn: "#",
      marginTP: 0,
    },
    {
      name: "Umran Rafi",
      title: "Director of Data & AI",
      company: "NEOM",
      organization: "OMAN",
      image: "/images/speakers/speaker50.png",
      linkedIn: "#",
      marginTP: 0,
    },
    {
      name: "Ismail A. Almakrami",
      title: "Vice President of Data Management",
      company: "Emkan Finance",
      organization: "OMAN",
      image: "/images/speakers/img2.png",
      linkedIn: "#",
      marginTP: 0,
    },
    {
      name: "Nawaf Alghamdi",
      title: "Director of Data and AI",
      company: "Council Of Health Insurance",
      com: "",
      organization: "OMAN",
      image: "/images/speakers/img11.png",
      linkedIn: "#",
      marginTP: 0,
    },
    {
      name: "Ali Hummadi",
      title: "Executive Director of Digitalization",
      company: "ARASCO",
      organization: "OMAN",
      image: "/images/speakers/speaker44.png",
      linkedIn: "#",
      marginTP: 0,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 gap-y-20 px-12 mb-20">
      {newSpearks.map((speaker, index) => (
        <div className="flex-grow w-[300px] h-full">
          <SpeakerCard
            key={index}
            imageSrc={speaker.image}
            name={speaker.name}
            title={speaker.title}
            organization={speaker.organization}
          />
        </div>
      ))}
    </div>
  );
};

export default SpeakerSection;
