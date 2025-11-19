import React from "react";
import { XMarkIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import { BoltSlashIcon } from "@heroicons/react/24/outline";
import BottomNav from "../components/BottomNav";

export default function CreateOptions() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "#000",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          right: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 20,
        }}
      >
        <XMarkIcon style={{ width: 30, height: 30, color: "#fff" }} />

        <div style={{ display: "flex", gap: 22 }}>
          <BoltSlashIcon style={{ width: 30, height: 30, color: "#fff" }} />
          <Cog6ToothIcon style={{ width: 30, height: 30, color: "#fff" }} />
        </div>
      </div>

      {/* OPTIONS LIST */}
      <div
        style={{
          position: "absolute",
          top: "28%",
          left: 30,
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ fontSize: 34, fontWeight: "700" }}>Aa</span>
          <span style={{ fontSize: 20 }}>Create</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ fontSize: 32 }}>∞</span>
          <span style={{ fontSize: 20 }}>Boomerang</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ fontSize: 32 }}>✨</span>
          <span style={{ fontSize: 20 }}>AI Images</span>
        </div>

        <div style={{ marginTop: 10 }}>
          <span style={{ fontSize: 32 }}>⌄</span>
        </div>
      </div>

      {/* SHUTTER BUTTON */}
      <div
        style={{
          position: "absolute",
          bottom: 150,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          style={{
            width: 94,
            height: 94,
            borderRadius: "50%",
            border: "6px solid #fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: "50%",
              background: "#fff",
            }}
          ></div>
        </div>
      </div>

      {/* MODE SELECTOR */}
      <div
        style={{
          position: "absolute",
          bottom: 95,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 34,
          color: "rgba(255,255,255,0.6)",
          letterSpacing: 2,
          fontSize: 16,
        }}
      >
        <span>POST</span>
        <span style={{ color: "#fff" }}>STORY</span>
        <span>REEL</span>
      </div>

      {/* FLIP BUTTON */}
      <div
        style={{
          position: "absolute",
          bottom: 145,
          right: 40,
          fontSize: 34,
        }}
      >
        ↻
      </div>

      {/* Bottom Nav */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 6 }}>
        <BottomNav />
      </div>
    </div>
  );
}
