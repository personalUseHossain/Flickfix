'use client'
import Navbar from "@/component/Navbar";
import Sidebar from "@/component/Sidebar";
import '@/app/globals.css'
import { createContext, useEffect, useState } from "react"
import Footer from "@/component/Footer";
import AuthProvider from "@/component/AuthProvider";


export const MyContext = createContext()

export default function RootLayout({ children }) {
  const [isSideBarOpen, setSideBarOpen] = useState(false);
  return (
    <html lang="en">
      <body>

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
