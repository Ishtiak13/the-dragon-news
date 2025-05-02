import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-4 items-center bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} className="gap-4">
        <p className="font-bold cursor-default mx-4">
          Apple Unveils AI-Powered iPhone Features at WWDC 2025
        </p>
        <span className="text-gray-500 font-bold">|</span>
        <p className="font-bold cursor-default mx-4">
          NASA Confirms Manned Moon Mission Scheduled for Late 2025
        </p>
        <span className="text-gray-500 font-bold">|</span>
        <p className="font-bold cursor-default mx-4">
          OpenAI Releases GPT-5 Turbo With Major Performance Upgrades
        </p>
        <span className="text-gray-500 font-bold">|</span>
      </Marquee>
    </div>
  );
};

export default LatestNews;
