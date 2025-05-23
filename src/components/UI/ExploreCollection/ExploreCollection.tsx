import React from "react";
import Image from "next/image";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import { Button } from "@heroui/button";
import { AnimatedTooltipPreview } from "./AnimatedTooltipPreview";
import { BackgroundBeamsWithCollision } from "../../AceternityUI/banner/background-beams-with-collision";
import Link from "next/link";

const HeroSection = () => {
  return (
    <BackgroundBeamsWithCollision>
      <section className="pb-5 px-4 mt-[40rem] md:mt-44 lg:mt-0">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Build world class <br /> websites at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] to-[#666] dark:from-white dark:to-gray-400">
              warp speed
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Access an ever-growing collection of premium, meticulously crafted
            templates and component packs. Save time and focus on what
            matters—building standout websites that captivate your audience.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link href="/#">
              <Button
                className="relative rounded-xs inline-block h-10 w-72 overflow-hidden bg-white dark:bg-black border border-purple-500 dark:text-purple-200 text-purple-700 shadow-lg 
                                 before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-purple-700 before:duration-200 
                                 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-purple-700 after:duration-500 
                                 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
              >
                <span className="flex items-center justify-center gap-2">
                  Explore Collection
                </span>
              </Button>
            </Link>

            <Link
              href="#"
              className="group relative flex h-10 w-72 items-center rounded-lg border-2 border-purple-600 p-4 dark:text-purple-200 text-purple-700 bg-white dark:bg-black"
            >
              <span>Unlock Unlimited Access</span>
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
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 mt-6">
            Trusted by Founders and Entrepreneurs from all over the world
          </p>
          <div className="mt-12 lg:flex space-x-10 justify-center items-center">
            <div className="mb-6 ">
              <AnimatedTooltipPreview />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 justify-center md:justify-start lg:-mt-5 gap-6 text-gray-600 dark:text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <SiNextdotjs /> Next.js
              </div>
              <div className="flex items-center gap-2">
                <SiReact /> React
              </div>
              <div className="flex items-center gap-2">
                <SiTailwindcss /> TailwindCSS
              </div>
              <div className="flex items-center gap-2">
                <SiFramer /> Framer Motion
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default HeroSection;
