import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
              🚢
            </div>

            <div>
              <h1 className="text-white text-2xl font-bold">
                ShipMS
              </h1>
              <p className="text-slate-400 text-xs">
                Ship Management System
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="/ships"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Fleet
            </a>

            <a
              href="/captains"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Captains
            </a>

            <a
              href="/tracking"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Tracking
            </a>

            <a
              href="/reports"
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              Reports
            </a>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">

            <button className="px-4 py-2 text-slate-300 hover:text-white transition">
              Sign In
            </button>

            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300">
              Get Started
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;