import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)] relative mt-12 bg-cover bg-center w-full md:h-[780px] h-[720px]  px-6 md:px-12 overflow-hidden">
       <div className="absolute inset-0 bg-orange-700/30">
<div className="flex md:pl-20 pl-0 justify-between items-center  ">
        {/* LEFT CONTENT */}
        <div className=" home-right text-center md:text-left py-45 px-[60px] max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            {/* <h1 className="khmer-text text-white">សួរស្តី</h1> */}
            World Famous <br />
            <span className="flex font-bold">
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text">
                Pizza
              </span>
              <span className="text-white ml-2">Experience</span>
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-200">
            Discover the taste that made us famous worldwide. Fresh ingredients,
            authentic recipes, and unforgettable flavors.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white transform hover:scale-105 font-semibold py-3 px-8 rounded-full transition">
              Order Now
            </button>
            <button  className=" bg-white  text-orange-500 hover:bg-orange-500 hover:text-white transform hover:scale-105 font-semibold py-3 px-8 rounded-full transition">
              <a href="/Menu1">View Menu</a>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        {/* <div className=" hidden md:flex justify-center ">
      <div className="home-right mt-16">
        <img
  className="
    w-[240px]
    sm:w-[360px]
    md:w-[460px]
    lg:w-[550px]
    aspect-square
    rounded-[10%]
    object-cover
  "
  src="src/assets/image-copy-2.png"
  alt="Pizza"
/>

      </div>
    </div> */}
      </div>
  </div>
    </div>
  );
}

export default Home;
