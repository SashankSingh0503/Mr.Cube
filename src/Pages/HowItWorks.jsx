// src/Pages/HowITWorks.jsx
import React, { useState } from "react";
import "../Styles/howitworks.css";

const videoData = {
  tea: {
    title: "How to Prepare Tea Cube",
    src: "/assets/videos/tea-demo.mp4",
  },
  coffee: {
    title: "How to Prepare Coffee Cube",
    src: "/assets/videos/coffee-demo.mp4",
  },
  spices: {
    title: "How to Use Spice Mix Cube",
    src: "/assets/videos/spice-demo.mp4",
  },
  others: {
    title: "How to Use Other Cubes",
    src: "/assets/videos/other-demo.mp4",
  },
};

export default function HowITWorks() {
  const [segment, setSegment] = useState("tea");

  const { title, src } = videoData[segment];

  return (
    <section className="how-it-works-page">
      <h1>How to Prepare</h1>
      <p className="description">
        Learn how to quickly prepare our natural cube-based products. Select a category below to watch the demonstration video.
      </p>

      <div className="segment-control">
        {["tea", "coffee", "spices", "others"].map((cat) => (
          <button
            key={cat}
            className={`segment-btn ${segment === cat ? "active" : ""}`}
            onClick={() => setSegment(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="video-container">
        <h2>{title}</h2>
        <video controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
