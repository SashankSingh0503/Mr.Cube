// src/Pages/About.jsx
import React from "react";
import "../Styles/about.css";

export default function About() {
  return (
    <section className="about-page">
      <h1>About Mr. Cube</h1>
      <p>
        At Mr. Cube, we're revolutionizing how tea and coffee are made by introducing an innovative cube-shaped solution. Our cubes are crafted using real ingredients like tea powder, ginger powder, cardamom, coffee, and sugar syrup — with **zero** artificial flavors, preservatives, or colors.
      </p>

      <p>
        Every cube is made to bring convenience to your daily routine — just drop a cube in water, boil it, and you're ready to enjoy a delicious, refreshing beverage. For milk lovers, we also offer cubes that include milk, or you can add your own.
      </p>

      <p>
        We offer a variety of flavors such as Ginger Tea, Cardamom Tea, Classic Coffee, Vanilla Coffee, Herbal Tea, and more. Each cube is packed with natural goodness and easy to carry anywhere.
      </p>

      <h2>Why Choose Mr. Cube?</h2>
      <ul>
        <li>No artificial flavors or preservatives</li>
        <li>Quick and easy to prepare</li>
        <li>Natural ingredients and authentic taste</li>
        <li>Innovative cube-shaped convenience</li>
      </ul>

      <p className="closing-note">
        Mr. Cube is not just a product — it’s a lifestyle. Simple. Pure. Authentic.
      </p>
    </section>
  );
}
