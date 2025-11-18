import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Splash() {
  const nav = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => nav("/login"), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="w-full h-full bg-[#0A0A14] flex flex-col justify-center items-center">
      <motion.img src="/logo.svg" alt="miyraa" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }} className="w-40"/>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="text-white/70 mt-4">Feel. Create. Connect.</motion.p>
    </div>
  );
}
