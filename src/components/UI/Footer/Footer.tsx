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
import { Button } from "@heroui/button";
import { FooterIcon } from "./FooterIcon";

const Footer = () => {
  return (
    <BackgroundBeamsWithCollision>
      <footer className="bg-[#f9fafb] dark:bg-black text-gray-800 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-3">
          {/* Top Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            {/* Logo + Social */}
            <div>
              <h1 className="text-2xl font-bold mb-5 flex items-center gap-2">
                <span className="bg-black dark:bg-white rounded-full w-3 h-3" />
                <span className="text-black dark:text-white">New Project</span>
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Crafting unique digital experiences with heart.
              </p>
              <FooterIcon />
            </div>

            {/* Links */}
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
              <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-3">
                Quick Links
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/about"
                  className="hover:underline hover:text-blue-500"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="hover:underline hover:text-blue-500"
                >
                  Contact Us
                </Link>
                <Link
                  href="/support"
                  className="hover:underline hover:text-blue-500"
                >
                  Customer Support
                </Link>
                <Link
                  href="/jobs"
                  className="hover:underline hover:text-blue-500"
                >
                  Jobs
                </Link>
                <Link
                  href="/legal"
                  className="hover:underline hover:text-blue-500"
                >
                  Legal
                </Link>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-base font-semibold mb-3 text-gray-800 dark:text-white">
                Subscribe to Noun Gazette
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Get weekly updates on design and development tips.
              </p>
              <form className="flex gap-2 items-center">
                <input
                  className="px-3 py-2 w-full rounded border-none bg-white dark:bg-[#0D0D21] text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none border border-gray-300 dark:border-gray-700"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button
                  className="relative rounded-xs inline-block h-9 w-32 overflow-hidden bg-white dark:bg-black border border-purple-500 dark:text-purple-200 text-purple-700 shadow-lg 
                                      before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-purple-700 before:duration-200 
                                      after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-purple-700 after:duration-500 
                                      hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                  type="submit"
                  // value="Submit Message"
                >
                  Sent
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </BackgroundBeamsWithCollision>
  );
};

export default Footer;
