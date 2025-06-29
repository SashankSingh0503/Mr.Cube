import React, { useState } from "react";
import "../Styles/global.css";
import { useLocation } from "react-router-dom";

export default function Header({ triggerSplash }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (path) => {
    setIsMobileMenuOpen(false); // close menu on nav
    if (location.pathname !== path) {
      triggerSplash(path);
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-text">Mr. Cube</div>
        <button className="menu-toggle" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
          ☰
        </button>
      </div>

      <nav className={`navbar-links ${isMobileMenuOpen ? "mobile-visible" : ""}`}>
        <span onClick={() => handleNav("/products")} className="nav-link">Products</span>
        <span onClick={() => handleNav("/about")} className="nav-link">About</span>
        <span onClick={() => handleNav("/contact")} className="nav-link">Contact</span>
        <span onClick={() => handleNav("/how-to-prepare")} className="nav-link">How to Prepare</span>
        <span onClick={() => handleNav("/cart")} className="nav-link">🛒 Cart</span>
      </nav>
    </header>
  );
}
