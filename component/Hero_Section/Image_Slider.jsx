"use client";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import "@/public/CSS/HeroSectionImageSlider.css";

//image

import IMDB_LOGO from "@/public/Image/imdb.png";
import USA_FLAG from "@/public/Image/usa.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Image_Slider() {
  const [sliderStyle, setSliderStyle] = useState(0);
  const [upComingMovies, setUpcomingMovies] = useState([]);
  async function fetchData() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    setUpcomingMovies(res.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  let sliderImageCount = 0;
  useEffect(() => {
    const interval = setInterval(() => {
      sliderImageCount++;
      if (sliderImageCount === 6) {
        sliderImageCount = 0;
        setSliderStyle(0);
      } else {
        setSliderStyle(sliderImageCount * 100);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [sliderImageCount]);

  return (
    <>
      {upComingMovies.length > 1 ? (
        <div
          style={{ transform: `translateX(-${sliderStyle}vw)` }}
          className="hero-image-slider-container grid grid-flow-col transition-all duration-1000 mb-10"
        >
          {upComingMovies &&
            upComingMovies.map((movie) => {
              return (
                <div
                  style={{ height: "70vh" }}
                  className="flex relative w-screen overflow-hidden"
                  key={movie.id} // Add a unique key
                >
                  <img
                    className="hero-section-image-slider h-full w-screen object-cover object-left sm:object-top absolute rounded-lg z-10"
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt="Image"
                  />
                  <div className="slider-content pl-10 relative z-20 h-full flex flex-col gap-10 justify-end">
                    <h1 className="text-4xl sm:text-6xl">
                      {movie.title || <Skeleton />}
                    </h1>
                    <div className="flex gap-3 items-center">
                      <Image
                        src={IMDB_LOGO.src}
                        alt="IMBD"
                        height={40}
                        width={40}
                      />
                      <div className="flex items-center gap-2">
                        <p>{movie.vote_average || <Skeleton />}</p>
                        <FontAwesomeIcon icon={faStar} />
                      </div>
                      <div className="flex items-center gap-3 ml-5">
                        <Image
                          src={USA_FLAG.src}
                          alt=""
                          className="rounded-full"
                          width={30}
                          height={30}
                        />
                        <p>{movie.original_language == "en" && "English"}</p>
                      </div>
                    </div>
                    <Link href={`/movie/details/${movie.id}?details=movie`}>
                      <button className="p-1 mb-20 w-20 bg-red-500 rounded-md">
                        Watch
                      </button>
                    </Link>
                  </div>
                  <div className="hero-section-image-slider-overlay absolute left-0 top-0 h-96 w-1/2 z-10"></div>
                </div>
              );
            })}
        </div>
      ) : (
        <Skeleton style={{ height: "70vh", width: "100vw" }} />
      )}
    </>
  );
}
