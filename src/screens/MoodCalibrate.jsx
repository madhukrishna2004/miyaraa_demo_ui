import React from "react";
import { useNavigate } from "react-router-dom";

const moods = [
  { id: "joy", label: "Joy", color: "from-yellow-400 to-pink-400" },
  { id: "calm", label: "Calm", color: "from-blue-400 to-cyan-400" },
  { id: "reflect", label: "Reflect", color: "from-purple-400 to-indigo-500" }
];

export default function MoodCalibrate() {
  const nav = useNavigate();
  return (
    <div className="w-full h-full bg-[#0A0A14] text-white p-6 flex flex-col">
      <h2 className="text-2xl font-semibold">What’s your vibe right now?</h2>
      <p className="text-white/60 mt-2">Pick a mood — Miyraa will adapt the UI silently. (You can skip)</p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {moods.map(m=>(
          <button key={m.id} onClick={() => nav("/home")} className={`p-4 rounded-xl bg-gradient-to-br ${m.color} bg-opacity-10`}>
            <div className="text-sm font-semibold">{m.label}</div>
          </button>
        ))}
      </div>

      <button onClick={() => nav("/home")} className="mt-auto w-full p-3 rounded-xl bg-white/10">Skip & Continue</button>
    </div>
  );
}
