import React from 'react';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import pic7 from '../assets/pic7.png';
import pic8 from '../assets/pic8.png';
import pic9 from '../assets/pic9.png';
import pic10 from '../assets/pic10.png';
import pic11 from '../assets/pic11.png';
import pic12 from '../assets/pic12.png';

const BeautifulWorks = () => {
  const images = [
    pic1, pic2, pic3, pic4, pic5, pic6,
    pic7, pic8, pic9, pic10, pic11, pic12,
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Beautiful Works</h2>
        <p className="mt-4 text-gray-600">
          We help our clients grow their bottom-line with clear and professional websites.
        </p>
        <button className="mt-6 px-6 py-2 border border-black text-black rounded-full hover:bg-black hover:text-white transition duration-300">
          Load More
        </button>
      </div>

      {/* Masonry layout */}
      <div className="mt-12 max-w-7xl mx-auto columns-2 sm:columns-3 md:columns-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Work ${index + 1}`}
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeautifulWorks;
