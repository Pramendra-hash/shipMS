import React from "react";
import { useNavigate } from "react-router-dom";
import CaptainAI from "./CaptainAI";

function Banner() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-950 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-900 text-cyan-300 text-sm">
              🚢 Smart Maritime Solution
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold text-white">
              Manage Your
              <span className="block text-cyan-400">
                Fleet Efficiently
              </span>
            </h1>

            <p className="mt-6 text-slate-400 text-lg">
              Track ships, monitor captains, manage routes,
              cargo operations and maintenance from one dashboard.
            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => navigate("/register")}
                className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold text-white"
              >
                Get Started
              </button>

              <button
                onClick={() => navigate("/ships")}
                className="border border-slate-700 px-6 py-3 rounded-lg text-white"
              >
                View Demo
              </button>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  500+
                </h2>
                <p className="text-slate-400">Ships</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  120+
                </h2>
                <p className="text-slate-400">Ports</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-cyan-400">
                  24/7
                </h2>
                <p className="text-slate-400">Monitoring</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
              <img
                src="https://wpassets.porttechnology.org/wp-content/uploads/2020/05/25160315/hmm-algeciras.jpg"
                alt="Container Ship"
                className="w-full h-[400px] object-cover rounded-2xl"
              />

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-800 p-4 rounded-xl">
                  <p className="text-slate-400 text-sm">
                    Active Ships
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    248
                  </h3>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  <p className="text-slate-400 text-sm">
                    Cargo Delivered
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    98%
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Banner;