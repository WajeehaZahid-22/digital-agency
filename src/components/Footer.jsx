import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDribbble } from 'react-icons/fa';
import { MdEmail, MdCall } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid Section */}
        <div className="grid md:grid-cols-2 gap-10 border-b border-[#1e1e1e] pb-10">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-white">Kro</span>
              <span className="text-lime-400">nix</span>
            </h2>
            <p className="text-sm text-gray-300 mt-4 max-w-md">
              Kronix – the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.
            </p>
          </div>

          {/* Right Contact Info */}
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <MdEmail className="text-lime-400 text-lg" />
              <span>info@kronix.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-300">
              <MdCall className="text-lime-400 text-lg" />
              <span>(001) 1231 3435</span>
            </div>
            <div className="flex gap-5 text-lg text-lime-400 mt-3">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaLinkedinIn className="hover:text-white cursor-pointer" />
              <FaDribbble className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Navigation and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white">Process</a>
            <a href="#" className="hover:text-white">Benefits</a>
            <a href="#" className="hover:text-white">Services</a>
            <a href="#" className="hover:text-white">Portfolio</a>
            <a href="#" className="hover:text-white">FAQ</a>
          </div>
          <p className="text-xs">© 2023 shantogfx – All Right Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
