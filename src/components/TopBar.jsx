import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TopBar.css";

import {
  HomeIcon,
  BellIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

export default function TopBar() {
  const navigate = useNavigate();

  return (
    <div className="topbar-container">
      
      {/* Miyraa Logo */}
      <div className="topbar-left">
        <img
          src="/assets/miyraa-glow.png"
          className="miyraa-logo"
          alt="miyraa"
          onClick={() => navigate("/home")}
        />
      </div>

      {/* Right Icons */}
      <div className="topbar-right">
        <HomeIcon
          className="top-icon"
          onClick={() => navigate("/home")}
        />

        <BellIcon
          className="top-icon"
          onClick={() => navigate("/notifications")}
        />

        <ChatBubbleLeftRightIcon
          className="top-icon"
          onClick={() => navigate("/messages")}
        />
      </div>

    </div>
  );
}
