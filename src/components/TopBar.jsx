// src/components/TopBar.jsx
import React from "react";
import "../styles/TopBar.css";
import "../styles/animations.css";
import { ChatBubbleLeftRightIcon, BellIcon } from "@heroicons/react/24/outline";

const TopBar = () => {
  return (
    <div className="topbar-container">
      {/* Left */}
      <div
        className="topbar-left"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="light-trail" aria-hidden="true" />

        <img
  src="/assets/miyraa-glow.png"
  className="miyraa-logo"
  alt="miyraa"
/>

      </div>

      {/* Right */}
      <div className="topbar-right">
        <BellIcon className="top-icon" />
        <ChatBubbleLeftRightIcon className="top-icon" />
      </div>
    </div>
  );
};

export default TopBar;
