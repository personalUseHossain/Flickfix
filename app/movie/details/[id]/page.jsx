"use client";
import {
  faFilm,
  faHeart,
  faPhotoFilm,
  faPlus,
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
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Cookies from "universal-cookie";
import { useSession } from "next-auth/react";
import Series from "@/component/Skeleton_Loading/SingleMovie";

export default function Page(id) {
  const requested_id = id.params.id;
  const session = useSession();
  const [count, setCount] = useState({ photo: 0, video: 0 });
  const { isSideBarOpen } = useContext(MyContext);
  const cookies = new Cookies();
  const tmdb_session = cookies.get("tmdb_session");
  const [movieDetails, setMovieDetails] = useState({}); // Initialize as an empty object

  async function fetchData() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${requested_id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      ...res,
    }));
  }
  async function keyword() {
    const req = await fetch(
      `
      https://api.themoviedb.org/3/movie/${requested_id}/keywords?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      ...res,
    }));
  }

  async function getMovieVideo() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${requested_id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    setCount((prev) => ({ ...prev, video: res.results && res.results.length }));
    let video =
      res.results &&
      res.results.filter((video) => {
        return video.type == "Trailer";
      });

    video = video[0];
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      trailler: video,
    }));
  }
  async function recomended() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${requested_id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();

    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      recomended: res.results,
    }));
  }
  async function getCredits() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/${requested_id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    const images = [];
    images.push(res.backdrops);
    images.push(res.posters);
    images.push(res.logos);
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      credit: res.cast,
    }));
  }

  async function addToWatchList() {
    if (
      session.status == "authenticated" &&
      session.data &&
      session.data.user.id
    ) {
      const body = {
        media_type: "movie",
        media_id: requested_id,
        watchlist: true,
      };
      const req = await fetch(
        `https://api.themoviedb.org/3/account/${
          session && session.data.user.id
        }/watchlist?session_id=${tmdb_session}&api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const res = await req.json();
      if (res.success) {
        window.alert(`This movie has been added to watchlist`);
      } else if (!res.status) {
        window.alert("Failed to add on watchlist");
      }
    } else {
      window.alert("You have to Login with TMDB Account.");
    }
  }
  async function addToFavorite() {
    if (
      session.status == "authenticated" &&
      session.data &&
      session.data.user.id
    ) {
      const body = {
        media_type: "movie",
        media_id: requested_id,
        favorite: true,
      };
      const req = await fetch(
        `https://api.themoviedb.org/3/account/${
          session && session.data.user.id
        }/favorite?session_id=${tmdb_session}&api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const res = await req.json();
      if (res.success) {
        window.alert(`This movie has been added to favorite`);
      } else if (!res.status) {
        window.alert("Failed to add on favorite");
      }
    } else {
      window.alert("You have to Login with TMDB Account.");
    }
  }

  useEffect(() => {
    fetchData();
    getMovieVideo();
    getCredits();
    recomended();
  }, []);

  return (
    <>
      {movieDetails["overview"] != undefined ? (
        <>
          <head>
            <title>{movieDetails.original_title}</title>
            <meta name="description" content={movieDetails.overview} />
          </head>
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
                {(movieDetails.trailler && (
                  <>
                    <ReactPlayer
                      className="movie_video"
                      url={`https://www.youtube.com/watch?v=${
                        movieDetails.trailler && movieDetails.trailler.key
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
                  <Link
                    className="h-1/2 bg-slate-800 flex flex-col items-center justify-center gap-2"
                    href={`/info/images/${requested_id}?details=movie`}
                  >
                    {/* <div className=""> */}
                    <FontAwesomeIcon className="text-2xl" icon={faPhotoFilm} />
                    <h1>All Photos</h1>
                    {/* </div> */}
                  </Link>
                  <Link
                    className="flex h-1/2 bg-slate-800 flex-col items-center gap-2 justify-center"
                    href={`/info/video/${requested_id}?details=movie`}
                  >
                    <FontAwesomeIcon className="text-2xl" icon={faFilm} />
                    <h1>{count.video} Videos</h1>
                  </Link>
                </div>
              </div>
              <div className="small_show_image_video">
                <Link
                  className="w-1/2 bg-slate-800 flex flex-col items-center justify-center gap-2"
                  href={`/info/images/${requested_id}?details=movie`}
                >
                  {/* <div className=""> */}
                  <FontAwesomeIcon className="text-2xl" icon={faPhotoFilm} />
                  <h1>All Photos</h1>
                  {/* </div> */}
                </Link>
                <Link
                  className="flex w-1/2 p-2 bg-slate-800 flex-col items-center gap-2 justify-center"
                  href={`/info/video/${requested_id}?details=movie`}
                >
                  <FontAwesomeIcon className="text-2xl" icon={faFilm} />
                  <h1>{count.video} Videos</h1>
                </Link>
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
              <div className=" flex gap-5 items-end mt-5">
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
                  <p>
                    {movieDetails.overview &&
                      movieDetails.overview.slice(0, 200)}
                    ...
                  </p>
                </div>
              </div>
              <div className="flex gap-5 my-10">
                <button
                  onClick={addToWatchList}
                  class="bg-slate-700 hover:bg-slate-600 text-left text-white font-bold py-4 px-6 rounded"
                >
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  <span>Watchlist</span>
                  <p className="text-xs">Add This Movie To Watchlist</p>
                </button>
                <button
                  onClick={addToFavorite}
                  class="bg-slate-300 hover:bg-slate-200 text-left text-cyan-950 font-bold py-4 px-6 rounded"
                >
                  <FontAwesomeIcon icon={faHeart} className="mr-2" />
                  <span>Favorite</span>
                  <p className="text-xs">Add This Movie To Favorite</p>
                </button>
              </div>
              <h1
                style={{
                  margin: "1rem 0",
                  borderBottom: "1px solid whitesmoke",
                }}
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
                      {movieDetails.popularity}{" "}
                      <FontAwesomeIcon icon={faUser} />
                    </p>
                  </div>
                </div>
              </div>
              <Credit credit={movieDetails.credit} />
              <Recomended movies={movieDetails.recomended} />
            </div>
          </div>
        </>
      ) : (
        <Series />
      )}
    </>
  );
}
