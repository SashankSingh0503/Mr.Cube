// src/Pages/Payment.jsx
import React, { useState } from "react";
import "../Styles/payment.css";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const [selectedMethod, setSelectedMethod] = useState("");
  const [selectedUPI, setSelectedUPI] = useState("");
  const [selectedCard, setSelectedCard] = useState("");

const navigate = useNavigate();

const handlePay = () => {
    navigate("/done");
  };
  
  
  const renderUPITile = (id, icon, label) => (
    <div
      className={`payment-method-card ${selectedUPI === id ? "flipped" : ""}`}
    >
      <div className="payment-card-inner">
        <div className="payment-card-front" onClick={() => setSelectedUPI(id)}>
          <img src={icon} alt={label} />
        </div>
        <div className="payment-card-back">
          <label>Enter UPI ID</label>
          <input type="text" placeholder="yourname@upi" />
        </div>
      </div>
    </div>
  );

  const renderCardTile = (id, icon, label) => (
    <div
      className={`payment-method-card ${selectedCard === id ? "flipped" : ""}`}
    >
      <div className="payment-card-inner">
        <div className="payment-card-front" onClick={() => setSelectedCard(id)}>
          <img src={icon} alt={label} />
        </div>
        <div className="payment-card-back">
          <input type="text" placeholder="Card Number" />
          <input type="text" placeholder="Expiry Date (MM/YY)" />
          <input type="text" placeholder="CVV" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="payment-page">
      <h2>Select Payment Method</h2>
      <div className="payment-options">
        <button
          className={`payment-tab ${selectedMethod === "upi" ? "active" : ""}`}
          onClick={() => setSelectedMethod("upi")}
        >
          UPI
        </button>
        <button
          className={`payment-tab ${selectedMethod === "card" ? "active" : ""}`}
          onClick={() => setSelectedMethod("card")}
        >
          Card
        </button>
        <button
          className={`payment-tab ${selectedMethod === "cod" ? "active" : ""}`}
          onClick={() => setSelectedMethod("cod")}
        >
          Cash on Delivery
        </button>
      </div>

      {selectedMethod === "upi" && (
        <div className="upi-section">
          <h3>Select UPI App</h3>
          <div className="method-grid">
            {renderUPITile("gpay", "/assets/logos/gpay.png", "Google Pay")}
            {renderUPITile("phonepe", "/assets/logos/phonepay.png", "PhonePay")}
            {renderUPITile("paytm", "/assets/logos/paytm.png", "Paytm")}
          </div>
        </div>
      )}

      {selectedMethod === "card" && (
        <div className="card-section">
          <h3>Select Card Type</h3>
          <div className="method-grid">
            {renderCardTile("visa", "/assets/logos/visa.png", "Visa")}
            {renderCardTile("mastercard", "/assets/logos/mastercard.png", "MasterCard")}
            {renderCardTile("rupay", "/assets/logos/rupay.png", "RuPay")}
          </div>
        </div>
      )}

      {selectedMethod === "cod" && (
        <div className="cod-section">
          <h3>Cash on Delivery Selected</h3>
          <p>You can pay in cash once your order is delivered to your address.</p>
        </div>
      )}

      <button className="pay-now-btn" onClick={handlePay}>
            Pay Now
          </button>

      <p className="disclaimer">
        Note: This is dummy data. Final data is sourced from the database.
      </p>
    </div>
  );
}
