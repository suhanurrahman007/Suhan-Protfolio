"use client";

import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

import { BackgroundBeamsWithCollision } from "../../AceternityUI/banner/background-beams-with-collision";

const Footer = () => {
  return (
    <BackgroundBeamsWithCollision>
      <footer className="bg-[#f9fafb] dark:bg-[#010313] text-gray-800 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Logo + Social */}
            <div>
              <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-black dark:bg-white rounded-full w-3 h-3" />
                <span className="text-black dark:text-white">Noun Project</span>
              </h1>
              <div className="flex gap-4 text-lg text-gray-600 dark:text-gray-400">
                <Link href="https://twitter.com" target="_blank">
                  <FaTwitter />
                </Link>
                <Link href="https://facebook.com" target="_blank">
                  <FaFacebookF />
                </Link>
                <Link href="https://instagram.com" target="_blank">
                  <FaInstagram />
                </Link>
                <Link href="https://dribbble.com" target="_blank">
                  <FaDribbble />
                </Link>
                <Link href="https://behance.net" target="_blank">
                  <FaBehance />
                </Link>
              </div>
            </div>

            {/* Links */}
            <div className="text-sm space-y-2">
              <div className="flex flex-col gap-2 text-gray-600 dark:text-gray-400">
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/support">Customer Support</Link>
                <Link href="/jobs">Jobs</Link>
                <Link href="/legal">Legal</Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-white">
                Subscribe to Noun Gazette
              </h3>
              <form className="flex gap-2">
                <input
                  className="px-3 py-2 w-full rounded border-none bg-white dark:bg-[#0D0D21] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none border border-gray-300 dark:border-gray-700"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="border border-purple-700 hover:bg-purple-800 text-black dark:text-white font-semibold py-3 px-6 rounded transition-colors duration-300 cursor-pointer"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Bottom */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-400 border-t border-gray-300 dark:border-gray-800 pt-6">
            Copyright © 2023 - All right reserved by S H SuHan
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  );
};

export default Footer;
