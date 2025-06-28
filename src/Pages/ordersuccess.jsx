// src/Pages/OrderSuccess.jsx
import React from "react";
import "../Styles/orderSuccess.css";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="order-success-page">
      <div className="success-box">
        <img src="/assets/icons/success.gif" alt="Success" />
        <h1>Order Confirmed!</h1>
        <p>Thank you for shopping with Mr. Cube. Your order has been placed successfully.</p>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>🧊 Items: Cold Coffee Cube, Cardamom Tea Cube, Chicken Masala Cube</p>
          <p>💵 Payment: UPI (PhonePe)</p>
          <p>📦 Delivery in: 2–4 working days</p>
          <p>🚚 Delivery Address: [Your Dummy Address]</p>
        </div>

        <button onClick={() => navigate("/products")} className="browse-btn">
          Continue Shopping →
        </button>
        <p className="disclaimer">Note: This is a dummy page. Final data is sourced from the database.</p>
      </div>
    </div>
  );
}
