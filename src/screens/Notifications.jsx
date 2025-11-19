import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import "../styles/Notifications.css";

export default function Notifications() {
  const notifs = [
    {
      user: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "missmagalina sent you a follow request",
      time: "3d",
    },
    {
      user: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "dronolphy joined Miyraa. Follow them now.",
      time: "4d",
    },
    {
      user: "https://randomuser.me/api/portraits/men/23.jpg",
      text: "apmsmedc shared a post",
      time: "6d",
    }
  ];

  return (
    <div className="notif-screen">
      <TopBar />

      <h2 className="notif-heading">Notifications</h2>

      <div className="notif-list">
        {notifs.map((n, i) => (
          <div key={i} className="notif-item">
            <img src={n.user} className="notif-dp" />
            <div className="notif-text">
              {n.text}
              <span>{n.time}</span>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
