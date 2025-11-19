import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// OLD SCREENS
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import MoodCalibrate from "./screens/MoodCalibrate";
import HomeFeed from "./screens/HomeFeed";
import Stories from "./screens/Stories";
import Messenger from "./screens/Messenger";
import ChatScreen from "./screens/ChatScreen";
import Profile from "./screens/Profile";

// NEW MIYRAA SCREENS
import Reels from "./screens/Reels";
import Create from "./screens/Create";
import AiLab from "./screens/AiLab";

// NEW PAGES YOU REQUESTED
import Notifications from "./screens/Notifications";
import Messages from "./screens/Messages";
import Search from "./screens/Search";
import EditProfile from "./screens/EditProfile";

// THEME ENGINE
import { getDailyTheme, themeClassForKey } from "./theme/emotionEngine";

export default function App() {
  const themeKey = getDailyTheme("demo-user-1");
  const rootClass = themeClassForKey(themeKey);

  return (
    <div className={`${rootClass} min-h-screen flex justify-center items-center bg-black`}>
      <div className="w-[390px] h-[844px] rounded-[32px] overflow-hidden border-[6px] border-neutral-900 shadow-2xl phone-shell">
        
        <Router>
          <Routes>

            {/* --- Default Flow --- */}
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mood" element={<MoodCalibrate />} />

            {/* --- Main UI --- */}
            <Route path="/home" element={<HomeFeed />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/messenger" element={<Messenger />} />
            <Route path="/chat/:id" element={<ChatScreen />} />

            {/* --- Profile --- */}
            <Route path="/profile" element={<Profile />} />

            {/* --- New Miyraa Core Screens --- */}
            <Route path="/reels" element={<Reels />} />
            <Route path="/create" element={<Create />} />
            <Route path="/ai-lab" element={<AiLab />} />

            {/* --- Newly Added Instagram Style Screens --- */}
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile/edit" element={<EditProfile />} />

          </Routes>
        </Router>

      </div>
    </div>
  );
}
