// src/Pages/VerifyOTP.jsx
import React, { useState } from "react";
import "../Styles/otp.css";
import { useNavigate } from "react-router-dom";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === "123456") {
      alert("OTP Verified Successfully!");
      navigate("/payment"); 
    } else {
      alert("Invalid OTP. Enter 123456 for now as OTP.");
    }
  };

  return (
    <div className="otp-page">
      <div className="otp-container">
        <h2>Enter OTP Sent to Your Number</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
        <p className="disclaimer">
          Note: This is dummy data. Final verification is done via secure APIs.
        </p>
      </div>
    </div>
  );
}
