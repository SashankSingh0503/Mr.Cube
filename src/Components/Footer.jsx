// src/components/Footer.jsx
import React from "react";
import "../Styles/global.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div>
        <h3>Mr. Cube</h3>
        <p>
          Head Office: 123 Spice Lane, Mumbai, India<br />
          Email: support@mrcube.in<br />
          Phone: +91-98765-43210
        </p>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Mr. Cube. All rights reserved.</p>
      </div>
    </footer>
  );
}
