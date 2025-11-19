import React from "react";
import { useNavigate } from "react-router-dom";

const moods = [
  { id: "joy", label: "Joy", gradient: "bg-gradient-to-br from-yellow-400 to-pink-500" },
  { id: "calm", label: "Calm", gradient: "bg-gradient-to-br from-blue-400 to-cyan-400" },
  { id: "reflect", label: "Reflect", gradient: "bg-gradient-to-br from-purple-400 to-indigo-500" },

  { id: "love", label: "Love", gradient: "bg-gradient-to-br from-pink-400 to-red-400" },
  { id: "focus", label: "Focus", gradient: "bg-gradient-to-br from-green-400 to-emerald-500" },
  { id: "energetic", label: "Energetic", gradient: "bg-gradient-to-br from-yellow-400 to-orange-500" },

  { id: "lonely", label: "Lonely", gradient: "bg-gradient-to-br from-indigo-300 to-blue-300" },
  { id: "creative", label: "Creative", gradient: "bg-gradient-to-br from-fuchsia-400 to-purple-500" },
  { id: "stressed", label: "Stressed", gradient: "bg-gradient-to-br from-red-400 to-purple-400" },
];

export default function MoodCalibrate() {
  const nav = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#06060D] text-white flex flex-col items-center px-6 pt-10">

      {/* HEADER */}
      <h1 className="text-[28px] font-bold text-center 
        bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        What’s your vibe now?
      </h1>

      <p className="text-white/60 text-center mt-3 text-[15px] leading-relaxed max-w-[300px]">
        Pick how you feel. Miyraa adapts UI colors, energy and mood silently.
      </p>

      {/* MOOD GRID */}
      <div className="grid grid-cols-3 gap-5 mt-10">
        {moods.map((m) => (
          <button
            key={m.id}
            onClick={() => nav("/home")}
            className="
              w-[98px] h-[118px] rounded-2xl bg-white/5 border border-white/10
              flex flex-col items-center justify-center gap-3
              hover:bg-white/10 active:scale-95 transition-all duration-200
              shadow-[0px_8px_25px_rgba(0,0,0,0.35)]
            "
          >
            <div className={`w-12 h-12 rounded-xl ${m.gradient} shadow-md`} />
            <span className="text-[13px]">{m.label}</span>
          </button>
        ))}
      </div>

      {/* SKIP BUTTON */}
      <button
        onClick={() => nav("/home")}
        className="
          mt-auto mb-10 px-8 py-3 rounded-xl bg-white/10 border border-white/15 
          text-[14px] text-white backdrop-blur-md
          hover:bg-white/20 transition-all duration-200
        "
      >
        Skip for now →
      </button>
    </div>
  );
}
