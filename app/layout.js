'use client'
import Navbar from "@/component/Navbar";
import Sidebar from "@/component/Sidebar";
import '@/app/globals.css'
import { createContext, useEffect, useState } from "react"
import Footer from "@/component/Footer";
import Cookies from "universal-cookie";


export const MyContext = createContext()

export default function RootLayout({ children }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  // const cookies = new Cookies()
  // async function create_guest_session() {
  //   const req = await fetch('https://api.themoviedb.org/3/authentication/guest_session/new?api_key=db9fc15e4392ee900f12fcb5246c12bf')
  //   const res = await req.json()
  //   cookies.set("guest_session", res.guest_session_id, { expires: res.expires_at })
  // }
  // useEffect(() => {
  //   create_guest_session()
  // }, [])
  return (
    <html lang="en">
      <body>
        <MyContext.Provider value={{ isSideBarOpen, setSideBarOpen }}>
          <Navbar />
          <Sidebar />
          {children}
          <Footer />
        </MyContext.Provider>
      </body>
    </html>
  )
}
