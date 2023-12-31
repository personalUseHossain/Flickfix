"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useRef, useState } from "react";
import "@/public/CSS/Images.css";
import { MyContext } from "@/app/layout";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Page(id) {
  const [all_images, setImages] = useState([]);
  const [preview, setPreview] = useState(null);
  const { isSideBarOpen } = useContext(MyContext);
  const requested_id = id.params.id;
  async function images() {
    const req = await fetch(
      `https://api.themoviedb.org/3/${id.searchParams.details}/${requested_id}/images?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const res = await req.json();
    const imgs = [];
    res.backdrops.forEach((image) => {
      imgs.push(image);
    });

    res.posters.forEach((image) => {
      imgs.push(image);
    });

    setImages(imgs);
  }

  useEffect(() => {
    images();
  }, []);

  return (
    <div
      className={
        (isSideBarOpen &&
          "sidebaropen  overflow-hidden min-h-screen mx-auto w-screen p-10 bg-slate-800") ||
        " overflow-hidden min-h-screen mx-auto w-screen p-10 bg-slate-800"
      }
    >
      {preview && (
        <div className="p-10 h-screen w-screen fixed top-0 left-0 preview">
          <FontAwesomeIcon
            className="text-5xl text-white relative z-20"
            onClick={() => setPreview(null)}
            icon={faXmark}
          />
          <img
            className="sm:w-3/4 w-full relative z-20"
            src={preview}
            alt="Image not found"
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {all_images.length > 1 ? (
          <>
            {all_images.map((movie) => (
              <div
                key={movie.id}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  onClick={(e) => setPreview(e.target.src)}
                  src={`https://image.tmdb.org/t/p/w500/${movie.file_path}`}
                  alt={movie.title}
                  className="w-full h-56 object-cover object-center"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{movie.title}</h2>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
            <Skeleton height={230} width={400} />
          </>
        )}
      </div>
    </div>
  );
}
