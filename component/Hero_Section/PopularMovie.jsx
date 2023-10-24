"use client";
import React, { useEffect, useRef, useState } from "react";
import MovieSingleCard from "./MovieSingleCard";
import "@/public/CSS/PopularGames.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function PopularGame() {
  const [popular_movies, set_popular_movies] = useState([]);
  const [transform, setTransform] = useState(0);

  async function fetchData() {
    const req = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    set_popular_movies(res.results);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative">
      <h1 className="text-6xl m-5">Popular</h1>
      {/* <FontAwesomeIcon
        onClick={() => setTransform(transform - 100)}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        className="absolute text-3xl top-80 left-10 z-10 border-solid border-2 border-black p-3"
        icon={faArrowLeft}
      /> */}
      <div>
        <div className="popular_games-container my-10 mx-5 relative">
          {popular_movies.map((movie) => {
            return (
              <>
                <MovieSingleCard
                  transform={transform}
                  details={"movie"}
                  movie={movie}
                />
              </>
            );
          })}
        </div>
      </div>
      {/* <FontAwesomeIcon
        onClick={() => setTransform(transform + 100)}
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
        className="absolute text-3xl top-80 right-10 z-10 border-solid border-2 border-black p-3"
        icon={faArrowRight}
      /> */}
    </div>
  );
}
