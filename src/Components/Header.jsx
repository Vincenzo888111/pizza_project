import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/Menu1" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Header({ notification = 0 }) {
  const [open, setOpen] = useState(false);

  const badgeCount = Number(notification) || 0;

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="h-11 w-11 rounded-full object-cover"
            src="https://i.pinimg.com/736x/f3/48/cf/f348cf31cb3e0a66279e987253d3a5ec.jpg"
            alt="Pizza Labubu Logo"
          />

          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 bg-clip-text text-xl font-extrabold text-transparent sm:text-2xl lg:text-3xl">
            Pizza Labubu
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `font-medium transition hover:text-orange-600 ${
                      isActive ? "text-orange-600" : "text-gray-700"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <Link
              to="/payment"
              aria-label="Cart"
              className="relative text-gray-700 transition hover:text-orange-600"
            >
              <i className="fa-solid fa-cart-shopping text-2xl" />

              {badgeCount > 0 && (
                <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                  {badgeCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              aria-label="Login"
              className="text-gray-700 transition hover:text-orange-600"
            >
              <i className="fa-solid fa-user text-2xl" />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link
            to="/payment"
            className="relative text-orange-600"
            aria-label="Cart"
          >
            <i className="fa-solid fa-cart-shopping text-xl" />

            {badgeCount > 0 && (
              <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
                {badgeCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition hover:bg-orange-100"
          >
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-orange-100 bg-white px-4 py-4 shadow-lg md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 font-medium transition ${
                      isActive
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
              >
                <i className="fa-solid fa-user mr-2" />
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
