import React from "react";
import {
  FaLayerGroup,
  FaQuoteRight,
  FaRegCircle,
  FaHourglassHalf,
  FaKeyboard,
} from "react-icons/fa";

const brands = [
  { name: "Layers", icon: <FaLayerGroup className="text-white text-lg mr-2" /> },
  { name: "Quotient", icon: <FaQuoteRight className="text-white text-lg mr-2" /> },
  { name: "Circooles", icon: <FaRegCircle className="text-white text-lg mr-2" /> },
  { name: "Hourglass", icon: <FaHourglassHalf className="text-white text-lg mr-2" /> },
  { name: "Command+R", icon: <FaKeyboard className="text-white text-lg mr-2" /> },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative text-center px-4 py-20 bg-black overflow-hidden"
    >
      {/* Blurry lime background shape */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-lime-400 opacity-30 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Bringing Your <br /> Dream Into{" "}
          <span className="text-lime-400">Reality</span>
        </h1>
        <p className="text-neutral-400 max-w-xl mx-auto mt-6">
          We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.
        </p>
        <div className="mt-8">
          <a
            href="#get-started"
            className="bg-lime-400 text-black font-semibold px-6 py-3 rounded inline-block"
          >
            Book A Meeting
          </a>
        </div>

        {/* Brands Section */}
        <div className="mt-12 border-t border-neutral-800 pt-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-lime-400"></div>
            <p className="text-sm uppercase text-white font-bold">
              Trusted by amazing brands
            </p>
            <div className="h-px w-24 bg-lime-400"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand) => (
              <span
                key={brand.name}
                className="flex items-center gap-2 bg-neutral-900 px-4 py-2 rounded-full text-white font-bold text-lg"
              >
                {brand.icon}
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
