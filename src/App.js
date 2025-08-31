import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage";
import RegistrationPage from "./components/RegistrationPage";
import "./App.css";

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="navigation">
      <div className="nav-left">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
        <span className="nav-link">About Us</span>
        <span className="nav-link">Contact Us</span>
      </div>
      <div className="nav-right">
        <Link to="/register" className={location.pathname === "/register" ? "nav-link active" : "nav-link"}>
          Register / Login
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content Area */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer"></footer>
      </div>
    </Router>
  );
}

export default App;
