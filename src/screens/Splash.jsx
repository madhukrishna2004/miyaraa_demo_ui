// src/screens/Splash.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Splash() {
  const nav = useNavigate();

  // Navigate after 5 seconds
  useEffect(() => {
    const t = setTimeout(() => nav("/login"), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center"
      style={{
        background: "radial-gradient(circle at center, #0f0b1a, #06060d 70%)",
      }}
    >
      {/* Glowing Aura Behind Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.6, scale: 1.4 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          filter: "blur(60px)",
          background:
            "linear-gradient(140deg, rgba(170,85,255,0.6), rgba(255,90,150,0.5))",
        }}
      ></motion.div>

      {/* Miyraa Logo */}
      <motion.img
        src="/assets/miyraa-glow.png"
        alt="miyraa"
        initial={{ opacity: 0, scale: 0.7, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ width: 180, zIndex: 2 }}
      />

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 1.6 }}
        className="mt-6 text-white/70 text-lg tracking-wide"
        style={{ zIndex: 3 }}
      >
        Redefine Your Limits.
      </motion.p>

      {/* Bottom Pulse Line */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 160, opacity: 0.4 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        style={{
          height: 2,
          marginTop: 18,
          background:
            "linear-gradient(90deg, transparent, #b067ff, transparent)",
          borderRadius: 10,
        }}
      ></motion.div>
    </div>
  );
}
