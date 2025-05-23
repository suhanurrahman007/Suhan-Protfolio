import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const CollaborationSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Collaboration Left Box */}
        <div className="bg-gradient-to-br from-[#0f051d] to-[#1a0540] rounded-2xl p-6 flex  justify-between text-white">
          <div>
            <span className="inline-block mb-4 px-4 py-1 border border-white rounded-full text-sm">
              Collaborations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Collaborated with <br /> leading brands, <br /> bring bold ideas
              to life
            </h2>
          </div>
        </div>

        {/* Clients Right Box */}
        <div className="bg-[#1a0540] rounded-2xl p-6 text-white relative overflow-hidden">
          <h3 className="text-4xl font-bold">120+</h3>
          <div className="flex items-center mt-2 mb-4">
            <div className="flex -space-x-4">
              <Image
                alt="Client 1"
                className="rounded-full border-2 border-white"
                height={40}
                src="/avatar1.png"
                width={40}
              />
              <Image
                alt="Client 2"
                className="rounded-full border-2 border-white"
                height={40}
                src="/avatar2.png"
                width={40}
              />
              <Image
                alt="Client 3"
                className="rounded-full border-2 border-white"
                height={40}
                src="/avatar3.png"
                width={40}
              />
            </div>
          </div>
          <p className="text-lg">Satisfied Clients around the world</p>
          <div className="flex mt-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 mr-1" />
            ))}
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <Image
              fill
              alt="Dot Pattern"
              className="object-cover opacity-40"
              src="/dot-pattern.png" // replace with actual background image path
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
