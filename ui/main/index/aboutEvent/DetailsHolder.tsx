"use client";

import React from "react";
import DetailsProvider from "@/ui/sub/index/aboutEvent/DetailsProvider";
import Typography from "@/ui/sub/headers/Typography";
import Occation from "@/ui/sub/index/aboutEvent/Occation";

const Encryption = () => {
  return (
    <div className="w-[100%] overflow-hidden mt-[3rem]">
      <Typography first="ABOUT" middle="THE" last="CONFERENCE" />
      <DetailsProvider />
      <Occation />
    </div>
  );
};

export default Encryption;
