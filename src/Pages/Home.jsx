import React from "react";
import { Helmet } from "react-helmet";
import "../Styles/global.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/products");
  };

  return (
    <div>
      <Helmet>
        <title>Mr. Cube | Natural Tea & Coffee Cubes</title>
        <meta
          name="description"
          content="Discover Mr. Cube's natural tea and coffee cubes. No preservatives, no artificial flavors. Just drop, boil, and enjoy!"
        />
        <meta
          name="keywords"
          content="Mr. Cube, tea cubes, coffee cubes, natural tea, instant tea, ginger tea, cardamom tea, sugar tea cubes"
        />
        <meta name="author" content="Mr. Cube" />
      </Helmet>

      

      {/* Hero Section */}
      <section className="hero no-bg">
        <h1>Tea & Coffee in a Cube!</h1>
        <p>No preservatives, no additives – just boil and sip.</p>
      </section>

      {/* Products */}
      <section className="products" id="products">
        <h2>Our Products</h2>
        <div className="product-slider">
          <div className="product-card slide-in">
            <img src="/assets/images/elaichi.png" alt="Elaichi(cardamom) Tea Cube" />
            <h3>Elaichi(Cardamom) Tea Cube</h3>
            <p>Natural flavour infused , no artificial colour or preservatives</p>
          </div>
          <div className="product-card slide-in">
            <img src="/assets/images/cc.png" alt="Cold coffee Cube" />
            <h3>Cold Coffee Cube Cube</h3>
            <p>Strong flavour best suited with milk</p>
          </div>
          <div className="product-card slide-in">
            <img src="/assets/images/rajma.png" alt="Coffee Cube" />
            <h3>Rajma Masala</h3>
            <p>Natural spicy tangy authentic flavour</p>
          </div>
        </div>
        <div className="view-all-container">
          <button className="view-all-btn" onClick={handleViewAll}>
            View All Products →
          </button>
        </div>
      </section>

      {/* About / Our Services */}
      <section className="about" id="about">
        <h2>About Mr. Cube</h2>
        <p>
          Mr. Cube is an innovative company specializing in cube-shaped beverage and
          culinary products. Our main offerings – tea and coffee cubes – are made
          with real ingredients like tea powder, ginger, cardamom, and natural
          sugar syrup. No artificial colors, preservatives, or chemicals.
        </p>
        <p>
          Just drop a cube into water, bring to a boil, and your fresh cup is ready.
          Choose milk cubes or add your own milk – the choice is yours!
        </p>
      </section>

    </div>
  );
}
