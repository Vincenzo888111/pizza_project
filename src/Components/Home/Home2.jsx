import React from "react";

function Home2() {
  return (
    <div className="w-full my-10 md:h-[630px] h-[1150px] overflow-hidden">
      {/* <div className="w-full h-7 bg-white shadow-2xl shadow-orange-500"></div> */}

      {/* <div className="mt-12 h-1 w-full shadow-2xl bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400"></div> */}
      <h1 className="text-center text-5xl mt-10 font-bold">
        Why We're World Famous
      </h1>
      <hr className="mt-1 h-1 w-20 m-auto shadow-2xl bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400" />
      <p className="text-center py-5 text-gray-600">
        For over three decades, we've been perfecting the art of pizza
        making,earning <br /> recognition across the globe
      </p>
     <div className="
  grid
    justify-items-center
    gap-6
    sm:gap-8
    lg:gap-10
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    md:mb-5
    
">

  {/* Card 1 */}
  <div className="
    w-[300px]
    md:w-[350px]
    h-[200px]
    bg-gray-100
    rounded-2xl
    shadow
    transition-transform duration-300
    hover:shadow-xl
    hover:scale-105
  ">
    <a href="#">
      <div className="
        w-10 h-10
        mx-auto mt-8
        flex items-center justify-center
        shadow-2xl
        bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400
        rounded-full
      ">
        <i className="fa-solid fa-award text-white"></i>
      </div>

      <h1 className="text-lg font-bold text-center mt-3">
        Award-Winning Recipes
      </h1>

      <p className="text-center text-sm mt-1 text-gray-500">
        Our signature pizza have won international<br />
        award for taste and innovation
      </p>
    </a>
  </div>

  {/* Card 2 */}
  <div className="
    w-[300px]
    md:w-[350px]
    h-[200px]
    bg-gray-100
    rounded-2xl
    shadow
    transition-transform duration-300
    hover:shadow-xl
    hover:scale-105
  ">
    <a href="#">
      <div className="
        w-10 h-10
        mx-auto mt-8
        flex items-center justify-center
        shadow-2xl
        bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400
        rounded-full
      ">
        <i className="fa-solid fa-award text-white"></i>
      </div>

      <h1 className="text-lg font-bold text-center mt-3">
        Award-Winning Recipes
      </h1>

      <p className="text-center text-sm mt-1 text-gray-500">
        Our signature pizza have won international<br />
        award for taste and innovation
      </p>
    </a>
  </div>

  {/* Card 3 */}
  <div className="
    w-[300px]
    md:w-[350px]
    h-[200px]
    bg-gray-100
    rounded-2xl
    shadow
    transition-transform duration-300
    hover:shadow-xl
    hover:scale-105
  ">
    <a href="#">
      <div className="
        w-10 h-10
        mx-auto mt-8
        flex items-center justify-center
        shadow-2xl
        bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400
        rounded-full
      ">
        <i className="fa-solid fa-award text-white"></i>
      </div>

      <h1 className="text-lg font-bold text-center mt-3">
        Award-Winning Recipes
      </h1>

      <p className="text-center text-sm mt-1 text-gray-500">
        Our signature pizza have won international<br />
        award for taste and innovation
      </p>
    </a>
  </div>
{/* Card 4 */}
  <div className="
    w-[300px]
    md:w-[350px]
    h-[200px]
    bg-gray-100
    rounded-2xl
    shadow
    transition-transform duration-300
    hover:shadow-xl
    hover:scale-105
  ">
    <a href="#">
      <div className="
        w-10 h-10
        mx-auto mt-8
        flex items-center justify-center
        shadow-2xl
        bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400
        rounded-full
      ">
        <i className="fa-solid fa-award text-white"></i>
      </div>

      <h1 className="text-lg font-bold text-center mt-3">
        Award-Winning Recipes
      </h1>

      <p className="text-center text-sm mt-1 text-gray-500">
        Our signature pizza have won international<br />
        award for taste and innovation
      </p>
    </a>
  </div>
</div>
    </div>
  );
}

export default Home2;
