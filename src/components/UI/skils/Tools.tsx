"use client";
import React, { useState } from "react";
import { TbBrandVscode, TbBrandNpm } from "react-icons/tb";
import { IoIosGitMerge } from "react-icons/io";
import { BiLogoNetlify } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { SiVite } from "react-icons/si";

import { CanvasRevealEffect } from "../../AceternityUI/skils/canvas-reveal-effect";


const skills = [
  {
    name: "VS CODE",
    icon: <TbBrandVscode className="text-blue-800 text-5xl" />,
    colors: [[13, 71, 161]],
  },
  {
    name: "NPM",
    icon: <TbBrandNpm className="text-red-950 text-5xl" />,
    colors: [[153, 27, 27]],
  },
  {
    name: "GIT",
    icon: <IoIosGitMerge className="text-[#F03C2E] text-5xl" />,
    colors: [[240, 60, 46]],
  },
  {
    name: "VITE",
    icon: <SiVite className="text-purple-600 text-5xl" />,
    colors: [[255, 80, 0]],
  },
  {
    name: "NETLIFY",
    icon: <BiLogoNetlify className="text-[#3CBFB8] text-5xl" />,
    colors: [[60, 191, 184]],
  },
  {
    name: "GITHUB",
    icon: <FaGithub className="text-gray-700 text-5xl" />,
    colors: [[55, 65, 81]],
  },
];

const Tools = () => {
  return (
    <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-white dark:bg-black">
      {skills.map((skill, index) => (
        <Card key={index} icon={skill.icon} title={skill.name}>
          <CanvasRevealEffect
            animationSpeed={3}
            colors={skill.colors}
            containerClassName="bg-black"
            dotSize={2}
          />
        </Card>
      ))}
    </div>
  );
};

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      aria-label={title}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[8rem]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
            initial={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full flex justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M12 6v12m6-6H6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Tools;
