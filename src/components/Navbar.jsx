import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  return (
    <nav className="w-full bg-white/90 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center text-white font-extrabold">MP</div>
          <div>
            <div className="text-sky-800 font-semibold">MedicalPassport</div>
            <div className="text-xs text-slate-400">Blockchain-enabled health records</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className={`text-sm ${loc.pathname === "/" ? "text-sky-700 font-semibold" : "text-slate-600"}`}>Home</Link>
          <Link to="/doctor" className={`text-sm ${loc.pathname.startsWith("/doctor") ? "text-sky-700 font-semibold" : "text-slate-600"}`}>Doctor</Link>
          <Link to="/patient" className={`text-sm ${loc.pathname.startsWith("/patient") ? "text-sky-700 font-semibold" : "text-slate-600"}`}>Patient</Link>
          <Link to="/signup" className="text-sm text-sky-600">Sign up</Link>
          <Link to="/login" className="px-3 py-1 bg-sky-600 text-white rounded text-sm">Login</Link>
        </div>
      </div>
    </nav>
  );
}
