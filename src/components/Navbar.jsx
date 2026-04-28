import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      
      {/* Container */}
      <div className="flex justify-between items-center px-4 md:px-12 py-3">

        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-black">
          SHOP<span className="text-yellow-400">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full">
          <Link className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition" to="/">
            Home
          </Link>
          <Link className="px-3 py-1 rounded-full hover:bg-white hover:text-black transition" to="/product">
            Products
          </Link>
        </div>

        {/* Cart Button */}
        <button className="hidden md:block bg-black text-white px-4 py-2 rounded-lg">
          Cart (0)
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-black"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4 bg-white border-t">

          <Link
            onClick={() => setOpen(false)}
            className="py-2"
            to="/"
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="py-2"
            to="/product"
          >
            Products
          </Link>

          <button className="bg-black text-white py-2 rounded-lg">
            Cart (0)
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;