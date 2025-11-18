import React from "react";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";

export default function Messenger(){
  const nav = useNavigate();
  const chats = [
    { id: 1, user: "Arjun", mood: "calm", last: "See you at 6" },
    { id: 2, user: "Aditi", mood: "reflective", last: "Sending notes..." },
    { id: 3, user: "Reya", mood: "joy", last: "OMG look!" }
  ];

  return (
    <div className="w-full h-full bg-[#0A0A14] text-white flex flex-col">
      <TopBar />
      <div className="p-4 space-y-3 overflow-y-auto">
        {chats.map(c => (
          <div key={c.id} onClick={() => nav(`/chat/${c.id}`)} className="p-3 rounded-xl bg-white/5 cursor-pointer flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{c.user}</div>
                <div className="text-xs text-white/50">Now</div>
              </div>
              <div className="text-sm text-white/60 mt-1">{c.last}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
