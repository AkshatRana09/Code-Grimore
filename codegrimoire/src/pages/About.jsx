// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1f1f1f] text-white flex items-center justify-center px-4 py-16">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-10 rounded-2xl max-w-4xl w-full transition-all">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-400 mb-6 tracking-wider drop-shadow-glow">
           About CodeGrimoire
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          <span className="text-purple-400 font-semibold">CodeGrimoire</span> is
          a futuristic codex where mythical elegance meets practical coding. 
          This portal lets you summon, save, and browse your sacred code 
          spells — from simple snippets to complex DSA invocations — all 
          in a UI inspired by ancient magic and cyberpunk future.
        </p>
        <p className="mt-6 text-gray-400 text-center">
          Born from the void between logic and lore, it is not just a tool — 
          it’s your enchanted ally in the battle against bugs and complexity.
        </p>
      </div>
    </div>
  );
};

export default About;
