import Link from "next/link";
import React from "react";

const FooterDemo = () => {
  return (
    <footer className="bg-white mb-2 text-neutral-700 dark:bg-[#010313] dark:text-gray-400 shadow-lg shadow-blue-100 dark:shadow-blue-950 text-xs py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-2">
      {/* Left Section */}
      <div className="text-center md:text-left">
        Thank you for creating with SuHan | 2024 ©{" "}
        <Link
          href="#"
          className="text-blue-600 dark:text-blue-500 hover:underline"
        >
          My Portfolio
        </Link>
      </div>

      {/* Right Section */}
      <div className="text-center md:text-right">v3.23.0</div>
    </footer>
  );
};

export default FooterDemo;
