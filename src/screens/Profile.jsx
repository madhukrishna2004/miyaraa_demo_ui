import React from "react";
import TopBar from "../components/TopBar";

export default function Profile(){
  return (
    <div className="w-full h-full bg-[#0A0A14] text-white flex flex-col">
      <TopBar />
      <div className="p-4">
        <div className="text-xl font-semibold">Your Profile</div>
        <div className="text-white/60 mt-2">Profile page placeholder — add edit/profile insights here.</div>
      </div>
    </div>
  );
}
