"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

//image
import Logo from "@/public/Image/logo.png";
import User from "@/public/Image/Hossain.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBarsStaggered,
  faCircleQuestion,
  faHeart,
  faMagnifyingGlass,
  faMessage,
  faRightFromBracket,
  faXmark,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { MyContext } from "@/app/layout";
import { useRouter, useSearchParams } from "next/navigation";

export default function Navbar() {
  const param = useSearchParams();

  const router = useRouter();
  const [Search, setSearch] = useState("");
  const { setSideBarOpen } = useContext(MyContext);
  const [isInputVisible, setInputVisible] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);

  async function handleSearch(e) {
    e.preventDefault();
    router.push(`/results?search=${Search}`);
  }
  useEffect(() => {
    if (param.get("search")) {
      setSearch(param.get("search"));
    }
  }, []);
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
                className=" text-2xl text-gray-300 absolute left-28 top-3"
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
            <Image
              onClick={() => setUserOpen(!isUserOpen)}
              className="rounded-full"
              src={User}
              height={50}
              width={50}
              alt="User"
            />
            {isUserOpen && (
              <>
                <div className="absolute right-5 z-10 top-20 bg-gray-700 rounded-lg h-92 py-5 px-3 hover:shadow-white text-white w-64">
                  <div className="user_info px-3">
                    <div className="flex justify-between items-center">
                      <Image
                        onClick={() => setUserOpen(!isUserOpen)}
                        className="rounded-full"
                        src={User}
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
                    <h2 className="font-bold">Hossain</h2>
                    <small>Personal.mdhossain@gmail.com</small>
                  </div>

                  <div className="flex cursor-pointer hover:bg-slate-800 gap-3 py-4 rounded-lg px-3  items-center">
                    <FontAwesomeIcon icon={faHeart} />
                    <h4>Saved Movies</h4>
                  </div>
                  <div className="flex cursor-pointer hover:bg-slate-800 gap-3 py-4 rounded-lg px-3  items-center">
                    <FontAwesomeIcon icon={faMessage} />
                    <h4>Send FeedBack</h4>
                  </div>
                  <div className="flex cursor-pointer hover:bg-slate-800 gap-3 py-4 px-3  items-center rounded-lg">
                    <FontAwesomeIcon icon={faCircleQuestion} />
                    <h4>Support</h4>
                  </div>
                  <div className="flex cursor-pointer hover:bg-slate-800 gap-3 py-4  px-3  items-center rounded-lg">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <h4>Sign Out</h4>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
