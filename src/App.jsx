import React from "react";
import AppNavBar from "./components/AppNavBar";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Register from "./screens/Register";
import SignIn from "./screens/SignIn";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
