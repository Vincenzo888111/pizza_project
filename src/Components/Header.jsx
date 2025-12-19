import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full  z-100 bg-white shadow-md ">
      <nav className="flex md:justify-evenly  sm:justify-between justify-between relative  items-center w-full h-[50px]  shadow-md">
        <div className=" flex bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text font-bold xl:text-4xl md:text-3xl sm:text-2xl pl-[20px]">
          <img className="w-15 h-12 " src="src/assets/image copy 2.png" alt="" />
          Pizza Labubu
        </div>
        <div className="hidden md:flex">
          <ul className="flex gap-5">
            <li className="link hover:text-orange-600  ">
              <a href="" >
                Home
              </a>
            </li>
            <li className="link  hover:text-orange-500 ">
              <a href="">Menu</a>
            </li>
            <li className="link hover:text-orange-600 ">
              <a href="">About</a>
            </li>
            <li className="link  hover:text-orange-600 ">
              <a href="">Contact</a>
            </li>
            <li className="transform hover:scale-109  hover:text-orange-600  ">
              <a href="">
                <i className="fa-solid fa-cart-shopping "></i>
              </a>
            </li>
            <li>
              <a href="" className="transform hover:scale-119  hover:text-orange-600 ">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="relative md:hidden">
          {/* Hamburger icon */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:text-2xl sm:text-xl pr-[20px]"
          >
            <i class="fa-solid fa-bars text-orange-600  "></i>
          </button>
          <a href="" className="px-[20px]"><i className="fa-solid fa-user text-orange-600"></i></a>

          {/* Dropdown menu */}
          {open && (
            <ul className="flex flex-col gap-4 bg-white p-6 text-lg shadow-md md:hidden absolute top-8 right-2 w-25 ">
              <li className="flex-row hover:bg-amber-700 hover:w-full">
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Menu</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
