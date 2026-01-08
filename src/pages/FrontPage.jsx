import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import FeatureCard from "../components/FeatureCard";

export default function FrontPage() {
  return (
    <div className="flex flex-col min-h-screen bg-sky-50">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="bg-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-sky-900 mb-4">
            BLOCK CHAIN ENABLED MEDICAL PASSPORT
          </h1>
          <p className="text-lg md:text-xl text-slate-700 mb-8">
            Store verified medical records on blockchain. Control who sees them, access them anytime — anywhere.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/login" className="px-6 py-3 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700">
              Log In
            </Link>
            <Link to="/signup" className="px-6 py-3 border border-sky-600 text-sky-600 rounded-lg hover:bg-sky-50">
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="??"
            title="Immutable Audit Trail"
            description="Records hashed on-chain. History remains verifiable and tamper-proof."
          />
          <FeatureCard
            icon="?"
            title="Doctor-verified Uploads"
            description="Only certified healthcare professionals can upload or approve records — authenticity guaranteed."
          />
          <FeatureCard
            icon="??"
            title="Anywhere Access"
            description="Access your medical history from anywhere in the world — no more lost files."
          />
          <FeatureCard
            icon="??"
            title="Patient Control"
            description="You decide who can view or download your records — full privacy & control."
          />
          <FeatureCard
            icon="?"
            title="Fast Share & Export"
            description="Share or export records instantly when needed — ideal for hospitals or specialists."
          />
          <FeatureCard
            icon="??"
            title="Secure Storage"
            description="Encrypted file storage with blockchain-backed verification — no tampering, always safe."
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-sky-800 mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-2xl mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-slate-600">Create your secure account — get control over your medical data.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-2xl mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Doctor Verifies</h3>
              <p className="text-slate-600">Only authorized medical professionals can verify and upload records.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-2xl mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Upload Records</h3>
              <p className="text-slate-600">Upload medical documents securely and have them hashed on-chain.</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-2xl mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Share or Export</h3>
              <p className="text-slate-600">Share or export the records securely — perfect for hospitals or new doctors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Trust Section */}
      <section id="about" className="py-16 bg-sky-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-sky-800 mb-4">Why choose MedicalPassport?</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            We combine modern blockchain security, doctor-verified uploads, easy sharing and patient privacy — all in one platform.
            Access your complete medical history across hospitals & continents without hassle. Keep control — always.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Trusted by clinics and patients worldwide. Built with state-of-the-art encryption, immutable audit trail, and intuitive design to ensure your data stays safe and portable.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-slate-500 space-y-4 md:space-y-0">
          <span>© {new Date().getFullYear()} MedicalPassport</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
);
}


