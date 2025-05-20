"use client";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: <FaFacebook />,
    label: "Facebook",
    color: "text-blue-500 hover:text-blue-700",
  },
  {
    href: "https://linkedin.com",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    color: "text-blue-500 hover:text-blue-700",
  },
  {
    href: "https://instagram.com",
    icon: <FaInstagram />,
    label: "Instagram",
    color: "text-pink-500 hover:text-pink-700",
  },
  {
    href: "https://github.com",
    icon: <FaGithub />,
    label: "GitHub",
    color:
      "text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white",
  },
  {
    href: "https://twitter.com",
    icon: <FaTwitter />,
    label: "Twitter",
    color: "text-blue-400 hover:text-blue-600",
  },
];

const Personal = () => {
  return (
    <div className="space-y-6 px-4 text-gray-800 dark:text-gray-200">
      <p className="text-md text-justify leading-relaxed">
        My full name is <strong>Suhanur Rahman</strong>. Suhan is my nickname. I
        live in Mymensingh. Currently, I am studying at Programming Hero as a
        front-end web developer. I want to take up coding as my profession and
        am working accordingly. I am still learning and practicing new
        technologies.
      </p>

      <h2 className="text-xl font-semibold">My Social Links:</h2>

      <div className="flex flex-wrap gap-6">
        {socialLinks.map(({ href, icon, label, color }) => (
          <Link
            key={label}
            aria-label={label}
            className={`text-3xl transform hover:scale-125 transition duration-300 ${color}`}
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Personal;
