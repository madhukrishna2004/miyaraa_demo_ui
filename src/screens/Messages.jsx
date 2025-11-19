// src/screens/Messages.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

export default function Messages() {
  const navigate = useNavigate();

  const chats = [
    {
      name: "Aish",
      username: "aish",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=400&q=60",
      lastMsg: "Are we meeting today?",
      time: "9h",
      unread: true,
    },
    {
      name: "RKLS Groups",
      username: "rkls",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=60",
      lastMsg: "Sent yesterday",
      time: "1d",
      unread: false,
    },
    {
      name: "Shareef",
      username: "shareef",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&q=60",
      lastMsg: "Sent a reel",
      time: "3d",
      unread: true,
    },
    {
      name: "Harsha",
      username: "harsha",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=60",
      lastMsg: "Seen Friday",
      time: "4d",
      unread: false,
    },
    {
      name: "Rey Ram",
      username: "rey",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&q=60",
      lastMsg: "Seen Friday",
      time: "4d",
      unread: false,
    },
  ];

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
      <div style={{ padding: "18px 20px 6px" }}>
        <h1
          style={{
            fontSize: 26,
            fontWeight: 700,
            marginBottom: 16,
            background: "linear-gradient(45deg,#b36bff,#ff79c6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Messages
        </h1>

        {/* SEARCH BAR */}
        <div
          style={{
            padding: "10px 14px",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 14,
            color: "#bbb",
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
           <span>Search</span>
        </div>

        <div
          style={{
            marginTop: 14,
            fontSize: 14,
            opacity: 0.8,
            color: "#9b8fff",
            cursor: "pointer",
          }}
        >
          Requests (1)
        </div>
      </div>

      {/* CHAT LIST */}
      <div style={{ marginTop: 10 }}>
        {chats.map((c, i) => (
          <div
            key={i}
            onClick={() => navigate(`/chat/${c.username}`)}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "14px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            {/* AVATAR */}
            <div style={{ position: "relative" }}>
              <img
                src={c.avatar}
                alt=""
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(255,255,255,0.12)",
                }}
              />

              {c.unread && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 12,
                    height: 12,
                    background: "#ff4f79",
                    borderRadius: "50%",
                    border: "2px solid #06060d",
                  }}
                ></span>
              )}
            </div>

            {/* NAME + MESSAGE */}
            <div style={{ marginLeft: 14, flex: 1 }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>{c.name}</div>
              <div
                style={{
                  fontSize: 13,
                  opacity: 0.7,
                  marginTop: 2,
                }}
              >
                {c.lastMsg} • {c.time}
              </div>
            </div>

            {/* CAMERA ICON — not blocking click */}
            <div
              onClick={(e) => {
                e.stopPropagation(); // fix: clicking camera won't block opening chat
                console.log("Camera clicked");
              }}
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              📷
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
