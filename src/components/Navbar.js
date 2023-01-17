import React from "react";
import MobileMenu from "./MoblieMenu";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 fixed w-screen ">
      <div className="container sm:mx-auto px-3 flex items-center justify-between">
        <a href="#" className="text-white text-2xl font-medium">
          AHMADDIN
        </a>
        <div className="flex items-center hidden sm:flex">
          <a href="#home" className="px-4 text-white">
            Home
          </a>
          <a href="#works" className="px-4 text-white">
            Works
          </a>
          <a href="#about" className="px-4 text-white">
            About
          </a>
          <a href="#skills" className="px-4 text-white">
            Skills
          </a>
          <a href="#contact" className="px-4 text-white">
            Contact
          </a>
          <a href="#resume" className="px-4 text-white">
            Resume
          </a>
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
