import React, { use } from "react";
import Marquee from "react-fast-marquee";
const breakingNewsPromise = fetch("/news.json").then((res) => res.json());
const LatestNews = () => {
  const breaking = use(breakingNewsPromise);


  return (
    <div className="flex gap-4 items-center bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} className="gap-4">
        {breaking.map(
          (news) =>
            news.others.is_today_pick && (
              
                <div className="flex items-center">
                <p key={news.id} className="font-bold cursor-default mx-4">
                  {news.title}
                </p>
                <span className="text-gray-500 font-bold">|</span>
                </div>
          
            )
        )}
      </Marquee>
    </div>
  );
};

export default LatestNews;
