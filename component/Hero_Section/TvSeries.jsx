"use client";
import React, { useEffect, useState } from "react";
import MovieSingleCard from "./MovieSingleCard";
import "@/public/CSS/PopularGames.css";

export default function TvSeries() {
  const [tv_series_movies, set_tv_series_movies] = useState([]);
  async function fetchData() {
    const req = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    set_tv_series_movies(res.results);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-6xl m-5">Tv Series</h1>
      <div className="popular_games-container my-10 mx-5 ">
        {tv_series_movies.map((movie) => {
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
