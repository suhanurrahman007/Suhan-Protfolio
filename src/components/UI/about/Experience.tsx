"use client";

import { useEffect, useState } from "react";

const skills = [
  {
    name: "HTML",
    level: 90,
    gradient: "from-pink-500 via-red-500 to-yellow-400",
  },
  {
    name: "CSS",
    level: 87,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    name: "JavaScript",
    level: 93,
    gradient: "from-yellow-400 via-amber-400 to-orange-500",
  },
  {
    name: "React",
    level: 85,
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
  },
  {
    name: "Node.js",
    level: 70,
    gradient: "from-green-400 via-emerald-500 to-teal-400",
  },
];

const Experience = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="space-y-6 px-2">
      <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-5">
        I have no formal job experience. However, I am proficient in developing
        full-stack web applications using the MERN stack—React, Firebase,
        MongoDB, Node.js—along with Tailwind CSS, HTML, CSS, and JavaScript.
      </p>

      {skills.map((skill, idx) => (
        <div key={idx}>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-semibold text-gray-700 dark:text-white">
              {skill.name}
            </span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
            <div
              className={`h-4 rounded-full transition-all duration-1000 ease-in-out bg-gradient-to-r ${skill.gradient}`}
              style={{
                width: loaded ? `${skill.level}%` : "0%",
              }}
             />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
