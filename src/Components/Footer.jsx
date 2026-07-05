import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-black px-5 py-10 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src="https://i.pinimg.com/736x/f3/48/cf/f348cf31cb3e0a66279e987253d3a5ec.jpg"
              alt="Pizza Labubu Logo"
            />

            <h1 className="text-xl font-bold">
              Pizza <span className="text-red-500">Labubu</span>
            </h1>
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-400">
            Serving world-famous pizza since 1990. Crafted with passion and
            enjoyed globally.
          </p>

          <div className="mt-5 flex gap-3">
            {[
              "fa-facebook-f",
              "fa-instagram",
              "fa-x-twitter",
              "fa-tiktok",
            ].map((icon) => (
              <a
                key={icon}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-red-500"
              >
                <i className={`fa-brands ${icon}`} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-bold">Quick Links</h2>

          <ul className="mt-5 space-y-3 text-sm text-gray-400">
            <li>
              <Link to="/Menu1" className="hover:text-red-500">
                Our Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-500">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-red-500">
                Location
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Franchise
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold">Contact Us</h2>

          <div className="mt-5 space-y-4 text-sm text-gray-400">
            <p className="flex gap-3">
              <i className="fa-solid fa-location-dot mt-1 text-red-500" />
              <span>168 Labubu Street, Food District, Phnom Penh City</span>
            </p>

            <p className="flex gap-3">
              <i className="fa-solid fa-phone mt-1 text-red-500" />
              <span>087 77 49 11</span>
            </p>

            <p className="flex gap-3">
              <i className="fa-solid fa-envelope mt-1 text-red-500" />
              <span>kornvathanak@example.com</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-bold">Opening Hours</h2>

          <div className="mt-5 space-y-3 text-sm text-gray-400">
            <div className="flex justify-between gap-6">
              <span>Monday - Thursday</span>
              <span>11:00 - 22:00</span>
            </div>

            <div className="flex justify-between gap-6">
              <span>Friday - Saturday</span>
              <span>11:00 - 23:00</span>
            </div>

            <div className="flex justify-between gap-6">
              <span>Sunday</span>
              <span>12:00 - 21:00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        <p>
          © 2026 Pizza Labubu. All rights reserved. Crafted with care for pizza
          lovers.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
