import React, { useState } from "react";

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="block sm:hidden">
      <div className="px-2 py-2 bg-white rounded-lg shadow-md flex justify-center items-center">
        <button
          className="text-gray-500 hover:text-gray-600"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            height={20}
            width={20}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
      {open && (
        <div
          className="fixed sm:hidden inset-0 bg-white z-50 flex justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          <div className="mt-1">
            <a
              onClick={() => setOpen(!open)}
              href="#home"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Home
            </a>
            <a
              onClick={() => setOpen(!open)}
              href="#works"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Works
            </a>
            <a
              onClick={() => setOpen(!open)}
              href="#about"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              About
            </a>
            <a
              onClick={() => setOpen(!open)}
              href="#skills"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Skills
            </a>
            <a
              onClick={() => setOpen(!open)}
              href="#contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Contact
            </a>
            <a
              onClick={() => setOpen(!open)}
              href="#resume"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
