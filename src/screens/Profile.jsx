// src/screens/Profile.jsx
import React from "react";
import "../styles/Profile.css";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";
import { Squares2X2Icon, FilmIcon, TagIcon } from "@heroicons/react/24/outline";

export default function Profile() {
  // ---------------------------
  //   SEMI-REAL USER DATA
  // ---------------------------
  const user = {
    name: "Aarav Dev",
    username: "@aarav.dev",
    avatar:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=60",
    bio: "Digital Creator | Tech Explorer\nAI • Visual Design • Lifestyle\nwww.aarav.dev",
    posts: 48,
    followers: "12.4k",
    following: 321,
    link: "https://www.aarav.dev",
  };

  // ---------------------------
  //   SEMI-REAL HIGHLIGHTS
  // ---------------------------
  const highlights = [
    {
      name: "Trips",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=60",
    },
    {
      name: "Work",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=300&q=60",
    },
    {
      name: "Vibes",
      img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=300&q=60",
    },
    {
      name: "2024",
      img: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=300&q=60",
    },
  ];

  // ---------------------------
  //   SEMI-REAL POSTS GRID
  // ---------------------------
  const posts = [
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1515378976425-ff1482c13f14?auto=format&fit=crop&w=800&q=60",
  ];

  return (
    <div className="profile-screen">
      <TopBar />

      {/* USER HEADER */}
      <div className="profile-section">
        <div className="profile-row">
          <img src={user.avatar} className="profile-dp" alt="dp" />

          <div className="profile-stats">
            <div>
              <h3>{user.posts}</h3>
              <span>Posts</span>
            </div>
            <div>
              <h3>{user.followers}</h3>
              <span>Followers</span>
            </div>
            <div>
              <h3>{user.following}</h3>
              <span>Following</span>
            </div>
          </div>
        </div>

        {/* NAME / BIO */}
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-username">{user.username}</p>

        <p className="profile-bio">
          Digital Creator | Tech Explorer
          <br />
          AI • Visual Design • Lifestyle
          <br />
          <a href={user.link} target="_blank" rel="noreferrer">
            {user.link}
          </a>
        </p>

        {/* BUTTONS */}
        <div className="profile-buttons">
          <button className="edit-btn">Edit Profile</button>
          <button className="share-btn">Share Profile</button>
        </div>
      </div>

      {/* HIGHLIGHTS */}
      <div className="highlights-row hide-scrollbar">
        <div className="highlight-item">
          <div className="highlight-add">+</div>
          <p>New</p>
        </div>

        {highlights.map((h, i) => (
          <div key={i} className="highlight-item">
            <img src={h.img} className="highlight-img" alt="highlight" />
            <p>{h.name}</p>
          </div>
        ))}
      </div>

      {/* TABS */}
      <div className="profile-tabs">
        <Squares2X2Icon className="tab-icon active" />
        <FilmIcon className="tab-icon" />
        <TagIcon className="tab-icon" />
      </div>

      {/* POSTS GRID */}
      <div className="profile-posts-grid">
        {posts.map((img, i) => (
          <div key={i} className="post-item">
            <img src={img} alt="post" />
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
