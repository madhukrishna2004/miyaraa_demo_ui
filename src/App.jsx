import React from "react";
import Router from "./navigation/Router";
import { getDailyTheme, themeClassForKey } from "./theme/emotionEngine";

export default function App() {
  // demo user id - replace with real user id in production
  const themeKey = getDailyTheme("demo-user-1");
  const rootClass = themeClassForKey(themeKey);

  return (
    <div className={`${rootClass} min-h-screen flex justify-center items-center bg-black`}>
      <div className="w-[390px] h-[844px] rounded-[32px] overflow-hidden border-[6px] border-neutral-900 shadow-2xl phone-shell">
        <Router />
      </div>
    </div>
  );
}
