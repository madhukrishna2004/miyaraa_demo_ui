// src/components/PostCard.jsx
import React from "react";

export default function PostCard({ post }) {
  const username =
    typeof post.user === "string"
      ? post.user
      : post.user?.name
      ? String(post.user.name)
      : "User";

  const userDp =
    post.user && post.user.dp
      ? post.user.dp
      : `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "women" : "men"}/${Math.floor(Math.random() * 80)}.png`;

  return (
    <article
      className="post-card"
      style={{
        width: "100%",
        maxWidth: "100%",
        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
        borderRadius: 16,
        padding: 12,
        boxSizing: "border-box",
        marginBottom: 18,
        boxShadow: "0 6px 28px rgba(20,10,30,0.45)"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <div style={{ width: 40, height: 40, borderRadius: 20, overflow: "hidden", flexShrink: 0 }}>
          <img src={userDp} alt={username} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>{username}</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>@{(post.user?.handle || username).toLowerCase()}</div>
        </div>

        <button style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.6)" }} aria-label="more">
          •••
        </button>
      </div>

      {/* media */}
      {post.media && (
        <div style={{ width: "100%", borderRadius: 12, overflow: "hidden", marginBottom: 10 }}>
          <img
            src={post.media}
            alt={post.caption || "post"}
            style={{
              width: "100%",
              height: 320,
              objectFit: "cover",
              display: "block",
              transform: `translateY(var(--parallax, 0px))`
            }}
            loading="lazy"
          />
        </div>
      )}

      <div style={{ color: "rgba(255,255,255,0.9)", marginBottom: 8 }}>{post.caption}</div>

      <div style={{ display: "flex", alignItems: "center", gap: 16, color: "rgba(255,255,255,0.65)" }}>
        <div style={{ display: "flex", gap: 8 }}>
          <img src="/icons/heart.svg" alt="like" style={{ width: 18, height: 18 }} />
          <img src="/icons/comment.svg" alt="comment" style={{ width: 18, height: 18 }} />
          <img src="/icons/share.svg" alt="share" style={{ width: 18, height: 18 }} />
        </div>

        <div style={{ marginLeft: "auto", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{post.time}</div>
      </div>
    </article>
  );
}
