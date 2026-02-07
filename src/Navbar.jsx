import React from "react";

const Navbar = () => {
  const menuItem =
    "relative text-cyan-300 font-medium cursor-pointer transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent cursor-pointer">
            QuickFix
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8">
            <li className={menuItem}>Home</li>
            <li className={menuItem}>Services</li>
            <li className={menuItem}>Pricing</li>
            <li className={menuItem}>About</li>
            <li className={menuItem}>Contact</li>
          </ul>

          {/* Button */}
          <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            Book a Repair
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
