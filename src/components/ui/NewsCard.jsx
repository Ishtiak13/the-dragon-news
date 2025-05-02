
import React  from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { GoStarFill } from "react-icons/go";

const NewsCard = ({ news }) => {
  const words = news.details?.split(" ") || [];
  const preview = words.slice(0, 40).join(" ") + "...";
  const shouldTruncate = words.length > 40;

  const stars = [];

  for (let i = 0; i < news.rating.number; i++) {
    stars.push(<GoStarFill key={i} className="text-yellow-400 text-2xl" />);
  }

  console.log(news);
  return (
    <div>
      <ul className="list bg-base-200 rounded-t-lg">
        <li className="list-row">
          <div>
            <img className="size-10 rounded-box" src={news.author.img} />
          </div>
          <div>
            <div>{news.author.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {news.author.published_date.split("T")[0]}
            </div>
          </div>
          <button className="btn btn-square btn-ghost">
            <CiBookmark />
          </button>
          <button className="btn btn-square btn-ghost">
            <CiShare2 />
          </button>
        </li>
      </ul>
      <div className="inner-border-sides p-6  rounded-b-box">
        <h2 className="text-xl font-bold">{news.title}</h2>
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="rounded-xl my-4 w-full h-[300px] object-cover"
        />
        <article>
          <p className="text-accent">
            {!shouldTruncate ? news.details : preview}
          </p>
          {shouldTruncate && (
            <button
              className="text-[#FF8C47] font-semibold cursor-pointer "
            > Read More
            </button>
          )}
        </article>
        <hr className="border-black/20 my-6" />
        <div className="text-accent flex justify-between items-center">
          <div className="flex items-center gap-2">
          {stars}
            <p className="text-2xl font-semibold">
              {news.rating.number}
            </p>
          </div>
          <div className=" flex items-center gap-2 text-xl font-medium">
            <FaEye />
            <p>{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
