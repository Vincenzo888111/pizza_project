import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

function Menu1() {
  const [active, setActive] = useState("all");

  const itemClass = (name) =>
    `w-[120px] h-[27px] rounded-3xl shadow text-black text-sm
     flex items-center justify-center gap-1 cursor-pointer
     transition transform
     ${active === name ? "bg-orange-100 scale-110" : ""}`;

  return (
    <div className="w-full">
      <div className="w-full h-[300px] bg-gray-700 flex flex-col justify-center items-center">
        <h1 className="text-center text-3xl text-white font-bold">
          Our World Famous Menu
        </h1>
        <p className="text-white text-center">
          Explore our world-famous pizzas, crafted with premium ingredients and
          authentic recipes. <br /> From classic favorites to gourmet creations,
          there’s something for every pizza lover. 🍕
        </p>
      </div>
      <div className="block md:m-0 mt-5 md:flex justify-between py-10 px-5 md:px-30">
        <div className="mb-5 md:mb-0">
          <h1 className="text-black font-bold text-2xl font-serif">Signature Pizza</h1>
          <p className="text-gray-500">Handcrafted perfection in every life</p>
        </div>
        <div className="relative md:relative w-full md:w-[300px]">
          <input
            type="search"
            placeholder="Search pizza.."
            className="w-full md:w-full h-[50px] rounded-3xl md:px-5 px-2 md:pr-12 border border-gray-300 focus:outline-none"
          />
          <i className="fa-solid fa-magnifying-glass absolute right-8 top-1/3 -translate-y-0  md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
        <div className="flex justify-center m-auto text-center">
      <ul className="flex flex-wrap justify-center gap-5">
        
        <li>
          <button
            type="button"
            onClick={() => setActive("all")}
            className={itemClass("all")}
          >
            All Pizzas
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setActive("popular")}
            className={itemClass("popular")}
          >
            <i className="fa-solid fa-star text-sky-700"></i>
            Popular
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setActive("new")}
            className={itemClass("new")}
          >
            <i className="fa-solid fa-lightbulb text-yellow-400"></i>
            New
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setActive("veg")}
            className={itemClass("veg")}
          >
            <i className="fa-solid fa-circle text-green-500"></i>
            Vegetarian
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setActive("meat")}
            className={itemClass("meat")}
          >
            <i className="fa-solid fa-drumstick-bite text-orange-700"></i>
            Meat Lover
          </button>
        </li>

        <li>
          <button
            type="button"
            onClick={() => setActive("spicy")}
            className={itemClass("spicy")}
          >
            <i className="fa-solid fa-pepper-hot text-red-600"></i>
            Spicy
          </button>
        </li>

      </ul>
    </div>
    </div>
  );
}

export default Menu1;
{
  /* <div class="w-16 h-16 bg-yellow-400 rounded-full shadow-[0_0_20px_10px_rgba(255,223,0,0.7)] animate-ping"></div> */
}
