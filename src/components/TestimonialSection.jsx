import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pic13 from "../assets/pic13.png"; // Your image here

const TestimonialSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <p className="uppercase text-xs text-gray-500 tracking-wide mb-2">Testimonial</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
          Customer is Our Top Priority
        </h2>
        <p className="text-sm text-gray-600 max-w-lg mx-auto mb-10">
          We survey all of our clients, the results of which go directly to our CEO.
        </p>

        {/* Arrows & Card Wrapper */}
        <div className="relative">
          {/* Left Arrow */}
          <button className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 w-9 h-9 rounded-full shadow-md flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row items-center justify-between bg-white transition-all duration-300">
            {/* Left Content */}
            <div className="md:w-3/4 w-full text-left">
              <p className="text-sm text-gray-700 font-semibold mb-2">Gymstory</p>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-3">
                Kornix Is The Best Digital Agency I Have Ever Seen! Highly Recommended!
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                I recently hired Ideapeel for a custom web development project and couldn’t be happier
                with the results. The team was able to bring my unique ideas to life and create a
                website that truly stands out.
              </p>
              <p className="text-sm font-semibold text-black">Diana Loroza</p>
              <p className="text-xs text-gray-500">Director of GYMSTORY</p>
            </div>

            {/* Right Image */}
            <div className="md:w-1/4 w-full flex justify-center mt-6 md:mt-0">
              <div className="bg-blue-300 w-28 h-28 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={pic13}
                  alt="Testimonial"
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 w-9 h-9 rounded-full shadow-md flex items-center justify-center">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
