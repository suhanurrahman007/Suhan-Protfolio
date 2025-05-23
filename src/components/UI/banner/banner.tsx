"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";

import { BackgroundLines } from "../../AceternityUI/banner/background-lines";
import ContainerCU from "../Container";
import { BackgroundBeamsWithCollision } from "../../AceternityUI/banner/background-beams-with-collision";

import logo from "@/src/assets/suhan-removebg-preview.png";
import { TextGenerateEffect } from "../../AceternityUI/banner/text-generate-effect";
import { Button } from "@heroui/button";

export function Banner() {
  const words = `I am Suhanur Rahman. I am a front-end web developer. I have been
                studying in this sector for the past 1+ years. I consider coding
                the most important thing in my life. I love to tackle complex
                problems.`;

  return (
    <BackgroundLines>
      <ContainerCU>
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-10 md:gap-y-0 text-black dark:text-white py-6">
          {/* Left Section */}
          <BackgroundBeamsWithCollision>
            <div className="max-w-xl space-y-6 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                Hello, I&#39;m{" "}
                <span className="text-purple-700 dark:text-purple-400">
                  Suhanur Rahman
                </span>
              </h1>

              <TypeAnimation
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400"
                repeat={Infinity}
                sequence={[
                  "BackEnd Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "Frontend Enthusiast",
                  2000,
                ]}
                wrapper="h2"
              />

              <TextGenerateEffect words={words} />

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4 pt-4">
                <Link
                  aria-label="LinkedIn"
                  href="https://linkedin.com"
                  target="_blank"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-700 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 shadow-md hover:scale-105"
                >
                  <FaLinkedin className="text-pink-600" size={20} />
                </Link>
                <Link
                  aria-label="GitHub"
                  href="https://github.com"
                  target="_blank"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 shadow-md hover:scale-105"
                >
                  <FaGithub size={20} />
                </Link>
                <Link
                  aria-label="Facebook"
                  href="https://facebook.com"
                  target="_blank"
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all duration-300 shadow-md hover:scale-105"
                >
                  <FaFacebook className="text-blue-600" size={20} />
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex  justify-center md:justify-start gap-5 pt-6">
                <Link href="/resume.pdf" download className="group">
                  <Button
                    className="relative rounded-xs inline-block h-10 w-44 overflow-hidden bg-white dark:bg-black border border-purple-500 dark:text-purple-200 text-purple-700 shadow-lg 
                      before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-purple-700 before:duration-200 
                      after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-purple-700 after:duration-500 
                      hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FaDownload className="text-purple-400 group-hover:text-white transition-colors duration-300" />
                      Resume
                    </span>
                  </Button>
                </Link>

                <Link
                  href="#"
                  className="group relative flex h-10 w-44 items-center rounded-lg border-2 border-purple-600 p-4 dark:text-purple-200 text-purple-700 bg-white dark:bg-black"
                >
                  <span>Project</span>
                  <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-purple-600 duration-300 group-hover:w-5/6">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 12H20M20 12L14 6M20 12L14 18"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </BackgroundBeamsWithCollision>

          {/* Right Section - Image with Background Video */}
          <div className="relative w-full max-w-[500px] h-[400px] rounded-xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
              src="/bg.mp4"
            />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                alt="Suhanur Rahman"
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
