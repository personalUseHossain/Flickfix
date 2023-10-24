"use client";
import React, { useEffect, useState } from "react";
import MovieSingleCard from "./MovieSingleCard";
import "@/public/CSS/PopularGames.css";

export default function TopRated() {
  const [topRated_movies, set_topRated_movies] = useState([]);
  async function fetchData() {
    const req = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    set_topRated_movies(res.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-6xl m-5">Top Rated</h1>

      <div className="popular_games-container my-10 mx-5 ">
        {topRated_movies.map((movie) => {
          return (
            <>
              <MovieSingleCard details={"tv"} movie={movie} />
            </>
          );
        })}
      </div>
    </>
  );
}
