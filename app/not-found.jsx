"use client";

import React, { useContext } from "react";
import Link from "next/link"; // If you're using React Router
import { MyContext } from "./layout";

const NotFoundPage = () => {
  const { isSideBarOpen } = useContext(MyContext);
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    // backgroundColor: "#36454F", // Slate background color
  };

  const textContainerStyle = {
    textAlign: "center",
    color: "white",
  };

  const h1Style = {
    fontSize: "3em",
    marginBottom: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "underline",
  };

  return (
    <div
      style={pageStyle}
      className={
        (isSideBarOpen && "trending min-h-screen sidebaropen bg-slate-900") ||
        "trending min-h-screen bg-slate-900"
      }
    >
      <div style={textContainerStyle}>
        <h1 style={h1Style}>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/" style={linkStyle}>
          Go back to the home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
