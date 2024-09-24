import React from "react";
import "./App.scss";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";

function App() {
  return (
    <Router >
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/log-in" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
