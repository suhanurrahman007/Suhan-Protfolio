"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaMobile,
} from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import Link from "next/link";

import { BackgroundBeamsWithCollision } from "../../AceternityUI/banner/background-beams-with-collision";
import { Button } from "@heroui/button";

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_627rdn8",
        "template_ygwtf75",
        form.current,
        "MAnAmkEBH4a46_FDY"
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
          form.current?.reset();
        },
        () => {
          toast.error("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <BackgroundBeamsWithCollision>
      <section className="py-16 text-gray-800 dark:text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="lg:flex gap-12">
            {/* Form Section */}
            <div className="lg:w-2/3 w-full mb-12 lg:mb-0">
              <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    required
                    className="dark:border-none  w-full bg-white dark:bg-[#010313] dark:text-white text-gray-900 px-4 py-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    name="first_name"
                    placeholder="First Name"
                    type="text"
                  />
                  <input
                    required
                    className="dark:border-none w-full bg-white dark:bg-[#010313] dark:text-white text-gray-900 px-4 py-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                    name="last_name"
                    placeholder="Last Name"
                    type="text"
                  />
                </div>

                <input
                  required
                  className="dark:border-none w-full bg-white dark:bg-[#010313] dark:text-white text-gray-900 px-4 py-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  name="email"
                  placeholder="Enter Your Email"
                  type="email"
                />

                <textarea
                  required
                  className="dark:border-none w-full bg-white dark:bg-[#010313] dark:text-white text-gray-900 px-4 py-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32 resize-none transition"
                  name="message"
                  placeholder="Your Message"
                />

                <Button
                  className="relative rounded-xs inline-block h-11 w-full overflow-hidden bg-white dark:bg-black border border-purple-500 dark:text-purple-200 text-purple-700 shadow-lg 
                      before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-purple-700 before:duration-200 
                      after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-purple-700 after:duration-500 
                      hover:text-white before:hover:translate-x-0 after:hover:translate-x-0"
                  type="submit"
                  // value="Submit Message"
                >
                  Submit Message
                </Button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="lg:w-1/3 w-full bg-white dark:bg-[#010313] p-6 rounded-lg shadow-lg transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-4">
                Contact Info
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Ka-30, Joar Shahara, Kuril, Vatara, Dhaka-1229
              </p>

              <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center">
                  <MdMarkEmailRead className="text-blue-500 dark:text-blue-400 text-xl mr-2" />
                  oneyeareducation@gmail.com
                </div>
                <div className="flex items-center">
                  <FaPhoneAlt className="text-green-500 dark:text-green-400 text-xl mr-2" />
                  +880193841356
                </div>
                <div className="flex items-center">
                  <FaMobile className="text-purple-500 dark:text-purple-400 text-xl mr-2" />
                  +8801824139665
                </div>
              </div>

              <div className="flex items-center space-x-6 mt-6">
                <Link
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 text-2xl transition-transform transform hover:scale-125"
                  href="https://facebook.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 text-2xl transition-transform transform hover:scale-125"
                  href="https://linkedin.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  className="text-pink-500 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-600 text-2xl transition-transform transform hover:scale-125"
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-2xl transition-transform transform hover:scale-125"
                  href="https://github.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub />
                </Link>
                <Link
                  className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 text-2xl transition-transform transform hover:scale-125"
                  href="https://twitter.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
};

export default ContactUs;
