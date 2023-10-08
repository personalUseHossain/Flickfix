"use client";
import React, { useEffect, useState } from "react";
import MovieSingleCard from "./MovieSingleCard";
import "@/public/CSS/PopularGames.css";

export default function PopularGame() {
  const [popular_movies, set_popular_movies] = useState([]);
  async function fetchData() {
    const req = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=db9fc15e4392ee900f12fcb5246c12bf"
    );
    const res = await req.json();
    set_popular_movies(res.results);
  }
  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <h1 className="text-6xl m-5">Popular</h1>
      <div className="popular_games-container my-10 mx-5 ">
        {popular_movies.map((movie) => {
          return (
            <>
              <MovieSingleCard details={"movie"} movie={movie} />
            </>
          );
        })}
      </div>
    </>
  );
}
