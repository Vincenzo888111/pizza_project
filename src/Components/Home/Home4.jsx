import React from "react";

function Home4() {
  return (
    <div className="w-full block md:flex md:justify-evenly justify-center md:h-[400px] h-[800px] md:px-0 px-2 bg-gradient-to-r from-red-600 to-orange-400">
      <div className="home4-left ">
        <div className=" flex justify-center ">
          <div className="home4-right mt-20">
            <img
              className="
    w-[300px]
    sm:w-[350px]
    md:w-[250px]
    lg:w-[250px]
    aspect-square
    rounded-[10%]
    object-cover
  "
              src="src/assets/image-copy-2.png"
              alt="Pizza"
            />
          </div>
        </div>
      </div>
      <div className="home4-left">
        <p className="mt-10 w-[150px] text-center text-sm mt-2 font-bold text-yellow-400 bg-gray-600/20 p-1 rounded-3xl">
          GLOBAL FAVORITE
        </p>
        <h1 className="text-white my-2 text-4xl font-bold">
          Truffle & Prosciutto Feats
        </h1>
        <p className="text-gray-200">
          Our most requested pizza worldwide! Black truffle,premium prosciutto,
          <br /> wild mushrooms, and aged mozzarella.{" "}
        </p>
        <h1 className="text-3xl font-extrabold text-yellow-300 mt-5">
          $29.99{" "}
          <span className="text-white text-[20px] font-normal  line-through">
            $42.99
          </span>
          <span className="bg-amber-300 px-3 font-normal text-[20px] ml-5 text-black rounded-4xl">
            -30%
          </span>
        </h1>
        <div className="text-center mt-10">
          <button className="bg-gradient-to-r  from-orange-400 to-red-600 font-bold text-black w-[200px] h-[50px] rounded-4xl  transform hover:scale-103 shadow hover:shadow-xl">
            Order This Pizza
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home4;
