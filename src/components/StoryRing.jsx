// src/components/StoryRow.jsx
import React, { useRef, useEffect } from "react";

/**
 * StoryRow
 * props:
 *  - stories: [{ id, thumb, user }]
 *  - onOpen(story)
 *
 * Duplicate the list to create an infinite feel; optional improvement: reset scroll to middle.
 */
export default function StoryRow({ stories = [], onOpen = () => {} }) {
  const sc = useRef(null);

  useEffect(() => {
    const el = sc.current;
    if (!el) return;
    // center start in the middle for the duplicated array feel (optional)
    // small timeout to ensure layout measured
    setTimeout(() => {
      const mid = el.scrollWidth / 3;
      el.scrollLeft = mid;
    }, 40);
  }, [stories]);

  const items = [...stories, ...stories, ...stories]; // triplicate to reduce edge friction

  return (
    <div className="py-3">
      <div ref={sc} className="flex gap-4 overflow-x-auto no-scrollbar px-4 -mx-4 smooth-touch" style={{ WebkitOverflowScrolling: "touch" }}>
        {items.map((s, idx) => (
          <button key={`${s.id || idx}`} onClick={() => onOpen(s)} className="w-20 flex-shrink-0 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-br from-purple-500 to-pink-500">
              <div className="w-full h-full rounded-full bg-[#0A0A14] flex items-center justify-center overflow-hidden">
                <img src={s.thumb || "/assets/story1.png"} alt={s.user} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-xs mt-2 text-white/70 truncate w-16 text-center">{s.user || "user"}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
