"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "@/public/CSS/Video.css";

export default function Page(id) {
  const [video, setVideo] = useState([]);
  async function getVideo() {
    const req = await fetch(
      `https://api.themoviedb.org/3/${id.searchParams.details}/${id.params.id}/videos?api_key=db9fc15e4392ee900f12fcb5246c12bf`
    );
    const res = await req.json();
    const videos = res.results;
    setVideo(videos);
  }

  useEffect(() => {
    getVideo();
  }, []);

  return (
    <div className="video-container">
      {(video &&
        video.length > 0 &&
        video.map((video) => {
          return (
            <>
              <ReactPlayer
                style={{ width: "100%", height: "100%" }}
                key={video.key}
                className="movie_video"
                url={`https://www.youtube.com/watch?v=${video.key}`}
              />
            </>
          );
        })) || (
        <>
          <h1 className="text-center text-5xl my-5 text-white">
            No video found
          </h1>
        </>
      )}
    </div>
  );
}
