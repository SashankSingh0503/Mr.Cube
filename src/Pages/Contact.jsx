// src/Pages/Contact.jsx
import React from "react";
import "../Styles/contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-content">
        <form className="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your Name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea rows="5" placeholder="Your message..." required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>Mr. Cube HQ</h2>
          <p>123 Tea Street, Brew City, India - 400001</p>
          <p>Email: support@mrcube.com</p>
          <p>Phone: +91-9876543210</p>

          <h3>Working Hours</h3>
          <p>Mon – Fri: 9:00 AM – 6:00 PM</p>
          <p>Sat – Sun: 10:00 AM – 4:00 PM</p>
        </div>
      </div>
    </section>
  );
}
