import React, { useState } from "react";
import "../Styles/address.css";
import { useNavigate } from "react-router-dom";

export default function SelectAddress() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("OTP send to mobile number. {OTP: 123456}");
    navigate("/otp");
  };

  return (
    <div className="select-address-page">
      <div className="address-container">
        <h2>Select Delivery Address</h2>
        <form className="address-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={form.state}
            onChange={handleChange}
            required
          />
          <button className="verify-btn" type="submit">
            Verify OTP
          </button>
        </form>
        <p className="disclaimer">
          Note: This is dummy data. Final data is sourced from the database.
        </p>
      </div>
    </div>
  );
}
