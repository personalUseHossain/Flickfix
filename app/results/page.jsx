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
  const search_container_ref = useRef(null);

  async function searchFetch() {
    const req = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${search_query}&api_key=db9fc15e4392ee900f12fcb5246c12bf`
    );
    const res = await req.json();
    setTrending(() => res.results);
  }
  useEffect(() => {
    searchFetch();
    if (trending.length < 4) {
      search_container_ref.current.classList.add("flex");
    } else if (trending.length > 4) {
      search_container_ref.current.classList.remove("flex");
    }
  }, [search_query, trending]);

  useEffect(() => {
    setSideBarOpen(false);
  }, []);

  return (
    <>
      <div
        ref={search_container_ref}
        className={
          (isSideBarOpen &&
            "trending min-h-screen sidebaropen relative z-10 p-10 bg-slate-950 text-white") ||
          "trending min-h-screen relative z-10 p-10 bg-slate-950 text-white"
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
        {trending.length < 1 && (
          <>
            <h1 className="text-white text-5xl text-center mt-52">
              No result found with &apos;{search_query}&apos; keyword
            </h1>
          </>
        )}
      </div>
    </>
  );
}
