import CaptainAvatar from "./CaptainAvatar";
import React, { useState } from "react";

const CaptainAI = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* AI Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-3xl shadow-lg hover:scale-110 transition"
      >
        👨‍✈️
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-slate-900 border border-slate-700 rounded-2xl p-5 shadow-2xl">
          <div className="h-52 rounded-xl overflow-hidden bg-slate-800 mb-4">
  <CaptainAvatar />
</div>
          <h2 className="text-white text-xl font-bold mb-3">
            👨‍✈️ Captain AI
          </h2>

          <p className="text-slate-300">
            Welcome Captain! 🚢
          </p>

          <div className="mt-4 space-y-2">
            <button
  onClick={() => window.location.href = "/ships"}
  className="w-full bg-slate-800 text-white py-2 rounded-lg"
>
  Fleet Status
</button>

<button
  onClick={() => window.location.href = "/captains"}
  className="w-full bg-slate-800 text-white py-2 rounded-lg"
>
  Captains Info
</button>

<button
  onClick={() => alert("📧 support@shipms.com")}
  className="w-full bg-slate-800 text-white py-2 rounded-lg"
>
  Contact Support
</button>

          </div>

        </div>
      )}
    </>
  );
};

export default CaptainAI;