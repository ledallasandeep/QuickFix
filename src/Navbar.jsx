import React, { useState, useEffect } from "react";
import { Menu, X, Wrench, Sparkles, User, LogIn, UserPlus } from "lucide-react";

const Navbar = () => {
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = ["Home", "Services", "Pricing", "About", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/90 backdrop-blur-xl shadow-lg"
          : "bg-slate-900/70 backdrop-blur-md"
      }`}
    >
      <div className="w-full px-4">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-[auto_1fr_auto_auto] items-center h-20 gap-6">
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-slate-800 p-2 rounded-lg border border-cyan-500/30">
              <Wrench className="w-6 h-6 text-cyan-400" />
            </div>
            <h1 className="text-2xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Quick
              </span>
              <span className="text-white">Fix</span>
            </h1>
          </div>

          {/* CENTER MENU (BETWEEN LOGO & BUTTON) */}
          <ul className="hidden lg:flex justify-center items-center gap-8">
            {menuItems.map((item) => (
              <li
                key={item}
                className="relative text-slate-300 font-medium cursor-pointer group"
              >
                <span className="group-hover:text-white transition">
                  {item}
                </span>
                {/* underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* BOOK REPAIR */}
          <button className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Book a Repair
            <Sparkles className="w-4 h-4" />
          </button>

          {/* ACCOUNT */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-lg hover:scale-110 transition"
            >
              <User className="w-5 h-5" />
            </button>

            {accountOpen && (
              <>
                <div
                  className="fixed inset-0"
                  onClick={() => setAccountOpen(false)}
                ></div>

                <div className="absolute right-0 mt-4 w-52 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 overflow-hidden">
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 transition">
                    <LogIn className="w-4 h-4 text-cyan-400" />
                    Sign In
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-700 transition">
                    <UserPlus className="w-4 h-4 text-indigo-400" />
                    Sign Up
                  </button>
                </div>
              </>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden ml-auto w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-cyan-400"
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 py-6 space-y-4">
          {menuItems.map((item) => (
            <div
              key={item}
              className="text-slate-300 hover:text-white cursor-pointer"
              onClick={() => setMobileMenu(false)}
            >
              {item}
            </div>
          ))}
          <button className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white py-3 rounded-xl font-semibold">
            Book a Repair
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
