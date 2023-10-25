"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

import { signOut, useSession } from "next-auth/react";

//image
import Logo from "@/public/Image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBarsStaggered,
  faBookmark,
  faCircleQuestion,
  faHeart,
  faMagnifyingGlass,
  faMessage,
  faRightFromBracket,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "@/app/layout";
import { useRouter, useSearchParams } from "next/navigation";
import Login from "./Login";
import Link from "next/link";
import Cookies from "universal-cookie";

export default function Navbar() {
  const param = useSearchParams();
  const cookies = new Cookies();
  const tmdb_sessoin = cookies.get("tmdb_session");
  const session = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [Search, setSearch] = useState("");
  const { setSideBarOpen } = useContext(MyContext);
  const [isInputVisible, setInputVisible] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    router.push(`/results?search=${Search}`);
  }
  async function getUserData() {
    const req = await fetch(
      `https://api.themoviedb.org/3/account?api_key=${process.env.NEXT_PUBLIC_API_KEY}&session_id=${tmdb_sessoin}`
    );
    const res = await req.json();
    const userData = { image: res.avatar, name: res.username, id: res.id };
    setUserData(userData);
  }

  useEffect(() => {
    if (tmdb_sessoin != null) {
      getUserData();
    }
  }, []);

  if (userData) {
    session.status = "authenticated";
    session.data = { user: userData };
  }

  useEffect(() => {
    if (param.get("search")) {
      setSearch(param.get("search"));
    }
  }, []);
  console.log(session);

  return (
    <nav
      className={"flex justify-between px-5 sm:px-7 items-center h-20 bg-black"}
    >
      {!isInputVisible && (
        <>
          <div className="flex items-center flex-row p-5">
            <FontAwesomeIcon
              onClick={() => setSideBarOpen(true)}
              className="text-white mr-5 text-xl"
              icon={faBarsStaggered}
            />
            <Image src={Logo} height={50} width={50} alt="Logo" />
            <h1 className="text-2xl hidden text-white  sm:block">
              Flick<span className="text-red-500">Fix</span>
            </h1>
          </div>
        </>
      )}
      <div className="flex gap-20">
        {!isInputVisible ? (
          <>
            <form onSubmit={handleSearch} className="relative">
              <FontAwesomeIcon
                onClick={() => setInputVisible(true)}
                className=" text-2xl text-white absolute left-2 top-3 md:text-2xl"
                icon={faMagnifyingGlass}
              />
              <input
                onChange={(e) => setSearch(e.target.value)}
                className={
                  "bg-black px-10 text-white py-3 rounded-lg shadow-sm shadow-zinc-300 hidden md:block  "
                }
                type="text"
                value={Search}
                placeholder="Search Movie/Series And Other..."
              />
            </form>
          </>
        ) : (
          <>
            <form
              onSubmit={handleSearch}
              className="flex relative items-center gap-20 w-screen"
            >
              <FontAwesomeIcon
                onClick={() => setInputVisible(false)}
                className=" text-3xl text-white "
                icon={faArrowLeft}
              />
              <FontAwesomeIcon
                onClick={() => setInputVisible(true)}
                className=" text-2xl text-gray-300 absolute top-3 left-28"
                icon={faMagnifyingGlass}
              />
              <input
                onChange={(e) => setSearch(e.target.value)}
                className={
                  "bg-black text-white px-12 py-3 rounded-lg shadow-sm shadow-zinc-300 min-w-40 w-3/5 "
                }
                value={Search}
                type="text"
                placeholder="Search Movie/Series And Other..."
              />
            </form>
          </>
        )}
        {!isInputVisible && (
          <div className="relative">
            {(session.status == "authenticated" && (
              <>
                <img
                  onClick={() => setUserOpen(!isUserOpen)}
                  className="rounded-full"
                  src={
                    (session.status == "unauthenticated" &&
                      "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png") ||
                    (session.data &&
                      session.data.user.image.gravatar &&
                      `https://secure.gravatar.com/avatar/${session.data.user.image.gravatar.hash}.jpg?s=200`) ||
                    session.data.user.image
                  }
                  height={50}
                  width={50}
                  alt="User"
                />
              </>
            )) || (
              <>
                <Link href={"/login"}>
                  <img
                    onClick={() => setUserOpen(!isUserOpen)}
                    className="rounded-full"
                    src={
                      (session.status == "unauthenticated" &&
                        "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png") ||
                      (session.data && session.data.user.image)
                    }
                    height={50}
                    width={50}
                    alt="User"
                  />
                </Link>
              </>
            )}
            {isUserOpen && (
              <>
                {session.status == "authenticated" && (
                  <>
                    <>
                      <div
                        style={{ zIndex: 15 }}
                        className="absolute right-5 top-20 bg-gray-700 rounded-lg h-92 py-5 px-3 hover:shadow-white text-white w-64"
                      >
                        <div className="user_info px-3">
                          <div className="flex justify-between items-center">
                            <img
                              onClick={() => setUserOpen(!isUserOpen)}
                              className="rounded-full"
                              src={
                                (session.status == "unauthenticated" &&
                                  "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png") ||
                                (session.data &&
                                  session.data.user.image.gravatar &&
                                  `https://secure.gravatar.com/avatar/${session.data.user.image.gravatar.hash}.jpg?s=200`) ||
                                session.data.user.image
                              }
                              height={50}
                              width={50}
                              alt="User"
                            />
                            <FontAwesomeIcon
                              onClick={() => setUserOpen(false)}
                              className="mx-5 p-2 hover:bg-gray-900 rounded-full"
                              icon={faXmark}
                            />
                          </div>
                          <h2 className="font-bold">
                            {session.data && session.data.user.name}
                          </h2>
                          <small>{session.data.user.email}</small>
                        </div>

                        <Link href={"/watchlist"}>
                          <div className="flex cursor-pointer hover:bg-slate-800 gap-3 py-4 rounded-lg px-3  items-center">
                            <FontAwesomeIcon icon={faBookmark} />
                            <h4>Saved To Watchlist</h4>
                          </div>
                        </Link>
                        <Link href={"/favorite"}>
                          <div className="flex cursor-pointer hover:bg-slate-800 gap-3 py-4 rounded-lg px-3  items-center">
                            <FontAwesomeIcon icon={faStar} />
                            <h4>Saved To Favorite</h4>
                          </div>
                        </Link>
                        <div className="flex cursor-pointer hover:bg-slate-800 gap-3 py-4 px-3  items-center rounded-lg">
                          <FontAwesomeIcon icon={faCircleQuestion} />
                          <h4>Support from us</h4>
                        </div>
                        <div
                          onClick={() => {
                            cookies.remove("tmdb_session");
                            // session.status = "unauthenticated";
                            // session.data = null;
                            signOut();
                          }}
                          className="flex cursor-pointer hover:bg-slate-800 gap-3 py-4  px-3  items-center rounded-lg"
                        >
                          <FontAwesomeIcon icon={faRightFromBracket} />
                          <h4>Sign Out</h4>
                        </div>
                      </div>
                    </>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
