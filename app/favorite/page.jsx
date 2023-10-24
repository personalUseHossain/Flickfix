"use client";

import MovieSingleCard from "@/component/Hero_Section/MovieSingleCard";
import React, { useContext, useEffect, useRef, useState } from "react";
import "@/public/CSS/Trending.css";
import { MyContext } from "../layout";
import sorryImage from "@/public/Image/sorry.png";
import { useSession } from "next-auth/react";
import Cookies from "universal-cookie";
import { Key } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [movie, setMovie] = useState([]);
  const [tv, setTv] = useState([]);
  const { isSideBarOpen, setSideBarOpen } = useContext(MyContext);
  const search_container_ref = useRef(null);
  const router = useRouter();

  const { data: session } = useSession(); // Destructure 'data' from 'useSession'

  const cookies = new Cookies();
  const tmdb_session = cookies.get("tmdb_session");

  async function fetchMovie() {
    if (session && session.user) {
      const req = await fetch(
        `https://api.themoviedb.org/3/account/${session.user.id}/favorite/movies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${tmdb_session}`
      );
      const res = await req.json();
      console.log(res);
      setMovie(res.results);
    }
  }

  async function fetchTv() {
    if (session && session.user) {
      const req = await fetch(
        `https://api.themoviedb.org/3/account/${session.user.id}/favorite/tv?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${tmdb_session}`
      );
      const res = await req.json();
      console.log(res);
      setTv(res.results);
    }
  }

  useEffect(() => {
    fetchMovie();
    fetchTv();
  }, [session, tmdb_session]);

  useEffect(() => {
    setSideBarOpen(false);
    if (movie.length + tv.length < 4 && search_container_ref.current) {
      search_container_ref.current.style.display = "flex";
    }
  }, []);

  return (
    <>
      {session && session.user && tmdb_session ? (
        <div
          ref={search_container_ref}
          className={
            (isSideBarOpen &&
              "trending min-h-screen sidebaropen relative z-10 p-10 bg-slate-950 text-white") ||
            "trending min-h-screen relative z-10 p-10 bg-slate-950 text-white"
          }
        >
          {movie &&
            movie.map((movie) => {
              return (
                <MovieSingleCard
                  Key={movie.id}
                  details={movie.media_type}
                  movie={movie}
                />
              );
            })}

          {tv &&
            tv.map((movie) => {
              return (
                <MovieSingleCard
                  Key={movie.id}
                  details={movie.media_type}
                  movie={movie}
                />
              );
            })}
          {tv && tv.length < 1 && movie && movie.length < 1 && (
            <>
              <h1 className="text-white text-5xl text-center mt-52">
                You have not any movie or series to favorite
              </h1>
            </>
          )}
        </div>
      ) : (
        <div
          style={{ minHeight: "60vh" }}
          className={
            (isSideBarOpen &&
              "trending min-h-screen sidebaropen flex flex-col items-center justify-center gap-5 bg-slate-700") ||
            "trending min-h-screen flex flex-col items-center justify-center gap-5 bg-slate-700"
          }
        >
          {setTimeout(() => {
            router.push("/");
          }, 5000)}
          <img
            src="https://res.cloudinary.com/dndev4rnw/image/upload/v1698139321/sorry_l97gs8.png"
            alt="Sorry"
          />
          <h1 className="text-3xl text-white text-center">
            Sorry, you have to log in with a <br />
            TMDB account to save movies/series to your favorite.
          </h1>
        </div>
      )}
    </>
  );
}

{
  /* <h1 className="text-4xl">favorite</h1> */
}
//   <h1 className="my-7 text-3xl">Movies</h1>
