import React, { useState } from "react";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Process", href: "#process" },
    { label: "Benefits", href: "#benefits" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-neutral-800 relative">
      {/* Logo */}
      <div className="font-bold text-2xl cursor-pointer px-4 sm:px-20">
        <a href="#hero">
          <span className="text-white">Kro</span>
          <span className="text-lime-400">nix</span>
        </a>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 text-base">
        {navLinks.map((link, idx) => (
          <a key={idx} href={link.href} className="hover:text-lime-400">
            {link.label}
          </a>
        ))}
      </nav>

      {/* Desktop Button */}
      <a
        href="#get-started"
        className="hidden md:block bg-lime-400 text-black font-bold px-4 py-2 rounded"
      >
        Get Started
      </a>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white z-20" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-neutral-800 flex flex-col items-center gap-4 py-6 md:hidden z-10">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-white hover:text-lime-400 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            className="bg-lime-400 text-black font-bold px-4 py-2 rounded"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
