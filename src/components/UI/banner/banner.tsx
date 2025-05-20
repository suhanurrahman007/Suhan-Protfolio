"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import { BackgroundLines } from "../../AceternityUI/banner/background-lines";
import ContainerCU from "../Container";
import logo from "@/src/assets/suhan-removebg-preview.png";
import { BackgroundBeamsWithCollision } from "../../AceternityUI/banner/background-beams-with-collision";

export function Banner() {
  return (
    <BackgroundLines>
      <ContainerCU>
        <div className="flex flex-col md:flex-row justify-between items-center text-black dark:text-white py-2">
          {/* Left Section */}
          <BackgroundBeamsWithCollision>
            <div className="max-w-xl space-y-6 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                Hello, I&#39;m{" "}
                <span className="text-purple-700 dark:text-purple-400">
                  Al Amin
                </span>
              </h1>

              <TypeAnimation
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400"
                repeat={Infinity}
                sequence={[
                  "UI/UX Designer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Frontend Enthusiast",
                  2000,
                ]}
                wrapper="h2"
              />

              <p className="text-base sm:text-md text-gray-600 dark:text-gray-300">
                A Full Stack Web Developer passionate about building
                professional and interactive websites.
              </p>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 pt-4">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-500 transition"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  aria-label="GitHub"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-500 transition"
                >
                  <FaGithub size={20} />
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-purple-500 transition"
                >
                  <FaFacebook size={20} />
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center md:justify-start gap-6 pt-6">
                <Link href="/resume.pdf" target="_blank">
                  <button className="bg-purple-600 dark:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 dark:hover:bg-purple-600 transition">
                    Resume ⬇
                  </button>
                </Link>
                <Link href="#projects">
                  <button className="border border-purple-500 text-purple-700 dark:text-purple-300 px-6 py-2 rounded-lg font-semibold hover:bg-purple-100 dark:hover:bg-purple-500 dark:hover:text-white transition">
                    Projects ⌘
                  </button>
                </Link>
              </div>
            </div>
          </BackgroundBeamsWithCollision>

          {/* Right Section - Image with Background Video */}
          <div className="mt-12 md:mt-0 relative w-[500px] h-[400px]  lg:mr-16 rounded-xl overflow-hidden shadow-lg">
            {/* Background Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              src="/bg.mp4"
            />

            {/* Foreground Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                alt="Al Amin"
                className="rounded-xl hover:grayscale grayscale-0 transition duration-500"
                height={400}
                src={logo}
                width={300}
              />
            </div>
          </div>
        </div>
      </ContainerCU>
    </BackgroundLines>
  );
}
