import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "../screens/Splash";
import Login from "../screens/Login";
import MoodCalibrate from "../screens/MoodCalibrate";
import HomeFeed from "../screens/HomeFeed";
import Stories from "../screens/Stories";
import Messenger from "../screens/Messenger";
import ChatScreen from "../screens/ChatScreen";
import Profile from "../screens/Profile";

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/mood" element={<MoodCalibrate/>} />
        <Route path="/home" element={<HomeFeed/>} />
        <Route path="/stories" element={<Stories/>} />
        <Route path="/messenger" element={<Messenger/>} />
        <Route path="/chat/:id" element={<ChatScreen/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}
