import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/main/navbar/Navbar";
import Footer from "@/ui/main/footer/Footer";

const logo = "https://capstonemiddleeast.com/images/logos/logo.jpeg";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intelligent AI, Data, and Automation Summit",
  icons: logo,
  description:
    "Intelligent AI, Data, and Automation Summit | 2-3 july 2025 | Saudi Arabia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={logo} type="image/jpeg" />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <div className="w-full h-screen flex items-center justify-center">
          <img
            className="w-1/2 h-screen object-contain"
            src="https://daru-capital.com/wp-content/uploads/2022/11/under-construction-pages-1-image-library.jpg"
            alt=""
          />
        </div> */}
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
