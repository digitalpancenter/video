import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">MyLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
             <a
              href="#screen-recorder-section"
              className="text-gray-700 hover:text-blue-600"
            >
              Video screen recording
            </a>
            <Link
              to="/video-editor"
              className="text-gray-700 hover:text-blue-600"
            >
              Video Editor
            </Link>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
          <Link
            to="/screen-recorder"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Video screen recording
          </Link>
          <Link
            to="/video-editor"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Video Editor
          </Link>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;