import {
  faFacebookF,
  faInstagramSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className=" mx-auto flex gap-8 w-min sm:w-full flex-wrap px-12  justify-between">
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold">
            Flick<span className="text-red-500">Fix</span>
          </h3>
          <p className="mt-2">
            Discover the world of cinema with FlickFix.com. We are your premier
            destination for the latest movies, TV shows, and entertainment news.
          </p>
        </div>
        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 ">
            <li className="mb-2">
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/movies" className="text-gray-400 hover:text-white">
                Movies
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/tv-shows" className="text-gray-400 hover:text-white">
                TV Shows
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <ul className="mt-2 flex gap-5">
            <li>
              <Link
                href="#"
                className="text-gray-400 text-2xl hover:text-white"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 text-2xl hover:text-white"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-gray-400 text-2xl hover:text-white"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mt-4 md:mt-0">
          <h3 className="text-xl font-semibold">Contact</h3>
          <p className="mt-2 ">Email: pesonal.mdhossain@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
