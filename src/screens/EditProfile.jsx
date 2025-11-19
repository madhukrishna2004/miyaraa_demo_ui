// src/screens/EditProfile.jsx
import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

export default function EditProfile() {
  return (
    <div 
      style={{
        background: "#06060d",
        minHeight: "100vh",
        color: "white",
        paddingBottom: "90px"
      }}
    >
      <TopBar />

      {/* HEADER */}
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            fontSize: "26px",
            fontWeight: 600,
            background: "linear-gradient(45deg,#ad59ff,#ff7ace)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Edit Profile
        </h1>
        <p style={{ opacity: 0.6, marginTop: "4px" }}>
          Update your personal details.
        </p>
      </div>

      {/* FORM */}
      <div style={{ padding: "20px" }}>

        {/* Avatar */}
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <img
            src="/assets/dp1.jpg"
            alt="avatar"
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #d354ff",
              boxShadow: "0 0 12px rgba(211,84,255,0.5)"
            }}
          />
          <button
            style={{
              marginTop: 12,
              padding: "8px 18px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              cursor: "pointer",
              fontSize: 14
            }}
          >
            Change Photo
          </button>
        </div>

        {/* INPUT FIELD BLOCK */}
        <Field label="Name" placeholder="Enter your name" />
        <Field label="Username" placeholder="Enter username" />
        <Field label="Bio" textarea placeholder="Write a short bio..." />
        <Field label="Website" placeholder="https://example.com" />

        {/* SAVE BUTTON */}
        <button
          style={{
            width: "100%",
            marginTop: 30,
            padding: "14px 0",
            borderRadius: 14,
            background: "linear-gradient(135deg,#a65fff,#ff4f6d)",
            color: "white",
            fontSize: 16,
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 25px rgba(166,95,255,0.3)"
          }}
        >
          Save Changes
        </button>
      </div>

      <BottomNav />
    </div>
  );
}

// COMPONENT — FIELD BOX
function Field({ label, placeholder, textarea }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontSize: 14, opacity: 0.7, marginBottom: 6 }}>{label}</p>

      {textarea ? (
        <textarea
          rows="4"
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
            fontSize: 14,
            resize: "none",
            outline: "none",
          }}
        />
      ) : (
        <input
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "white",
            fontSize: 14,
            outline: "none",
          }}
        />
      )}
    </div>
  );
}
