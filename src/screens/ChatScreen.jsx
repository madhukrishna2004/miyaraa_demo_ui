import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ChatBubble from "../components/ChatBubble";

export default function ChatScreen(){
  const { id } = useParams();
  const nav = useNavigate();

  return (
    <div className="w-full h-full bg-[#0A0A14] text-white flex flex-col">
      <div className="p-4 border-b border-white/6 flex items-center gap-3">
        <button onClick={() => nav(-1)} className="text-white/70">←</button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        <div>
          <div className="font-semibold">Chat {id}</div>
          <div className="text-xs text-white/60">Feeling Calm 🌿</div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <ChatBubble type="received" text="Bro check this out" />
        <ChatBubble type="sent" text="Sending it now 😄" />
      </div>

      <div className="p-4 flex items-center gap-3 border-t border-white/6">
        <input className="flex-1 bg-white/6 rounded-full p-3 outline-none text-white" placeholder="Type a message..." />
        <button className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">➤</button>
      </div>
    </div>
  );
}
