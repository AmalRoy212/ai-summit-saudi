import React from "react";
import "./Config.css";

interface KeyConferenceHeadingProps {
  backgroundName: string;
  configHeadingOne: string;
}

export default function KeyConferenceHeading({
  backgroundName,
  configHeadingOne,
}: KeyConferenceHeadingProps) {
  return (
    <div className="hero-section">
      <div className="background-text">{backgroundName}</div>
      <div className="foreground-container">
        <div className="green-bar" />
        <h1 className="foreground-text">{configHeadingOne}</h1>
      </div>
    </div>
  );
}
