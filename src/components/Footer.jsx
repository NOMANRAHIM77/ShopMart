import React from 'react'

const Footer = () => {
  return (
    <footer style={{
      padding: "60px 40px 20px",
      backgroundColor: "#000",
      borderTop: "1px solid #222",
      marginTop: "auto" // Ensures it stays at the bottom if page content is short
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "40px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* Branding Section */}
        <div>
          <h3 style={{ color: "#FFD700", marginBottom: "20px", letterSpacing: "1px" }}>SHOP.</h3>
          <p style={{ color: "#888", fontSize: "0.9rem", lineHeight: "1.6" }}>
            Leading the way in digital innovation and premium hardware since 2026. 
            Crafting experiences that matter.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: "20px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#888", fontSize: "0.9rem" }}>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>Products</li>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>About Us</li>
            <li style={{ marginBottom: "10px", cursor: "pointer" }}>Privacy Policy</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 style={{ color: "#fff", marginBottom: "20px" }}>Stay Updated</h4>
          <div style={{ display: "flex", borderRadius: "4px", overflow: "hidden" }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              style={{ 
                padding: "10px", 
                backgroundColor: "#111", 
                border: "1px solid #333", 
                color: "#fff", 
                outline: "none",
                flex: 1 
              }} 
            />
            <button style={{ 
              padding: "10px 15px", 
              backgroundColor: "#FFD700", 
              border: "none", 
              fontWeight: "bold",
              cursor: "pointer"
            }}>
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        textAlign: "center", 
        marginTop: "60px", 
        color: "#444", 
        fontSize: "0.8rem", 
        borderTop: "1px solid #111", 
        paddingTop: "20px" 
      }}>
        © 2026 SHOP Solutions. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer