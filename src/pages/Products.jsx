import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppProvider'

const Product = () => {

  const { products, loading } = useContext(AppContext);
  const navigate = useNavigate();

  // slug function
  const createSlug = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };

  if (loading) return <p>Loading products ............</p>;

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", padding: "20px", minHeight: "100vh" }}>
      
      <h1 style={{ textAlign: "center" }}>Our Products</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "10px"
      }}>

        {products.map((product) => {

          const slug = createSlug(product.title);

          return (
            <div 
              key={product.id}
              style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid #333",
                borderRadius: "12px",
                padding: "15px",
                display: "flex",
                flexDirection: "column"
              }}
            >

              {/* IMAGE */}
              <img 
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%", height: "180px", objectFit: "cover" }}
              />

              {/* TITLE */}
              <h3>{product.title}</h3>

              {/* CATEGORY + RATING */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{product.category}</span>
                <span>⭐ {product.rating}</span>
              </div>

              {/* PRICE + BUTTONS */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px"
              }}>
                <span>${product.price}</span>

                <button
                  onClick={() => navigate(`/product/${slug}`)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#FFD700",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer"
                  }}
                >
                  View
                </button>

              </div>

            </div>
          );
        })}

      </div>
    </div>
  )
}

export default Product