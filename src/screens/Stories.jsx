import React from "react";
import TopBar from "../components/TopBar";

export default function Stories(){
  return (
    <div className="w-full h-full bg-[#0A0A14] text-white flex flex-col">
      <TopBar />
      <div className="p-4 text-white/60">Story viewer — placeholder. Implement full swipe viewer later.</div>
    </div>
  );
}
