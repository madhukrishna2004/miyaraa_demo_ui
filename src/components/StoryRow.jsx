// src/components/StoryRow.jsx
import React from "react";
import "../styles/animations.css";

const stories = [
  { id: "s1", user: "You", thumb: "/assets/real/dp1.png" },
  { id: "s2", user: "Arjun", thumb: "/assets/real/dp2.png" },
  { id: "s3", user: "Aditi", thumb: "/assets/real/dp3.png" },
  { id: "s4", user: "Rhea", thumb: "/assets/real/dp4.png" },
  { id: "s5", user: "Sam", thumb: "/assets/real/dp5.png" }
];

export default function StoryRow({ onOpen = () => {} }) {
  return (
    <div style={{ padding: "8px 10px 6px 10px" }}>
      <div
        style={{
          display: "flex",
          gap: 12,
          overflowX: "auto",
          padding: "4px 4px",
          alignItems: "center",
          scrollSnapType: "x mandatory"
        }}
        className="no-scrollbar"
      >
        {stories.map((s, i) => (
          <button
            key={s.id}
            onClick={() => onOpen(s)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 64,
              flexShrink: 0,
              background: "transparent",
              border: "none",
              padding: 0,
              scrollSnapAlign: "start"
            }}
            aria-label={`Open ${s.user} story`}
          >
            <div className="story-ring-animated">
              <img
                src={s.thumb}
                alt={s.user}
                className="story-dp-animated"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ marginTop: 6, fontSize: 11, color: "rgba(255,255,255,0.75)", width: 64, textAlign: "center", overflow: "hidden", textOverflow: "ellipsis" }}>
              {s.user}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
