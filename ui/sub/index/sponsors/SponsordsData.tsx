import React from "react";
import '@/ui/main/index/sponsors/sponsor.css'

function SponsordsData({imgSrc} : any) {
  return (
    <div className="containe md:px-0 px-5 rounded-xl overflow-hidden flex items-center justify-center md:w-[230px] md:h-[170px] w-[150px] h-[150px]">
      <img className="object-contain" src={`/images/sponsors/${imgSrc}`} />
    </div>
  ); 
}

export default SponsordsData;
