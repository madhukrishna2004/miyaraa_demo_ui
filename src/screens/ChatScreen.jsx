import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

/**
 * ChatScreen.jsx
 * - Hybrid message/reel UI
 * - Auto-detects media URLs (images/videos/unsplash/youtube/pexels/instagram)
 * - Send messages, play media, call placeholders
 */

const SAMPLE_MESSAGES = [
  {
    id: "m1",
    fromMe: false,
    text: "Hey — did you see this reel? https://youtu.be/dQw4w9WgXcQ",
    time: "2:03 PM",
  },
  {
    id: "m2",
    fromMe: false,
    text: "Also this beach pic: https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    time: "2:04 PM",
  },
  {
    id: "m3",
    fromMe: true,
    text: "Nice!! I'll check. Meeting at 6?",
    time: "2:06 PM",
  },
  {
    id: "m4",
    fromMe: false,
    text: "Yes — see you then.",
    time: "2:07 PM",
  },
];

export default function ChatScreen() {
  const navigate = useNavigate();
  const { id } = useParams(); // chat id (user or group)
  const [messages, setMessages] = useState(SAMPLE_MESSAGES);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
    // eslint-disable-next-line
  }, []);

  function scrollToBottom() {
    if (!listRef.current) return;
    requestAnimationFrame(() => {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    });
  }

  // Basic media URL detection
  function detectMediaUrls(text) {
    if (!text) return null;
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = text.match(urlRegex) || [];
    if (!urls.length) return null;

    // prefer video hosts
    for (const u of urls) {
      const lower = u.toLowerCase();
      if (
        lower.includes("youtube.com") ||
        lower.includes("youtu.be") ||
        lower.includes("vimeo.com") ||
        lower.includes("tiktok.com") ||
        lower.includes("instagram.com")
      ) {
        return { type: "video", url: u };
      }
      if (
        lower.includes("unsplash.com") ||
        lower.includes("pexels.com") ||
        lower.match(/\.(jpg|jpeg|png|webp|gif)(\?|$)/)
      ) {
        return { type: "image", url: u };
      }
      if (lower.match(/\.(mp4|mov|webm)(\?|$)/)) {
        return { type: "video", url: u };
      }
    }

    // fallback: return first URL as "link"
    return { type: "link", url: urls[0] };
  }

  function handleSend(e) {
    e?.preventDefault?.();
    const trimmed = input.trim();
    if (!trimmed) return;

    const media = detectMediaUrls(trimmed);
    const newMsg = {
      id: "m" + Date.now(),
      fromMe: true,
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // attach media info if exists
    if (media) newMsg.media = media;

    setMessages((m) => [...m, newMsg]);
    setInput("");
    scrollToBottom();
    // focus again
    inputRef.current?.focus();
  }

  // fake "call" handlers (replace with real voice/video logic)
  function handleCall() {
    alert("Calling — (placeholder). Replace with WebRTC/voice SDK.");
  }
  function handleVideoCall() {
    alert("Starting video call — (placeholder). Replace with WebRTC/video SDK.");
  }

  function handleBack() {
    navigate(-1);
  }

  // Render helpers
  const renderMediaCard = (media) => {
    if (!media) return null;
    if (media.type === "image") {
      return (
        <div style={styles.mediaCard}>
          <img src={media.url} alt="media" style={styles.mediaImg} />
        </div>
      );
    }
    if (media.type === "video") {
      // embed youtube thumbnail if possible
      let thumb = null;
      try {
        const u = new URL(media.url);
        if (u.hostname.includes("youtu.be")) {
          const vid = u.pathname.slice(1);
          thumb = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
        } else if (u.hostname.includes("youtube.com")) {
          const sp = new URLSearchParams(u.search);
          const vid = sp.get("v");
          if (vid) thumb = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`;
        }
      } catch (err) {}
      return (
        <div style={styles.mediaCard}>
          {thumb ? (
            <div style={{ position: "relative" }}>
              <img src={thumb} alt="video" style={styles.mediaImg} />
              <div style={styles.playOverlay}>▶</div>
            </div>
          ) : (
            <div style={{ ...styles.mediaImg, ...styles.paleCard }}>
              <div style={{ fontSize: 13, opacity: 0.9 }}>Video link</div>
              <a href={media.url} target="_blank" rel="noreferrer" style={{ color: "#aab" }}>
                Open
              </a>
            </div>
          )}
        </div>
      );
    }
    // fallback link
    return (
      <div style={styles.linkCard}>
        <a href={media.url} target="_blank" rel="noreferrer" style={{ color: "#dbeaff" }}>
          {media.url}
        </a>
      </div>
    );
  };

  // Message bubble renderer
  function renderMsg(msg) {
    const media = msg.media || detectMediaUrls(msg.text);
    const isMedia = !!media;
    const bubbleStyle = msg.fromMe ? styles.bubbleRight : styles.bubbleLeft;
    const textStyle = msg.fromMe ? styles.bubbleTextRight : styles.bubbleTextLeft;

    return (
      <div key={msg.id} style={{ display: "flex", marginBottom: 12, alignItems: "flex-end" }}>
        {!msg.fromMe && (
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=60&auto=format&fit=crop"
            alt="avatar"
            style={styles.chatAvatar}
          />
        )}

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: msg.fromMe ? "flex-end" : "flex-start" }}>
          {/* if media, show media card */}
          {isMedia ? (
            <div style={bubbleStyle}>
              {renderMediaCard(media)}
              {msg.text && <div style={{ paddingTop: 8, ...textStyle }}>{stripUrls(msg.text)}</div>}
              <div style={styles.msgTime}>{msg.time}</div>
            </div>
          ) : (
            <div style={bubbleStyle}>
              <div style={textStyle}>{msg.text}</div>
              <div style={styles.msgTime}>{msg.time}</div>
            </div>
          )}
        </div>

        {msg.fromMe && (
          <img
            src="https://images.unsplash.com/photo-1545996124-1eb7f4d3d7a3?w=200&q=60&auto=format&fit=crop"
            alt="me"
            style={styles.chatAvatar}
          />
        )}
      </div>
    );
  }

  function stripUrls(text) {
    return text.replace(/https?:\/\/[^\s]+/g, "").trim();
  }

  // quick sample attachments: camera -> add random image
  function handleAttach(type = "image") {
    const sample =
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80&auto=format&fit=crop";
    const media = type === "image" ? { type: "image", url: sample } : { type: "video", url: sample };
    const newMsg = {
      id: "m" + Date.now(),
      fromMe: true,
      text: "",
      media,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((m) => [...m, newMsg]);
    scrollToBottom();
  }

  // small Enter handling
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
        handleSend(e);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line
  }, [input]);

  return (
    <div style={styles.page}>
      <TopBar />

      {/* Header inside chat area (redundant to TopBar but provides back + user info) */}
      <div style={styles.header}>
        <button onClick={handleBack} style={styles.iconButton}>
          ←
        </button>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=60&auto=format&fit=crop" style={styles.headerAvatar} alt="user" />
          <div>
            <div style={{ fontWeight: 700 }}>RKLS Groups</div>
            <div style={{ fontSize: 12, opacity: 0.75 }}>Business chat — active</div>
          </div>
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: 12, alignItems: "center" }}>
          <button title="Voice call" onClick={handleCall} style={styles.iconButton}>
            📞
          </button>
          <button title="Video call" onClick={handleVideoCall} style={styles.iconButton}>
            🎥
          </button>
        </div>
      </div>

      {/* Messages list */}
      <div ref={listRef} style={styles.messagesWrap}>
        <div style={{ padding: 18 }}>
          {messages.map((m) => renderMsg(m))}
        </div>
      </div>

      {/* Input / composer */}
      <form onSubmit={handleSend} style={styles.composer}>
        <button type="button" title="Camera" onClick={() => handleAttach("image")} style={styles.composerIcon}>
          📷
        </button>

        <button
          type="button"
          title={isRecording ? "Stop" : "Record"}
          onClick={() => setIsRecording((s) => !s)}
          style={styles.composerIcon}
        >
          {isRecording ? "⏹" : "🎙"}
        </button>

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message..."
          style={styles.input}
        />

        <button type="button" title="Attach" onClick={() => handleAttach("image")} style={styles.composerIcon}>
          ➕
        </button>

        <button type="submit" style={styles.sendBtn}>
          ➤
        </button>
      </form>

      {/* Bottom Nav */}
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 6, pointerEvents: "none" }}>
        {/* we render BottomNav but allow composer clicks above; pointerEvents none on wrapper to avoid interfering,
            BottomNav itself handles its own events */}
        <div style={{ pointerEvents: "auto" }}>
          <BottomNav />
        </div>
      </div>
    </div>
  );
}

/* ==== inline styles (you can move them to CSS) ==== */
const styles = {
  page: {
    background: "#06060d",
    minHeight: "100vh",
    color: "#fff",
    position: "relative",
    paddingBottom: 120,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 18px",
    borderBottom: "1px solid rgba(255,255,255,0.03)",
    background: "linear-gradient(180deg, rgba(6,6,10,0.8), rgba(6,6,10,0.6))",
  },
  headerAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    objectFit: "cover",
    border: "2px solid rgba(255,255,255,0.06)",
  },
  iconButton: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 18,
    cursor: "pointer",
    padding: "6px 8px",
  },
  messagesWrap: {
    height: "calc(100vh - 230px)",
    overflowY: "auto",
    WebkitOverflowScrolling: "touch",
    background:
      "linear-gradient(180deg, rgba(5,5,8,0.95), rgba(8,8,12,0.98))",
  },

  chatAvatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover",
    margin: "0 10px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
  },

  bubbleLeft: {
    background: "linear-gradient(180deg, rgba(30,30,38,0.85), rgba(20,20,28,0.85))",
    color: "#e6e6e6",
    padding: "10px 12px",
    borderRadius: 14,
    maxWidth: "78%",
    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
  },
  bubbleRight: {
    background: "linear-gradient(180deg, rgba(110,56,255,0.15), rgba(255,79,130,0.06))",
    border: "1px solid rgba(166,95,255,0.18)",
    color: "#fff",
    padding: "10px 12px",
    borderRadius: 14,
    maxWidth: "78%",
    boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
  },
  bubbleTextLeft: { fontSize: 15, lineHeight: 1.3 },
  bubbleTextRight: { fontSize: 15, lineHeight: 1.3 },

  mediaCard: {
    borderRadius: 12,
    overflow: "hidden",
    width: 260,
    maxWidth: "100%",
    background: "#111",
  },
  mediaImg: {
    width: "100%",
    height: 150,
    objectFit: "cover",
    display: "block",
  },
  paleCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 140,
    color: "#fff",
  },
  playOverlay: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    background: "rgba(0,0,0,0.35)",
    padding: 10,
    borderRadius: 40,
    color: "#fff",
    fontSize: 20,
  },

  linkCard: {
    padding: 8,
    background: "rgba(255,255,255,0.03)",
    borderRadius: 8,
  },

  msgTime: {
    fontSize: 11,
    opacity: 0.6,
    marginTop: 6,
    textAlign: "right",
  },

  composer: {
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    bottom: 26,
    width: "92%",
    maxWidth: 720,
    display: "flex",
    gap: 8,
    alignItems: "center",
    padding: "12px 14px",
    borderRadius: 999,
    background: "linear-gradient(180deg, rgba(14,10,18,0.95), rgba(20,14,32,0.98))",
    boxShadow: "0 18px 40px rgba(4,3,8,0.6)",
    zIndex: 120,
    border: "1px solid rgba(255,255,255,0.03)",
  },
  composerIcon: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: 18,
    cursor: "pointer",
    padding: 6,
  },
  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#fff",
    fontSize: 15,
    padding: "6px 8px",
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 44,
    background: "linear-gradient(135deg,#a65fff,#ff4f6d)",
    border: "none",
    color: "#fff",
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 30px rgba(166,95,255,0.35)",
  },
};
