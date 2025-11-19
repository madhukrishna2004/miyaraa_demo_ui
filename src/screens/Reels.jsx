// src/screens/Reels.jsx
import React, { useState, useEffect, useRef } from "react";
import BottomNav from "../components/BottomNav";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  MusicalNoteIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";

const REELS = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517816428104-1d45b4d8291c?w=1400&q=80&auto=format&fit=crop"
];

export default function Reels() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const startY = useRef(null);

  const safeIndex = (i) => (i + REELS.length) % REELS.length;

  // SWIPE EVENTS (Instagram feel)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onStart = (e) => {
      startY.current = e.touches[0].clientY;
    };

    const onEnd = (e) => {
      if (!startY.current) return;

      const dy = e.changedTouches[0].clientY - startY.current;

      if (dy < -50) setIndex((v) => safeIndex(v + 1)); // swipe up
      if (dy > 50) setIndex((v) => safeIndex(v - 1)); // swipe down

      startY.current = null;
    };

    el.addEventListener("touchstart", onStart);
    el.addEventListener("touchend", onEnd);

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchend", onEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#000",
        position: "relative"
      }}
    >
      {REELS.map((src, i) => {
        const pos = (i - index + REELS.length) % REELS.length;

        // POSITION STACK FIX
        const translateY =
          pos === 0 ? 0 :
          pos === 1 ? 100 :
          pos === REELS.length - 1 ? -100 :
          200;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${translateY}%)`,
              transition: "transform 0.45s cubic-bezier(.22,.9,.3,1)",
            }}
          >
            {/* BOTTOM GRADIENT */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                padding: "20px 16px 110px",
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.95) 100%)",
              }}
            >
              {/* USER */}
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=60"
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "2px solid rgba(255,255,255,0.3)"
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 700 }}>User Name</div>
                  <div style={{ opacity: 0.7, fontSize: 13 }}>@username</div>
                </div>
                <button
                  style={{
                    padding: "4px 12px",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.25)",
                    background: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontSize: 12,
                  }}
                >
                  Follow
                </button>
              </div>

              {/* CAPTION */}
              <div
                style={{
                  marginTop: 10,
                  fontSize: 15,
                }}
              >
                A calm scene — auto-caption from Unsplash.
              </div>

              {/* MUSIC */}
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  alignItems: "center",
                  opacity: 0.8,
                  fontSize: 13,
                }}
              >
                <MusicalNoteIcon style={{ width: 18, marginRight: 6 }} />
                Original Sound — User
              </div>
            </div>

            {/* RIGHT ACTIONS FIXED */}
            <div
              style={{
                position: "absolute",
                right: 12,
                bottom: 160,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 22,
              }}
            >
              <Action icon={<HeartIcon />} label="1.9k" />
              <Action icon={<ChatBubbleOvalLeftIcon />} label="87" />
              <Action icon={<PaperAirplaneIcon />} label="Share" />
              <Action icon={<EllipsisVerticalIcon />} />
            </div>
          </div>
        );
      })}

      {/* Bottom Nav */}
      <div style={{ position: "absolute", bottom: 6, left: 0, right: 0 }}>
        <BottomNav />
      </div>
    </div>
  );
}

function Action({ icon, label }) {
  return (
    <div style={{ textAlign: "center", color: "#fff" }}>
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: 14,
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
        }}
      >
        {React.cloneElement(icon, { width: 24, height: 24 })}
      </div>
      {label && <div style={{ fontSize: 12, opacity: 0.85 }}>{label}</div>}
    </div>
  );
}
