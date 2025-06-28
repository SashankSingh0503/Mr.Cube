import React, { useState } from "react";
import { Link } from "react-router-dom"; // ← ADD THIS
import allProducts from "../data/products";
import "../Styles/product.css";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("default");
  const [segment, setSegment] = useState("all");
  const [cart, setCart] = useState({});

  const handleCartChange = (id, change) => {
    setCart((prev) => {
      const newQty = (prev[id] || 0) + change;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: newQty };
    });
  };

  let filtered = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (segment !== "all") {
    filtered = filtered.filter((p) => p.category === segment);
  }

  if (filter === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (filter === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <section className="products-page">
        <h2 className="page-title">Explore Our Products</h2>

        {/* Search & Filter */}
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {/* Segmented Control */}
        <div className="segment-control">
          {["all", "tea", "coffee", "spices", "others"].map((cat) => (
            <button
              key={cat}
              className={`segment-btn ${segment === cat ? "active" : ""}`}
              onClick={() => setSegment(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Product List */}
        <div className="product-grid">
          {filtered.map((p) => (
            <div className="product-card fade-in" key={p.id}>
              <Link to={`/product/${p.id}`} className="product-link">
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>₹{p.price}</p>
              </Link>
              {!cart[p.id] ? (
                <button
                  onClick={() => handleCartChange(p.id, 1)}
                  className="add-btn"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="qty-control">
                  <button onClick={() => handleCartChange(p.id, -1)}>-</button>
                  <span>{cart[p.id]}</span>
                  <button onClick={() => handleCartChange(p.id, 1)}>+</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
