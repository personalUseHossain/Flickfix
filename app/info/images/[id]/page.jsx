"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import "@/public/CSS/Images.css";

export default function Page(id) {
  const [all_images, setImages] = useState([]);
  const [preview, setPreview] = useState(null);
  const requested_id = id.params.id;
  async function images() {
    const req = await fetch(
      `https://api.themoviedb.org/3/${id.searchParams.details}/${requested_id}/images?api_key=db9fc15e4392ee900f12fcb5246c12bf`
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
    <div className=" min-h-screen mx-auto w-screen p-10 bg-slate-800 ">
      {preview && (
        <div className="p-10 h-screen w-screen fixed top-0  preview">
          <FontAwesomeIcon
            className="text-5xl text-white relative z-20"
            onClick={() => setPreview(null)}
            icon={faXmark}
          />
          <img
            className="w-3/4 relative z-20"
            src={preview}
            alt="Image not found"
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {all_images.map((movie) => (
          <div key={movie.id} className="rounded-lg overflow-hidden shadow-lg">
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
      </div>
    </div>
  );
}
