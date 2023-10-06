import React from "react";
import "@/public/CSS/Credit.css";
import MovieSingleCard from "@/component/Hero_Section/MovieSingleCard";

export default function Credit(props) {
  return (
    <div>
      <h1 className="text-5xl my-10 ">You may also like</h1>
      <div className="credit-container grid grid-flow-col  gap-10 overflow-x-scroll">
        {(props.movies &&
          props.movies.length > 0 &&
          props.movies.map((movie) => {
            return <MovieSingleCard details="tv" movie={movie} />;
          })) || (
          <>
            <h1>No recomended movie found</h1>
          </>
        )}
      </div>
    </div>
  );
}
