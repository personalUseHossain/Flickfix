"use client";
import { MyContext } from "@/app/layout";
import React, { useContext, useEffect } from "react";
import Image_Slider from "@/component/Hero_Section/Image_Slider";
import PopularGame from "./Hero_Section/PopularMovie";
import TopRated from "./Hero_Section/TopRated";
import TvSeries from "./Hero_Section/TvSeries";

export default function Hero_Section() {
  const { isSideBarOpen, setSideBarOpen } = useContext(MyContext);
  useEffect(() => {
    setSideBarOpen(false);
  }, []);
  return (
    <div
      className={
        (isSideBarOpen && "sidebaropen  overflow-hidden") || " overflow-hidden"
      }
    >
      <Image_Slider />
      <TopRated />
      <PopularGame />
      <TvSeries />
    </div>
  );
}
