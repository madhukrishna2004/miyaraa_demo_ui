// src/screens/Stories.jsx
import React, { useState, useEffect, useRef } from "react";
import { XMarkIcon, PaperAirplaneIcon, EyeIcon } from "@heroicons/react/24/solid";

const STORIES = [
  {
    user: "Aish",
    avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&q=60",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&q=80",
    views: 129
  },
  {
    user: "Shareef",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=60",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1200&q=80",
    views: 88
  },
  {
    user: "RKLS Groups",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=60",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80",
    views: 203
  }
];

export default function Stories() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);

  // Auto-progress story
  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStory();
          return 0;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [index]);

  const nextStory = () => {
    setIndex((i) => (i + 1 < STORIES.length ? i + 1 : i));
  };

  const prevStory = () => {
    setIndex((i) => (i > 0 ? i - 1 : 0));
  };

  // Swipe gesture
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let startX = 0;

    const onStart = (e) => (startX = e.touches[0].clientX);
    const onEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) prevStory();
      else if (dx < -50) nextStory();
    };

    el.addEventListener("touchstart", onStart);
    el.addEventListener("touchend", onEnd);

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, []);

  const story = STORIES[index];

  return (
    <div
      ref={containerRef}
      className="w-full h-full bg-black relative overflow-hidden"
      style={{ touchAction: "none" }}
    >
      {/* Background story image */}
      <img
        src={story.img}
        className="w-full h-full object-cover"
        alt="story"
      />

      {/* TOP OVERLAY */}
      <div className="absolute top-0 left-0 right-0 p-4">
        {/* PROGRESS BARS */}
        <div className="flex gap-2 mb-3">
          {STORIES.map((_, i) => (
            <div
              key={i}
              className="h-[3px] bg-white/30 rounded-full flex-1 overflow-hidden"
            >
              <div
                className="h-full bg-white"
                style={{
                  width: i < index ? "100%" : i === index ? `${progress}%` : "0%"
                }}
              />
            </div>
          ))}
        </div>

        {/* TOP USER + CLOSE BTN */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={story.avatar}
              className="w-10 h-10 rounded-full border-2 border-white/40"
            />
            <div className="text-white text-lg font-semibold">{story.user}</div>
          </div>

          <button className="p-2 text-white">
            <XMarkIcon className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* VIEW COUNT (BOTTOM LEFT) */}
      <div className="absolute bottom-24 left-4 flex items-center text-white/80 gap-2 text-sm">
        <EyeIcon className="w-4 h-4" />
        {story.views} views
      </div>

      {/* REPLY BOX (BOTTOM) */}
      <div className="absolute bottom-6 left-0 right-0 px-4">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 flex items-center px-4 py-3 rounded-2xl">
          <input
            placeholder="Send a reply..."
            className="bg-transparent flex-1 text-white outline-none"
          />
          <PaperAirplaneIcon className="w-6 h-6 text-white opacity-80 transform rotate-90" />
        </div>
      </div>

      {/* LEFT TAP ZONE */}
      <div
        onClick={prevStory}
        className="absolute left-0 top-0 h-full w-1/2 z-20"
      />

      {/* RIGHT TAP ZONE */}
      <div
        onClick={nextStory}
        className="absolute right-0 top-0 h-full w-1/2 z-20"
      />
    </div>
  );
}
