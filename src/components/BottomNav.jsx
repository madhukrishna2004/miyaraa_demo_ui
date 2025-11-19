// src/components/BottomNav.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  UserCircleIcon,
  Squares2X2Icon,
  PlayCircleIcon,
  PencilSquareIcon
} from "@heroicons/react/24/outline";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: 360,
        maxWidth: "92%",
        height: 70,
        borderRadius: 18,
        background:
          "linear-gradient(180deg, rgba(12,8,18,0.95), rgba(20,14,32,0.92))",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "0 16px",
        boxShadow: "0 10px 30px rgba(10,6,20,0.6)",
        position: "fixed",
        bottom: 12,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
      }}
    >

      {/* PROFILE */}
      <UserCircleIcon
        onClick={() => navigate("/profile")}
        style={{
          width: 22,
          height: 22,
          color: "#fff",
          cursor: "pointer",
        }}
      />

      {/* SEARCH GRID */}
      <Squares2X2Icon
        onClick={() => navigate("/search")}
        style={{
          width: 22,
          height: 22,
          color: "#fff",
          cursor: "pointer",
        }}
      />

      {/* CREATE */}
      <div style={{ width: 72, display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/create")}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#a65fff,#ff4f6d)",
            color: "white",
            border: "none",
            fontSize: 28,
            boxShadow: "0 8px 32px rgba(166,95,255,0.45)",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>

      {/* REELS */}
      <PlayCircleIcon
        onClick={() => navigate("/reels")}
        style={{
          width: 22,
          height: 22,
          color: "#fff",
          cursor: "pointer",
        }}
      />

      {/* AI LAB — LAST ICON */}
      <PencilSquareIcon
        onClick={() => navigate("/ai-lab")}
        style={{
          width: 22,
          height: 22,
          color: "#fff",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
