"use client";
import {
  faFilm,
  faPhotoFilm,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "@/public/CSS/SingleMovie.css";
import Credit from "@/component/Credit";
import Recomended from "@/component/Recomended";
import { MyContext } from "@/app/layout";

export default function Page(id) {
  const requested_id = id.params.id;
  const details = id.searchParams.details;
  console.log(id);
  const { isSideBarOpen } = useContext(MyContext);
  const [movieDetails, setMovieDetails] = useState({}); // Initialize as an empty object

  async function fetchData() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${requested_id}?api_key=db9fc15e4392ee900f12fcb5246c12bf`
    );
    const res = await req.json();
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      ...res,
    }));
  }

  async function getMovieVideo() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${requested_id}/videos?api_key=db9fc15e4392ee900f12fcb5246c12bf`
    );
    const res = await req.json();
    let video =
      res.results &&
      res.results.filter((video) => {
        return video.type == "Trailer";
      });

    video = video[0];
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      video: video,
    }));
  }
  async function recomended() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${requested_id}/recommendations?api_key=db9fc15e4392ee900f12fcb5246c12bf`
    );
    const res = await req.json();

    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      recomended: res.results,
    }));
  }
  async function getCredits() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${requested_id}/credits?api_key=db9fc15e4392ee900f12fcb5246c12bf`
    );
    const res = await req.json();
    // const credit = res.cast;
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      credit: res.cast,
    }));
  }

  useEffect(() => {
    fetchData();
    getMovieVideo();
    getCredits();
    recomended();
  }, []);

  return (
    <div
      className={
        (isSideBarOpen &&
          " movie_container bg-slate-950 text-white sidebaropen  overflow-hidden") ||
        " movie_container bg-slate-950 text-white overflow-hidden"
      }
    >
      <div className="inner_movie_container">
        <div className="flex gap-10 items-center">
          <h1 className="text-5xl mb-2">{movieDetails.original_title}</h1>
          <p
            style={{ border: "1px solid white" }}
            className="rounded-lg h-10 p-2"
          >
            {movieDetails.status}
          </p>
        </div>
        <p className="mb-5">{movieDetails.tagline}</p>
        <div className="flex gap-5 mb-5">
          <p>{movieDetails.first_air_date}</p>
          <p>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar} />{" "}
            {movieDetails.vote_average}
          </p>
          <p>{movieDetails.runtime}m</p>
        </div>
        <div className="movie_image_video_container">
          <img
            className="movie_image"
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg"
            }
            alt="Movie Image"
          />
          {(movieDetails.video && (
            <>
              <ReactPlayer
                className="movie_video"
                url={`https://www.youtube.com/watch?v=${
                  movieDetails.video && movieDetails.video.key
                }`}
              />
            </>
          )) || (
            <>
              <img
                className="movie-video"
                src={
                  movieDetails.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`
                    : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg"
                }
                alt="Movie Image"
              />
            </>
          )}
          <div className="show_image_video">
            <div className="flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon className="text-2xl" icon={faPhotoFilm} />
              <h1>99+ Photos</h1>
            </div>
            <div className="flex flex-col items-center gap-2 justify-center">
              <FontAwesomeIcon className="text-2xl" icon={faFilm} />
              <h1>20 Videos</h1>
            </div>
          </div>
        </div>
        <div className="small_show_image_video">
          <div className="flex flex-col items-center justify-center gap-2">
            <FontAwesomeIcon className="text-2xl" icon={faPhotoFilm} />
            <h1>99+ Photos</h1>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <FontAwesomeIcon className="text-2xl" icon={faFilm} />
            <h1>20 Videos</h1>
          </div>
        </div>
        <div className="flex gap-2 mt-5 mb-5 genres">
          {movieDetails.genres &&
            movieDetails.genres.map((category) => {
              return (
                <p
                  key={category.id}
                  style={{ border: "1px solid white" }}
                  className="rounded-lg p-1"
                >
                  {category.name}
                </p>
              );
            })}
        </div>
        <div className="flex gap-5 items-end mt-5">
          <img
            className="movie_image_sm"
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                : "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fb3ef66312333.5691dd2253378.jpg"
            }
            alt="Movie Image"
          />
          <div>
            <p>{movieDetails.overview}</p>
            <div className="flex gap-2 mt-5 mb-5 genres_sm">
              {movieDetails.genres &&
                movieDetails.genres.map((category) => {
                  return (
                    <p
                      key={category.id}
                      style={{ border: "1px solid white" }}
                      className="rounded-lg p-1"
                    >
                      {category.name}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
        <h1
          style={{ margin: "1rem 0", borderBottom: "1px solid whitesmoke" }}
          className="text-3xl p-5"
        >
          Movie Information
        </h1>
        <div className="grid gap-7 mb-20 ">
          <div className="flex gap-10 p-1 justify-between">
            <b>Language</b>
            <div className="flex gap-2 mr-5">
              {movieDetails.spoken_languages &&
                movieDetails.spoken_languages.map((lang) => {
                  return (
                    <p key={lang.name} className=" p-1">
                      {lang.english_name}
                    </p>
                  );
                })}
            </div>
          </div>
          <div className="flex gap-10  justify-between mr-5">
            <b>Budget</b>
            <div>
              <p>{movieDetails.budget}$</p>
            </div>
          </div>
          <div className="flex gap-10  justify-between mr-5">
            <b>Revenue</b>
            <div>
              <p>{movieDetails.revenue}$</p>
            </div>
          </div>
          <div className="flex gap-10  justify-between mr-5">
            <b>Popularity</b>
            <div>
              <p>
                {movieDetails.popularity} <FontAwesomeIcon icon={faUser} />
              </p>
            </div>
          </div>
        </div>
        <Credit credit={movieDetails.credit} />
        <Recomended movies={movieDetails.recomended} />
      </div>
    </div>
  );
}
