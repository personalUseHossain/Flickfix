"use client";
import {
  faBarsStaggered,
  faCompass,
  faFile,
  faFilm,
  faHome,
  faLineChart,
  faPaperPlane,
  faTv,
  faUser,
  faUserAlt,
  faVideo,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Logo from "@/public/Image/logo.png";
import Image from "next/image";
import { MyContext } from "@/app/layout";
import Link from "next/link";

export default function Sidebar() {
  const { isSideBarOpen, setSideBarOpen } = useContext(MyContext);
  return (
    <>
      <div
        style={!isSideBarOpen && { transform: "translateX(-20rem)" }}
        className="sidebar h-screen w-52 fixed top-0 bg-neutral-950 p-5 overflow-scroll scroll-m-6 transition-transform duration-500 text-white z-50"
      >
        <div className="flex items-center flex-row mb-3 sticky top-0 bg-black">
          <FontAwesomeIcon
            onClick={() => setSideBarOpen(false)}
            className="mr-5 text-xl"
            icon={faXmark}
          />
          <Image src={Logo} height={50} width={50} alt="Logo" />
          <h1 className="text-xl hidden sm:block">
            Flick<span className="text-red-500">Fix</span>
          </h1>
        </div>
        <p className="mb-2 px-3 text-gray-500">Navigation</p>
        <Link href={"/"}>
          <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
            <FontAwesomeIcon icon={faHome} />
            <h1>Home</h1>
          </div>
        </Link>
        <Link href={"/movies"}>
          <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
            <FontAwesomeIcon icon={faFilm} />
            <h1>Movies</h1>
          </div>
        </Link>
        <Link href={"/tv-shows"}>
          <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
            <FontAwesomeIcon icon={faTv} />
            <h1>TV Shows</h1>
          </div>
        </Link>
        <Link href={"/about"}>
          <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
            <FontAwesomeIcon icon={faUser} />
            <h1>About</h1>
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
            <FontAwesomeIcon icon={faPaperPlane} />
            <h1>Contact</h1>
          </div>
        </Link>
        <hr className=" my-5" />
        <p className="mb-2 px-3 text-gray-500">News Feed</p>
        <Link href={"/browse"}>
          <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
            <FontAwesomeIcon icon={faCompass} />
            <h1>Browse</h1>
          </div>
        </Link>
        <Link href={"/tranding"}>
          <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
            <FontAwesomeIcon icon={faLineChart} />
            <h1>Trending</h1>
          </div>
        </Link>
        <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
          <FontAwesomeIcon icon={faUser} />
          <h1>Following</h1>
        </div>
        <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
          <FontAwesomeIcon icon={faVideo} />
          <h1>Your Videos</h1>
        </div>
        <div className="flex hover:text-white text-gray-400 items-center p-3 gap-3 my-2 cursor-pointer hover:bg-red-600 rounded-lg text-lg">
          <FontAwesomeIcon icon={faFile} />
          <h1>PlayList</h1>
        </div>
      </div>
    </>
  );
}
