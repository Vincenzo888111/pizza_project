import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({notification}) {
  const [open, setOpen] = useState(false);

  // Calculate total items in the cart (use quantities or default 1)


  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <nav className="flex justify-between md:justify-evenly items-center h-[50px] w-full px-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text font-bold xl:text-4xl md:text-3xl sm:text-2xl"
        >
          <img
            className="w-15 h-12"
            src="src/assets/image copy 2.png" // adjust path if needed
            alt="Pizza Labubu Logo"
          />
          Pizza Labubu
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-5 items-center">
            <li className="hover:text-orange-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-orange-600">
              <Link to="/Menu1">Menu</Link>
            </li>
            <li className="hover:text-orange-600">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-orange-600">
              <Link to="/contact">Contact</Link>
            </li>

            {/* Cart icon with badge */}
            <li className="hover:text-orange-600 relative">
              <Link to="/payment" aria-label="Cart">
                <i className="fa-solid fa-cart-shopping text-xl md:text-2xl"></i>
                {notification > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1.5 font-bold">
                    {notification}
                  </span>
                )}
              </Link>
            </li>

            <li className="hover:text-orange-600">
              <Link to="/login" aria-label="Login">
                <i className="fa-solid fa-user text-xl md:text-2xl"></i>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="relative md:hidden pr-[20px] flex items-center gap-4">
          {/* Cart icon with badge */}
          <Link to="/payment" className="relative" aria-label="Cart">
            <i className="fa-solid fa-cart-shopping text-orange-600 text-xl"></i>
                {notification > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1.5 font-bold">
                {notification}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="text-xl text-orange-600"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {open && (
            <ul className="absolute top-9 rounded-b-[10px] shadow-2xl right-0 w-40 bg-white text-center py-4 flex flex-col gap-3">
              <li className="hover:underline hover:bg-gradient-to-r from-red-500 via-amber-600 to-yellow-400 text-center">
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="hover:underline hover:bg-gradient-to-r from-red-500 via-amber-600 to-yellow-400 text-center">
                <Link to="/Menu1" onClick={() => setOpen(false)}>
                  Menu
                </Link>
              </li>
              <li className="hover:underline hover:bg-gradient-to-r from-red-500 via-amber-600 to-yellow-400 text-center">
                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>
              <li className="hover:underline hover:bg-gradient-to-r from-red-500 via-amber-600 to-yellow-400 text-center">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="hover:underline hover:bg-gradient-to-r from-red-500 via-amber-600 to-yellow-400 text-center">
                <Link to="/login" onClick={() => setOpen(false)}>
                  <i className="fa-solid fa-user mr-2"></i> Login
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
