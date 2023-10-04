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
  const trendingContainerRef = useRef(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // Add loading state
  let prevpage = 0;
  async function fetchData() {
    if (loading) return; // Prevent multiple fetch requests

    try {
      setLoading(true); // Set loading to true before fetching
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=db9fc15e4392ee900f12fcb5246c12bf&page=${page}`;
      const req = await fetch(url);
      const res = await req.json();
      if (res.results.length > 0) {
        if (prevpage === page) return;
        setTrending((prev) => [...prev, ...res.results]);
        prevpage = page;
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch is complete
    }
  }

  useEffect(() => {
    fetchData();
    setSideBarOpen(false);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (search_query) return;
      else if (
        trendingContainerRef.current &&
        window.innerHeight + window.scrollY >=
          trendingContainerRef.current.offsetTop +
            trendingContainerRef.current.clientHeight -
            700 &&
        page > 1
      ) {
        fetchData();
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <>
      <div
        ref={trendingContainerRef}
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
                <MovieSingleCard movie={movie} />
              </>
            );
          })}
      </div>
    </>
  );
}
