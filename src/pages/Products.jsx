import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const Product = () => {
  const { products, loading } = useContext(AppContext);
  const navigate = useNavigate();

  const createSlug = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };

  if (loading) return <p className="text-white p-4">Loading products...</p>;

  return (
    <div className="bg-black text-white min-h-screen px-4 py-6">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">
        Our Products
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {products.map((product) => {
          const slug = createSlug(product.title);

          return (
            <div
              key={product.id}
              className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 flex flex-col hover:scale-[1.02] transition-transform duration-200"
            >
              
              {/* Image */}
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-44 sm:h-48 object-cover rounded-lg"
              />

              {/* Title */}
              <h3 className="mt-3 text-base sm:text-lg font-semibold">
                {product.title}
              </h3>

              {/* Category + Rating */}
              <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2">
                <span className="uppercase">{product.category}</span>
                <span className="text-yellow-400">⭐ {product.rating}</span>
              </div>

              {/* Price + Button */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${product.price}</span>

                <button
                  onClick={() => navigate(`/product/${slug}`)}
                  className="bg-yellow-400 text-black px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-yellow-300 transition"
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;