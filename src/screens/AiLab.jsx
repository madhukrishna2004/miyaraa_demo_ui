// src/screens/AiLab.jsx
import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

export default function AiLab() {
  return (
    <div
      style={{
        background: "#06060d",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "90px",
      }}
    >
      <TopBar />

      {/* HEADER */}
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "600",
            background: "linear-gradient(45deg,#ad59ff,#ff7ace)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          AI Creator Lab
        </h1>

        <p style={{ opacity: 0.6, marginTop: "6px" }}>
          Generate art, avatars, captions & more.
        </p>
      </div>

      {/* TOOL GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "18px",
          padding: "20px",
        }}
      >
        {/* AI Avatar */}
        <ToolBox
          title="AI Avatar"
          icon="🤖"
          gradient="linear-gradient(135deg,#8f4bff,#ff5f8a)"
        />

        {/* AI Art */}
        <ToolBox
          title="AI Art"
          icon="🎨"
          gradient="linear-gradient(135deg,#ff4d67,#ffa44e)"
        />

        {/* AI Caption */}
        <ToolBox
          title="Caption AI"
          icon="✨"
          gradient="linear-gradient(135deg,#6bb4ff,#b46bff)"
        />

        {/* Remove BG */}
        <ToolBox
          title="Remove BG"
          icon="✂️"
          gradient="linear-gradient(135deg,#4dffe7,#4da6ff)"
        />

        {/* Upscale */}
        <ToolBox
          title="Image Upscale"
          icon="⚡"
          gradient="linear-gradient(135deg,#ff68f2,#ffce57)"
        />

        {/* Face Enhance */}
        <ToolBox
          title="Face Enhance"
          icon="📸"
          gradient="linear-gradient(135deg,#6dff8d,#70cfff)"
        />
      </div>

      <BottomNav />
    </div>
  );
}

// COMPONENT — AI TOOL CARD
function ToolBox({ title, icon, gradient }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.06)",
        padding: "18px",
        borderRadius: "20px",
        textAlign: "center",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          width: 65,
          height: 65,
          margin: "0 auto",
          borderRadius: "18px",
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
        }}
      >
        {icon}
      </div>

      <p style={{ marginTop: 10, fontSize: 14 }}>{title}</p>
    </div>
  );
}
