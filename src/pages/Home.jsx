import React, { useRef, useContext } from "react";
import { CarouselPlugin } from "@/components/CaroselPlugin";
import { AppContext } from "../context/AppProvider";

const Home = () => {
  const { products } = useContext(AppContext);

  const arrivalRef = useRef(null);
  const locationRef = useRef(null);

  const scrollToArrivals = () => {
    arrivalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLocation = () => {
    locationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#050505] text-white">

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          SHOP MART
        </h1>

        <p className="mt-4 text-sm sm:text-base text-gray-300">
          Your premium destination for everyday essentials.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
            onClick={scrollToArrivals}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition"
          >
            New Arrivals
          </button>

          <button
            onClick={scrollToLocation}
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition"
          >
            See Locations
          </button>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="py-20 px-4">
        <h2 className="text-center text-3xl sm:text-5xl font-bold bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          Weekly Highlights
        </h2>

        <div className="mt-10 flex justify-center">
          <CarouselPlugin />
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section ref={arrivalRef} className="py-20 px-4 min-h-screen">
        <h2 className="text-center text-3xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          New Arrivals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-[#1a1a1a] rounded-xl p-4 hover:scale-105 transition"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h3 className="mt-3 font-semibold text-lg">
                {product.title}
              </h3>

              <p className="text-yellow-400 mt-1">
                ⭐ {product.rating}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCATIONS */}
      <section
        ref={locationRef}
        className="py-20 px-4 bg-[#0a0a0a] min-h-screen"
      >
        <h2 className="text-center text-3xl sm:text-5xl font-bold mb-10 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
          Our Locations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              city: "Karachi",
              addr: "Clifton Block 5",
              img: "data:image/jpeg;base64,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"
            },
            {
              city: "Lahore",
              addr: "DHA Phase 6",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp0XcugIp6ZqWX4JAhymPiqQKMfY3ibSzqlw&s"
            },
            {
              city: "Islamabad",
              addr: "F-10 Markaz",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJdYKc5Bz1sPbeul_81xj4RnvP5x3ixLT7w&s"
            },
          ].map((loc, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-xl p-4 text-center hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{loc.city}</h3>
              <p className="text-gray-400">{loc.addr}</p>

              <img
                src={loc.img}
                alt={loc.city}
                className="w-full h-48 object-cover rounded-lg mt-3"
              />
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Home;