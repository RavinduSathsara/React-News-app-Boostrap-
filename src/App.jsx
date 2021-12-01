import React, { useEffect } from "react";
import { useState } from "react";

import AppNavBar from "./components/AppNavBar";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Register from "./screens/Register";
import SignIn from "./screens/SignIn";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState(0);
  return (
    <div className={theme === 0 ? "bg-light" : "bg-dark"}>
      <BrowserRouter>
        <AppNavBar theme={theme} />

        <div class="d-flex justify-content-end">
          {theme === 0 ? (
            <button
              onClick={() => {
                setTheme(1);
              }}
              type="button"
              className="btn btn-dark m-2 "
            >
              Dark
            </button>
          ) : (
            <button
              onClick={() => {
                setTheme(0);
              }}
              type="button"
              className="btn btn-light m-2"
            >
              Light
            </button>
          )}
        </div>

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
