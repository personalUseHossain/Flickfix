"use client";
import MovieSingleCard from "@/component/Hero_Section/MovieSingleCard";
import React, { useContext, useEffect, useRef, useState } from "react";
import "@/public/CSS/Trending.css";
import { MyContext } from "../layout";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const params = useSearchParams();
  const search_query = params.get("search");
  const [trending, setTrending] = useState([]);
  const { isSideBarOpen, setSideBarOpen } = useContext(MyContext);

  async function searchFetch() {
    const req = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${search_query}&api_key=db9fc15e4392ee900f12fcb5246c12bf`
    );
    const res = await req.json();
    setTrending(() => res.results);
  }
  useEffect(() => {
    if (search_query === null || search_query === "") {
      fetchData();
    } else {
      searchFetch();
    }
  }, [search_query]);

  useEffect(() => {
    setSideBarOpen(false);
  }, []);

  return (
    <>
      <div
        className={
          (isSideBarOpen &&
            "trending sidebaropen relative z-10 p-10 bg-slate-950 text-white") ||
          "trending relative z-10 p-10 bg-slate-950 text-white"
        }
      >
        {trending &&
          trending.map((movie) => {
            return (
              <>
                <MovieSingleCard details={movie.media_type} movie={movie} />
              </>
            );
          })}
      </div>
    </>
  );
}
