// src/pages/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] text-white px-4 py-10">
      <div className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-yellow-500/30 rounded-2xl shadow-[0_0_30px_5px_rgba(255,215,0,0.2)] p-10">
        <h1 className="text-4xl font-extrabold text-center text-yellow-400 mb-8 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">
          🕯️ Contact the Spellweaver
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm text-yellow-300">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-yellow-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/70"
              placeholder="e.g. Arcanist Zero"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-yellow-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-yellow-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/70"
              placeholder="you@celestial.dev"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-yellow-300">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-yellow-500/30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/70"
              placeholder="Speak now, mage..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-[0_0_20px_rgba(255,215,0,0.5)]"
          >
            Send Rune
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
