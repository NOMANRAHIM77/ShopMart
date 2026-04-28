import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

const ProductDetails = () => {
  const { slug } = useParams();
  const { products } = useContext(AppContext);

  // match product using slug
  const product = products.find(
    (p) => p.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!product)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg">Product not found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex items-center justify-center">

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#111] p-6 md:p-10 rounded-2xl">

        {/* IMAGE SECTION */}
        <div className="flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-sm md:max-w-md rounded-xl object-cover"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-center">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {product.title}
          </h1>

          <p className="text-gray-400 mt-3 text-sm sm:text-base leading-relaxed">
            {product.description}
          </p>

          <p className="mt-4 text-yellow-400 text-lg">
            ⭐ {product.rating}
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold">
            ${product.price}
          </h2>

          {/* BUTTON */}
          <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition w-full sm:w-fit">
            Add to Cart
          </button>

        </div>
      </div>

    </div>
  );
};

export default ProductDetails;