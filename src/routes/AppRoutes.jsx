// src/routes/AppRoutes.jsx
import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import SplashScreen from "../Components/SplashScreen";
import Home from "../Pages/Home";
import Product from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import HowToPrepare from "../Pages/HowItWorks";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ProductDetail from "../Pages/ProductDetail"; 
import SelectAddress from "../Pages/SelectAddress";
import OTP from "../Pages/VerifyOTP";
import Payment from "../Pages/Payment";
import Confirm from "../Pages/ordersuccess";


export default function AppRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showSplash, setShowSplash] = useState(false);

  const triggerSplash = (path) => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      navigate(path); // ✅ use React Router's navigate here
    }, 1500); // duration of splash
  };

  const shouldRenderLayout = location.pathname !== "/";

  return (
    <>
      {showSplash && <SplashScreen />}
      {!showSplash && shouldRenderLayout && <Header triggerSplash={triggerSplash} />}

      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/how-to-prepare" element={<HowToPrepare />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="select-address" element={<SelectAddress/>} />
        <Route path="/otp" element={<OTP/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/done" element={<Confirm/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!showSplash && shouldRenderLayout && <Footer />}
    </>
  );
}
