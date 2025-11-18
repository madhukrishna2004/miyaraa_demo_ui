import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  return (
    <div className="w-full h-full bg-[#0A0A14] text-white p-6 flex flex-col">
      <div className="mt-6">
        <h1 className="text-3xl font-semibold">Welcome to Miyraa</h1>
        <p className="mt-2 text-white/60">Rebuild social around emotion, authenticity & AI empathy.</p>
      </div>

      <div className="mt-12 space-y-4">
        <button onClick={() => nav("/mood")} className="w-full p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500">
          Continue with Phone
        </button>

        <button onClick={() => nav("/mood")} className="w-full p-4 rounded-2xl bg-white/6">
          Continue as Guest
        </button>
      </div>

      <div className="mt-auto text-center text-white/50 text-xs">By continuing you agree to Terms & Privacy</div>
    </div>
  );
}
