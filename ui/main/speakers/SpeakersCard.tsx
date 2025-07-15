import React from "react";

interface SpeakerCardProps {
  imageSrc: string;
  name: string;
  title: string;
  organization: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  imageSrc,
  name,
  title,
  organization,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="flex flex-col h-[300px] items-center p-4 max-w-xs w-full rounded-xl shadow-lg bg-white transform transition duration-300 ease-in-out hover:scale-105">
        <img
          src={imageSrc}
          alt={name}
          className="w-40 h-40 object-cover rounded-full mt-4"
        />
        <div className="flex flex-col min-h-[150px] justify-between text-center mt-4 px-4 bg-slate-100 w-full p-4 rounded-lg shadow-md h-full transition-all duration-300 ease-in-out hover:bg-slate-300 hover:w-full">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{title}</p>
          <p className="text-sm text-gray-500 mt-1 pb-5">{organization}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
