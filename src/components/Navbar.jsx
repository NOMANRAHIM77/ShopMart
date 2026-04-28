import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Common style for Nav Links
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "8px 16px",
    borderRadius: "20px",
    transition: "all 0.3s ease",
    background: "rgba(0, 0, 0, 0.05)", // Very subtle dark tint for readability
  };

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 50px",
      backgroundColor: "#ffffff", // White background as requested
      boxShadow: "0 2px 15px rgba(0,0,0,0.05)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Logo Area */}
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#000" }}>
        SHOP<span style={{ color: "#FFD700" }}>.</span>
      </div>

      {/* Navigation Links with "Aesthetic" dark pill containers for white text */}
      <div style={{ 
        display: "flex", 
        gap: "10px",
        backgroundColor: "#1a1a1a", // Dark pill to make white text pop on white background
        padding: "5px 15px",
        borderRadius: "50px",
      }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/product" style={linkStyle}>Products</Link>
        <Link to="/productDetails" style={linkStyle}>Product Details</Link>
      </div>

      {/* Action Button */}
      <button style={{
        padding: "10px 20px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "transform 0.2s"
      }}>
        Cart (0)
      </button>
    </nav>
  );
};

export default Navbar;