import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./pages/SetAvatar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/setavatar" element={<SetAvatar></SetAvatar>} />
        <Route path="/" element={<Chat></Chat>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;