'use client'
import Navbar from "@/component/Navbar";
import Sidebar from "@/component/Sidebar";
import '@/app/globals.css'
import { createContext, useEffect, useRef, useState } from "react"
import Footer from "@/component/Footer";
import AuthProvider from "@/component/AuthProvider";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;


export const MyContext = createContext()

const meta = {
  title: "FlickFix || You're next move destination || Made by Hossain",
  description: "Explore the latest movies, watch trailers, read reviews, and stay updated with the world of cinema at MovieFlix."

}

export default function RootLayout({ children }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="movies, movie reviews, film news, cinema, actors, trailers, entertainment" />
        <meta name="author" content="Hossain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.flickfix.vercel.app" />
        <link rel="icon" type="image/png" href='https://res.cloudinary.com/dndev4rnw/image/upload/v1697775263/logo_mtkeej.png' />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7589882222551986"
          crossOrigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-7589882222551986"></meta>
      </head>

      <body className={isSideBarOpen && 'overflow-hidden'}>

        <AuthProvider>
          <MyContext.Provider value={{ isSideBarOpen, setSideBarOpen }}>
            <Navbar />
            <Sidebar />
            {children}
            <Footer />
          </MyContext.Provider>
        </AuthProvider>

      </body>
    </html>
  )
}
