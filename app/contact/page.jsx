"use client";
import { faMapMarked, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { MyContext } from "../layout";

export default function Page() {
  const { isSideBarOpen } = useContext(MyContext);
  return (
    <div
      className={
        (isSideBarOpen &&
          " sidebaropen h-full pt-20 pb-20 bg-slate-950 text-white") ||
        " h-full pt-20 pb-20 bg-slate-950 text-white"
      }
    >
      <h1 className="text-center text-5xl mb-20">Contact us!</h1>
      <div className="  flex flex-col-reverse lg:flex-row gap-20 justify-around items-center w-screen">
        <div className="grid gap-5 p-20 sm:p-0">
          <div className="  flex gap-5">
            <FontAwesomeIcon icon={faMapMarked} />
            <span>261/2-C South Pirerbag, Oli market road, Dhaka</span>
          </div>
          <div className=" flex gap-5">
            <FontAwesomeIcon icon={faMessage} />
            <span>personal.mdhossain@gmail.com</span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d389.358437621418!2d90.36824407447959!3d23.786902202319702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696151123253!5m2!1sen!2sbd"
            width="500"
            height="350"
            style={{ border: "0", width: "50vw", minWidth: "15rem" }}
            className="rounded-lg "
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="grid gap-5">
          <input
            className="p-3 rounded-md sm:w-96 w-50 bg-slate-200 text-black"
            type="text"
            placeholder="NAME"
          />
          <input
            className="p-3 rounded-md sm:w-96 w-50 bg-slate-200 text-black"
            type="email"
            placeholder="EMAIL"
          />
          <textarea
            className="p-3 rounded-md sm:w-96 w-50 bg-slate-200 text-black h-40"
            cols="30"
            rows="10"
            placeholder="MESSAGE"
          ></textarea>
          <button className="p-3 bg-orange-500 rounded-md">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
