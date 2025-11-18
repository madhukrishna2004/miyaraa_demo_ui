import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FAB() {
  const nav = useNavigate();
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => nav("/mood")}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl flex items-center justify-center text-white"
      aria-label="create"
    >
      +
    </motion.button>
  );
}
