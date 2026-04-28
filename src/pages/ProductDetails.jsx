import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppProvider'

const ProductDetails = () => {

   const { slug } = useParams();
  const { products } = useContext(AppContext);

 // match product using slug
  const product = products.find((p) =>
    p.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: "40px", color: "#fff", background: "#000", minHeight: "100vh" }}>
      
      <img 
        src={product.thumbnail} 
        style={{ width: "300px", borderRadius: "10px" }} 
      />

      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>⭐ {product.rating}</h3>
      <h2>${product.price}</h2>

    </div>
  )
}

export default ProductDetails