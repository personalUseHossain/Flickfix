"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

export default function page() {
  const cookies = new Cookies();
  const [session_id, set_session_id] = useState();
  const router = useRouter();
  const param = useSearchParams();
  const token = param.get("request_token");
  const approved = param.get("approved");
  const body = {
    request_token: "cd1908b4d4896e80077405de196ac080bbaf0989",
  };

  async function generateSession() {
    try {
      const req = await fetch(
        "https://api.themoviedb.org/3/authentication/session/new?api_key=db9fc15e4392ee900f12fcb5246c12bf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const session = await req.json();
      console.log(await session);
      set_session_id(await session.session_id);
      cookies.set("tmdb_session", session_id);
    } catch (error) {
      console.log(error);
    }
  }

  generateSession();

  useEffect(() => {
    console.log(session_id);
  }, [session_id]);

  return (
    <div
      style={{ minHeight: "60vh" }}
      className="bg-slate-800 text-white flex flex-col gap-5 items-center justify-center"
    >
      {(!approved && (
        <>
          <h1 className="text-3xl">Sorry Authentication Failed.</h1>
          <div className="flex gap-5">
            <Link className="bg-slate-900 p-3 rounded-md" href={"/login"}>
              Login
            </Link>
            <Link className="bg-slate-900 p-3 rounded-md" href={"/"}>
              Home
            </Link>
          </div>
        </>
      )) || (
        <>
          <h1 className="text-3xl">Successfully Logged In.</h1>
          <p>Redirecting...</p>
          {/* {setTimeout(() => {
            router.push("/");
          }, 3000)} */}
        </>
      )}
    </div>
  );
}
