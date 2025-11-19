import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#06060d] flex flex-col items-center justify-center px-6 text-white">

      {/* Miyraa Logo */}
      <img
        src="/assets/miyraa-glow.png"
        className="w-40 mb-10 drop-shadow-[0_0_30px_rgba(175,60,255,0.35)]"
        alt="miyraa"
      />

      {/* Login Box */}
      <div className="w-full max-w-xs space-y-4">

        {/* Phone / Email */}
        <input
          type="text"
          placeholder="Phone number, username, or email"
          className="
            w-full p-3 rounded-xl bg-white/5
            border border-white/10 outline-none
            text-sm placeholder-white/40
            focus:border-purple-400 transition
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full p-3 rounded-xl bg-white/5
            border border-white/10 outline-none
            text-sm placeholder-white/40
            focus:border-purple-400 transition
          "
        />

        {/* Login Button */}
        <button
          onClick={() => nav('/mood')}
          className="
            w-full p-3 rounded-xl 
            bg-gradient-to-r from-[#7b5bff] to-[#5b8dff]
            font-semibold text-sm
            shadow-[0_5px_25px_rgba(90,60,255,0.35)]
            active:scale-95 transition
          "
        >
          Log in
        </button>

        {/* OR Separator */}
        <div className="flex items-center gap-4 my-3">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-xs text-white/40">OR</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Google Login */}
        <button
          className="
            w-full flex items-center justify-center
            gap-3 text-white font-semibold text-sm
            bg-white/10 py-3 rounded-xl border border-white/15
            hover:bg-white/20 active:scale-95 transition
          "
        >
          <img
            src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Forgot Password */}
        <div className="text-center text-xs mt-2 text-[#4ea3ff] cursor-pointer">
          Forgot password?
        </div>
      </div>

      {/* Sign up bottom */}
      <div className="mt-10 text-white/60 text-sm">
        Don't have an account?
        <span
          className="text-[#4ea3ff] ml-1 cursor-pointer"
          onClick={() => nav("/signup")}
        >
          Sign up
        </span>
      </div>
    </div>
  );
}
