"use client";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { MyContext } from "../layout";
import Link from "next/link";

export default function Page() {
  const redirect_url = useSearchParams().get("redirect");
  const session = useSession();
  const router = useRouter();
  const { isSideBarOpen, setSideBarOpen } = useContext(MyContext);
  useEffect(() => {
    setSideBarOpen(false);
  }, []);

  useEffect(() => {
    if (redirect_url && session) {
      router.push(redirect_url);
    }
  }, [session]);

  return (
    <div
      className={
        (isSideBarOpen && "sidebaropen  overflow-hidden") || " overflow-hidden"
      }
    >
      {(session.status == "authenticated" && (
        <>
          <div
            style={{ minHeight: "50vh" }}
            className="bg-slate-800 text-white flex flex-col gap-5 items-center justify-center"
          >
            {(redirect_url && session && (
              <>
                <h1 className="text-3xl">
                  Please wait. <br />
                  Redirecting...
                </h1>
              </>
            )) || (
              <>
                <h1 className="text-3xl">You&apos;re logged in</h1>

                <div className="flex gap-5">
                  <button
                    className="p-3 bg-slate-900 rounded-md"
                    onClick={() => signOut()}
                  >
                    Logout
                  </button>
                  <Link href={"/"} className="p-3 bg-slate-900 rounded-md">
                    Home
                  </Link>
                </div>
              </>
            )}
          </div>
        </>
      )) || (
        <>
          <div
            style={{ minHeight: "50vh" }}
            className="bg-slate-800 flex flex-col gap-5 items-center justify-center"
          >
            <button
              className="flex items-center gap-6 bg-white px-7 py-2 rounded-lg"
              onClick={() =>
                signIn("google", { redirect: redirect_url && false })
              }
            >
              <img
                className="rounded-full w-10"
                src="data:image/png;base64,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"
                alt="404"
              />
              <h1 className="text-black text-2xl">Continue with Google</h1>
            </button>
            <button
              className="flex items-center gap-6 bg-blue-700 px-5 py-2 rounded-lg"
              onClick={() =>
                signIn("facebook", { redirect: redirect_url && false })
              }
            >
              <img
                className="rounded-full w-10"
                src="data:image/png;base64,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"
                alt="404"
              />
              <h1 className="text-white text-2xl">Continue with Facebook</h1>
            </button>
            <button
              className="flex items-center gap-6 bg-black px-7 py-2 rounded-lg"
              onClick={() =>
                signIn("github", { redirect: redirect_url && false })
              }
            >
              <img
                className="rounded-full w-14"
                src="data:image/png;base64,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"
                alt="404"
              />
              <h1 className="text-white text-2xl">Continue with Github</h1>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
