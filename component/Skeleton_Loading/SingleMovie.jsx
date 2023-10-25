import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "@/public/CSS/SingleMovie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import SingleMovie from "./SingleMovieCard";

export default function Series() {
  return (
    <div className={" overflow-hidden movie_container bg-slate-950 text-white"}>
      <div className="inner_movie_container">
        <div className="flex gap-10 items-center">
          <h1 className="text-5xl mb-2">
            <Skeleton height={30} width={200} />
          </h1>
          <p className="rounded-lg p-2">
            <Skeleton height={15} width={30} />
          </p>
        </div>
        <p className="mb-5">
          <Skeleton count={1} width={300} />
        </p>
        <div className="flex gap-5 mb-5">
          <p>
            <Skeleton count={1} width={50} />
          </p>
          <p>
            <Skeleton count={1} width={50} />
          </p>
          <p>
            <Skeleton count={1} width={10} />
          </p>
        </div>
        <div className="movie_image_video_container">
          <Skeleton width={245} height={360} />
          <Skeleton width={560} height={360} />

          <div className="show_image_video">
            <Skeleton height={176} width={320} />
            <Skeleton height={176} width={320} />
          </div>
        </div>
        <div className="flex gap-2 mt-5 mb-5 genres">
          <Skeleton height={35} width={60} />
          <Skeleton height={35} width={60} />
          <Skeleton height={35} width={60} />
        </div>
        <div className=" flex gap-5 items-end mt-5">
          <div>
            <p>
              <Skeleton count={2} width={1000} />
            </p>
          </div>
        </div>
        <div className="flex gap-5 my-10">
          <Skeleton height={72} width={206} />
          <Skeleton height={72} width={206} />
        </div>
        <Skeleton height={400} width={1200} />
      </div>
    </div>
  );
}
