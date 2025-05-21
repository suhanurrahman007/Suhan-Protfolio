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
    <section className="py-16 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="lg:flex gap-12">
          {/* Form Section */}
          <div className="lg:w-2/3 w-full mb-12 lg:mb-0">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="input input-bordered w-full bg-[#0D0D21] text-white px-4 py-3 rounded"
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="input input-bordered w-full bg-[#0D0D21] text-white px-4 py-3 rounded"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
                className="input input-bordered w-full bg-[#0D0D21] text-white px-4 py-3 rounded"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="input input-bordered w-full bg-[#0D0D21] text-white px-4 py-3 rounded h-32 resize-none"
              ></textarea>

              <input
                type="submit"
                value="Submit Message"
                className="w-full border border-purple-700  hover:bg-purple-800 text-white font-semibold py-3 px-6 rounded transition-colors duration-300 cursor-pointer"
              />
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="lg:w-1/3 w-full bg-[#0D0D21] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-purple-500 mb-4">
              Contact Info
            </h3>
            <p className="text-gray-300 mb-6">
              Dhaka, Savar, Savar Khagan Bazar, Daffodil International
              University
            </p>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center">
                <MdMarkEmailRead className="text-blue-500 text-xl mr-2" />
                oneyeareducation@gmail.com
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-green-500 text-xl mr-2" />
                +880193841356
              </div>
              <div className="flex items-center">
                <FaMobile className="text-purple-500 text-xl mr-2" />
                +8801824139665
              </div>
            </div>

            <div className="flex items-center space-x-6 mt-6">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="text-blue-500 hover:text-blue-700 text-2xl transition-transform transform hover:scale-125"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-blue-400 hover:text-blue-600 text-2xl transition-transform transform hover:scale-125"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="text-pink-500 hover:text-pink-700 text-2xl transition-transform transform hover:scale-125"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="text-gray-400 hover:text-gray-600 text-2xl transition-transform transform hover:scale-125"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="text-blue-400 hover:text-blue-600 text-2xl transition-transform transform hover:scale-125"
              >
                <FaTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
