import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-indigo-700 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          RadhaWorld
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 items-center">
          <a href="#about" className="text-lg hover:text-gray-200 transition">
            About
          </a>
          <a href="#contact" className="text-lg hover:text-gray-200 transition">
            Contact
          </a>
          <a href="#service" className="text-lg hover:text-gray-200 transition">
            Services
          </a>
          <a href="#account" className="text-lg hover:text-gray-200 transition">
            Your Account
          </a>
          <button className="bg-white text-indigo-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col bg-indigo-600 px-6 py-4 space-y-4">
          <a href="#about" className="hover:text-gray-200">
            About
          </a>
          <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
          <a href="#service" className="hover:text-gray-200">
            Services
          </a>
          <a href="#account" className="hover:text-gray-200">
            Your Account
          </a>
          <button className="bg-white text-indigo-700 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
