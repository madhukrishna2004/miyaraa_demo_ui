// src/screens/HomeFeed.jsx
import React, { useMemo, useRef, useEffect } from "react";

import TopBar from "../components/TopBar";
import StoryRow from "../components/StoryRow";
import BottomNav from "../components/BottomNav";

import PostGrid from "../components/PostGrid";
import "../styles/animations.css"; // new css for animations

export default function HomeFeed() {
  const posts = useMemo(
    () => [
      {
        id: "p1",
        user: { name: "Aish", handle: "aish", dp: "/assets/real/dp1.png" },
        caption: "Wide shot from the trip",
        media:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
        time: "2h"
      },
      {
        id: "p2",
        user: { name: "Rhea", handle: "rhea", dp: "/assets/real/dp4.png" },
        caption: "Evening calm — slow waves and soft light.",
        media:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1400&auto=format&fit=crop",
        time: "1h"
      },
      {
        id: "p3",
        user: { name: "Arjun", handle: "arjun", dp: "/assets/real/dp2.png" },
        caption: "Roads and horizons.",
        media:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
        time: "3h"
      }
    ],
    []
  );

  const scrollRef = useRef(null);
  const topBarRef = useRef(null);
  const storyRowRef = useRef(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    const topbar = topBarRef.current;
    const storyRow = storyRowRef.current;
    if (!el || !topbar || !storyRow) return;

    // Parallax for posts (already in PostGrid/PostCard via --parallax)
    function updateParallax() {
      tickingRef.current = false;
      const cards = el.querySelectorAll(".post-card");
      const containerRect = el.getBoundingClientRect();

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const containerCenter = containerRect.top + containerRect.height / 2;
        const distance = cardCenter - containerCenter;
        const maxShift = 28;
        const ratio = Math.max(-1, Math.min(1, distance / (containerRect.height / 1.2)));
        const shift = -ratio * maxShift;
        card.style.setProperty("--parallax", `${shift}px`);
      });
    }

    // Header + stories subtle parallax + elastic overscroll
    let lastScrollTop = 0;
    let overscrollOffset = 0;
    let overscrollTimeout = null;

    function updateHeaderAndStories(scrollTop) {
      // subtle header translate -> 0..-10px
      const maxHeaderShift = 10;
      const headerShift = Math.min(maxHeaderShift, scrollTop * 0.12);
      topbar.style.transform = `translateY(-${headerShift}px)`;

      // small story parallax slower than header
      const storyShift = Math.min(16, scrollTop * 0.08);
      storyRow.style.transform = `translateY(-${storyShift}px)`;

      // if at top and user drags down (overscroll), show small elastic bounce
      // overscroll detection: if scrollTop < 0 (on some browsers) or very small and delta negative
      const delta = scrollTop - lastScrollTop;
      if (scrollTop <= 0 && delta < 0) {
        // accumulate little offset
        overscrollOffset = Math.max(-40, overscrollOffset + delta * 0.4);
        topbar.style.transform = `translateY(${Math.abs(overscrollOffset) / 3}px)`;
        storyRow.style.transform = `translateY(${Math.abs(overscrollOffset) / 5}px)`;
        if (overscrollTimeout) clearTimeout(overscrollTimeout);
        overscrollTimeout = setTimeout(() => {
          // animate back to 0 smoothly
          topbar.style.transition = "transform 420ms cubic-bezier(.2,.9,.2,1)";
          storyRow.style.transition = "transform 420ms cubic-bezier(.2,.9,.2,1)";
          topbar.style.transform = `translateY(0px)`;
          storyRow.style.transform = `translateY(0px)`;
          setTimeout(() => {
            topbar.style.transition = "";
            storyRow.style.transition = "";
            overscrollOffset = 0;
          }, 430);
        }, 40);
      }
      lastScrollTop = scrollTop;
    }

    function onScroll() {
      if (!tickingRef.current) {
        tickingRef.current = true;
        requestAnimationFrame(() => {
          const scrollTop = el.scrollTop;
          updateParallax();
          updateHeaderAndStories(scrollTop);
          tickingRef.current = false;
        });
      }
    }

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateParallax);

    // initial run
    updateParallax();

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateParallax);
      if (overscrollTimeout) clearTimeout(overscrollTimeout);
    };
  }, []);

  return (
    <div className="w-full h-full flex justify-center bg-black overflow-hidden">
      <div
        className="relative bg-[#0A0A14] text-white rounded-[28px] phone-frame-shadow overflow-hidden"
        style={{
          width: 400,
          height: 860,
          border: "1px solid rgba(255,255,255,0.03)"
        }}
      >
        {/* pass refs via DOM querying in useEffect */}
        <div ref={topBarRef}>
          <TopBar />
        </div>

        <div ref={storyRowRef}>
          <StoryRow />
        </div>

        <main
          ref={scrollRef}
          className="h-[calc(100%-200px)] overflow-y-auto no-scrollbar smooth-touch scroll-area"
          style={{ paddingBottom: 120 }}
        >
          <div style={{ padding: "10px 12px 24px 12px" }}>
            <PostGrid posts={posts} />
          </div>
        </main>

        <div style={{ position: "absolute", left: 0, right: 0, bottom: 12, display: "flex", justifyContent: "center", pointerEvents: "auto" }}>
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
