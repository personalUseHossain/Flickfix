"use client";

import React, { useContext, useEffect } from "react";

import { MyContext } from "../layout";
import Image from "next/image";
import User from "@/public/Image/Hossain.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@/public/CSS/About.css";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Page() {
  const { isSideBarOpen, setSideBarOpen } = useContext(MyContext);

  useEffect(() => {
    setSideBarOpen(false);
  }, []);

  return (
    <>
      <div
        className={
          (isSideBarOpen &&
            " about-page items-start flex  justify-between sidebaropen relative z-10  bg-slate-950 text-white ") ||
          " about-page items-start flex justify-between relative z-10  bg-slate-950 text-white "
        }
      >
        <div className="about-info">
          <h1 className="text-5xl">ABOUT ME</h1>
          <p>
            Hello Everybody! <br />I am Muhammad Hossain, A Full Stack Web
            Developer. I am good at MERN Stack Development. If you need me for
            any reason (Develop you website, FlickFix issue or else), don&apos;t
            hesitate to contact me
          </p>
          <Link
            target="_blank"
            href={
              "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfprmKfTrqkvkBhzXHpvjksLBPrVrBrgnHtdFJBqTpkLlzjXDHLQTHRqdZFCXsjKFBLHhL"
            }
          >
            <button>Contact Me</button>
          </Link>
          <div className="flex gap-5">
            <Link
              target="_blank"
              href={"https://github.com/personalUseHossain"}
            >
              <FontAwesomeIcon className="text-3xl" icon={faGithub} />
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/hossain.sikder.716"}
            >
              <FontAwesomeIcon className="text-3xl" icon={faFacebook} />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/muhammad-hossain-a14b83265/"}
            >
              <FontAwesomeIcon className="text-3xl" icon={faLinkedin} />
            </Link>
          </div>
        </div>
        <div className="about-image">
          <Image src={User} alt="My Image" height={500} width={500} />
        </div>
      </div>
    </>
  );
}
