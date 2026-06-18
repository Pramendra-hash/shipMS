import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
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

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-slate-300 hover:text-cyan-400">
              Home
            </a>

            <a href="/ships" className="text-slate-300 hover:text-cyan-400">
              Fleet
            </a>

            <a href="/captains" className="text-slate-300 hover:text-cyan-400">
              Captains
            </a>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            {!token ? (
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-bold shadow-[0_10px_25px_rgba(59,130,246,0.5)] hover:scale-105 transition-all duration-300"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="px-6 py-2.5 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </button>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;