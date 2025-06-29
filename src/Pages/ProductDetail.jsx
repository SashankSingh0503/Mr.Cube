import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import allProducts from "../data/products";
import "../Styles/productDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const [imageIndex, setImageIndex] = useState(0);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    setImageIndex(0);
  }, [id]);

  if (!product) return <p>Product not found.</p>;

  const images = [
    product.image,
    "/assets/images/ginger1.png",
    "/assets/images/ginger2.png",
    "/assets/images/ginger3.png",
  ];

  const toggleExpand = (section) => {
    setExpanded((prev) => (prev === section ? null : section));
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>

      {/* Image Carousel */}
      <div className="image-carousel">
        <button
          className="nav-btn left"
          onClick={() =>
            setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
        >
          &#8592;
        </button>
        <img src={images[imageIndex]} alt={`Slide ${imageIndex}`} />
        <button
          className="nav-btn right"
          onClick={() => setImageIndex((prev) => (prev + 1) % images.length)}
        >
          &#8594;
        </button>
      </div>

      <p className="price">₹{product.price}</p>
      <p className="desc">
        {product.name} is made with premium ingredients with no artificial
        colors or preservatives. Drop in boiling water and enjoy authentic
        flavor instantly.
      </p>

      {/* Collapsible Sections */}
      <div className="info-sections">
        {["Ingredients", "How to Make", "Shelf Life", "License"].map((title) => (
          <div key={title} className="info-tile">
            <div className="info-header" onClick={() => toggleExpand(title)}>
              {title}
              <span className="arrow">{expanded === title ? "▲" : "▼"}</span>
            </div>
            {expanded === title && (
              <div className="info-content">
                {title === "Ingredients" &&
                  "Tea extract, Milk powder, ginger extract, Cardamom extract, Lemongrass extract, Blackpepper extract, Water, sugar. No artificial additives."}
                {title === "How to Make" &&
                  "Add one cube to boiling water. Stir well."}
                {title === "Shelf Life" &&
                  "Best before 6 months from the date of packaging."}
                {title === "License" &&
                  "FSSAI Approved. Manufactured under hygiene-certified conditions."}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="disclaimer">
        * This is dummy data. Final data will be dynamically sourced from the
        database.
      </p>
    </div>
  );
}
