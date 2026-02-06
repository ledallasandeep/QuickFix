import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent cursor-pointer">
            QuickFix
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            <li className="text-cyan-300 hover:text-cyan-400 cursor-pointer">
              Services
            </li>
            <li className="text-cyan-300 hover:text-cyan-400 cursor-pointer">
              Pricing
            </li>
            <li className="text-cyan-300 hover:text-cyan-400 cursor-pointer">
              About
            </li>
            <li className="text-cyan-300 hover:text-cyan-400 cursor-pointer">
              Contact
            </li>
          </ul>

          {/* Button */}
          <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
            Book a Repair
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
