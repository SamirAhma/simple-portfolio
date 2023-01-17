import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 fixed w-screen">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-white text-2xl font-medium">
          AHMADDIN
        </a>
        <div className="flex items-center">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
