// src/screens/Search.jsx
import React, { useEffect, useState, useRef } from "react";
import BottomNav from "../components/BottomNav";
import TopBar from "../components/TopBar";
import "../styles/Search.css";

// Mood-based filters
const moodFilters = {
  joy: "brightness(1.1) saturate(1.3)",
  calm: "brightness(1.05) grayscale(0.1)",
  reflect: "contrast(1.1) brightness(0.9)",
  love: "saturate(1.3) hue-rotate(330deg)",
  focus: "contrast(1.2)",
  energetic: "brightness(1.2) saturate(1.4)",
  lonely: "brightness(0.85) saturate(0.8)",
};

// Local placeholder images (works offline, no crash)
const BASE_IMAGES = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
];

export default function Search() {
  const [tab, setTab] = useState("top");
  const [images, setImages] = useState([]);
  const loaderRef = useRef(null);

  // mood from localStorage
  const mood = localStorage.getItem("miyraa_mood") || "calm";

  // First load
  useEffect(() => {
    setImages([...BASE_IMAGES, ...BASE_IMAGES, ...BASE_IMAGES]);
  }, []);

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // add more images
          setImages((prev) => [...prev, ...BASE_IMAGES]);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
  }, []);

  return (
    <div className="miyraa-search-screen">
      <TopBar />

      {/* Search Bar */}
      <div className="miyraa-search-box">
        <span className="search-icon"></span>
        <input placeholder="Search or Ask Miyraa…" />
      </div>

      {/* Tabs */}
      <div className="explore-tabs">
        {["top", "reels", "people", "tags"].map((t) => (
          <div
            key={t}
            className={`tab-item ${tab === t ? "active" : ""}`}
            onClick={() => setTab(t)}
          >
            {t.toUpperCase()}
          </div>
        ))}
      </div>

      {/* Explore Grid */}
      <div className="miyraa-explore-grid">
        {images.map((img, i) => (
          <div key={i} className="miyraa-grid-item">
            <img src={img} alt="" style={{ filter: moodFilters[mood] }} />
          </div>
        ))}
      </div>

      <div ref={loaderRef} className="scroll-loader">
        Loading more…
      </div>

      <BottomNav />
    </div>
  );
}
