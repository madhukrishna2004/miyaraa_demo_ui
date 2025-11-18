import React from "react";

export default function ChatBubble({ type = "received", text = "" }) {
  const isSent = type === "sent";
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[78%] p-3 rounded-2xl ${isSent ? "bg-gradient-to-br from-purple-600 to-pink-500 text-white" : "bg-white/6 text-white"}`}>
        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
}
