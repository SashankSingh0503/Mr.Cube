// src/Pages/Cart.jsx
import React, { useState } from "react";
import "../Styles/cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();

  const [cartItems] = useState([
    {
      id: 1,
      name: "Cold Coffee Cube Pack",
      price: 50,
      quantity: 1,
      image: "/assets/images/cc.png",
    },
    {
      id: 2,
      name: "Cardamom Tea Cube Pack",
      price: 45,
      quantity: 1,
      image: "/assets/images/elaichi.png",
    },
    {
      id: 3,
      name: "Chicken Masala Cube",
      price: 110,
      quantity: 1,
      image: "/assets/images/chicken.png",
    },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = 30;
  const delivery = 20;
  const gst = Math.round(0.05 * subtotal);
  const total = subtotal - discount + delivery + gst;

  const handleContinue = () => {
    navigate("/select-address");
  };

  return (
    <div className="cart-page">
      <h2>Your Cart waiting to be on the way 🚚</h2>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
              <p>Qty: {item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Price Summary</h3>
        <div className="summary-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="summary-row">
          <span>Discount</span>
          <span>- ₹{discount}</span>
        </div>
        <div className="summary-row">
          <span>Delivery Fee</span>
          <span>₹{delivery}</span>
        </div>
        <div className="summary-row">
          <span>GST (5%)</span>
          <span>₹{gst}</span>
        </div>
        <hr />
        <div className="summary-row total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <div className="coupon-bar">
          <input type="text" placeholder="Apply coupon code" />
          <button>Apply</button>
        </div>

        <button className="continue-btn" onClick={handleContinue}>
          Continue →
        </button>
        <p className="disclaimer">Note: This is dummy data. Final data is sourced from the database.</p>
      </div>
    </div>
  );
}
