import CaptainAI from "./CaptainAI";
import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              🚢 ShipMS
            </h2>

            <p className="mt-4 text-slate-400">
              Smart Ship Management System for fleet tracking,
              cargo monitoring and maritime operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li><a href="/" className="hover:text-cyan-400">Home</a></li>
              <li><a href="/ships" className="hover:text-cyan-400">Fleet</a></li>
              <li><a href="/tracking" className="hover:text-cyan-400">Tracking</a></li>
              <li><a href="/reports" className="hover:text-cyan-400">Reports</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>Fleet Monitoring</li>
              <li>Port Management</li>
              <li>Cargo Tracking</li>
              <li>Maintenance Logs</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Contact
            </h3>

            <ul className="space-y-2 text-slate-400">
              <li>📧 support@shipms.com</li>
              <li>📞 +91 98765 43210</li>
              <li>🌍 Mumbai, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 text-sm">
            © 2026 ShipMS. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-cyan-400">
              Facebook
            </a>

            <a href="#" className="text-slate-400 hover:text-cyan-400">
              LinkedIn
            </a>

            <a href="#" className="text-slate-400 hover:text-cyan-400">
              Twitter
            </a>
          </div>

        </div>

      </div>
      <CaptainAI />
    </footer>
  );
}

export default Footer;