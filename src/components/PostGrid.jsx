// src/components/PostGrid.jsx
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PostCard from "./PostCard";

/**
 * PostGrid
 * - Receives `posts` array with production-like shape:
 *   { id, user: { name, handle, dp }, caption, media, time }
 * - Renders an animated list with staggered fade/slide
 */

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  },
  hidden: {}
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.998 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.36, ease: [0.22, 0.9, 0.36, 1] } },
  exit: { opacity: 0, y: 8, transition: { duration: 0.2 } }
};

export default function PostGrid({ posts = [] }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={listVariants}
      className="space-y-4"
    >
      <AnimatePresence mode="popLayout">
        {posts.map((p) => (
          <motion.div key={p.id} variants={itemVariants} layout>
            <PostCard post={p} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
