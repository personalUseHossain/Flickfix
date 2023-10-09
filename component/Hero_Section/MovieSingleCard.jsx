import React from "react";
import Image from "next/image";
import IMDB_LOGO from "@/public/Image/imdb.png";
import Link from "next/link";

export default function PopularSingleGameCard(props) {
  return (
    <Link
      // style={{
      //   transform: `translateX(-${props.transform}%)`,
      //   transition: ".2s",
      // }}
      href={
        props.details == "tv"
          ? `/series/details/${props.movie.id}?details=${props.details}`
          : `/movie/details/${props.movie.id}?details=${props.details}`
      }
    >
      <div key={props.movie.id} className="flex flex-col single_movie">
        <img
          className="object-cover rounded-lg h-96 w-full"
          src={
            props.movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`
              : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg"
          }
          alt="Movie Image"
          width={200}
          height={300}
        />

        <div className="grid gap-2 w-52">
          <h1 className="text-3xl mt-5 movie-title ">
            {props.movie.title ? props.movie.title : props.movie.original_name}
          </h1>
          <p className="movie-overview">
            {props.movie.overview && props.movie.overview.slice(0, 50) + "..."}
          </p>
          <div className="flex gap-5 items-center">
            <Image
              className="rounded-sm w-9 h-5"
              src={IMDB_LOGO}
              alt="IMBD"
              height={40}
              width={40}
            />
            <p>{props.movie.vote_average}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
