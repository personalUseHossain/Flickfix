import Image from "next/image";
import React from "react";
import "@/public/CSS/Credit.css";
import IMDB_LOGO from "@/public/Image/imdb.png";

export default function Season_Details(props) {
  return (
    <div>
      <h1 className="text-5xl mt-20">Seasons</h1>
      <div
        className={
          (props.seasons &&
            props.seasons.length < 5 &&
            "seasons flex gap-5 overflow-x-scroll") ||
          "seasons grid grid-flow-col gap-5 overflow-x-scroll"
        }
      >
        {props.seasons &&
          props.seasons.map((season) => (
            <div className="my-20 w-60" key={season.id}>
              <img
                className="rounded-lg"
                src={
                  season.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${season.poster_path}`
                    : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg"
                }
                alt="image"
                height={100}
                width={500}
              />
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-2xl overflow-ellipsis">
                  {season.name.length > 10
                    ? season.name.slice(0, 10)
                    : season.name}
                </h1>
                <p>{season.episode_count} episodes</p>
              </div>
              <div className="flex gap-5 items-center">
                <Image
                  className="rounded-sm w-9 h-5"
                  src={IMDB_LOGO}
                  alt="IMBD"
                  height={40}
                  width={40}
                />
                <p>{season.vote_average}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
