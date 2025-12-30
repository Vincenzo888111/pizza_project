import React from "react";

function About1() {
  return (
    <div className="my-5  overflow-hidden">
      <div className='bg-[url("https://i.pinimg.com/1200x/98/bf/eb/98bfeb4ac514fcdcb7df9473780b1553.jpg")]  md:w-full h-[350px] bg-center bg-no-repeat bg-cover  mt-12 '>
        <div className="relative bg-black/60 w-full h-[350px]">
          <h1 className="text-center text-6xl text-white font-bold pt-30 pb-5">
            Our Story
          </h1>
          <p className="text-center text-white">
            From a small family kitchen to a beloved local favorite, our journey
            began with passion <br /> for authentic flavors and quality
            ingredients.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4">
  <div className="flex flex-col md:flex-row md:justify-evenly md:items-center gap-8">
    
    {/* LEFT CONTENT */}
    <div className="about-right md:w-[600px] w-full text-center md:text-left">
      <h1 className="text-2xl text-red-500 font-mono">OUR JOURNEY</h1>
      <h2 className="text-4xl font-bold mt-2">Passion for Pizza</h2>

      <p className="mt-4 text-gray-700">
        What started as a small family kitchen has blossomed into a beloved
        local favorite. Our journey began with a passion for authentic
        flavors and quality ingredients.
      </p>

      <p className="mt-5 text-gray-700">
        Today, we’re proud to serve more than just pizza—we serve moments,
        memories, and a shared love for good food.
      </p>

      {/* STATS */}
      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 mt-6 justify-center">
        <div className="bg-gray-50 shadow-lg p-4 text-center">
          <h1 className="text-4xl font-bold text-red-500">30+</h1>
          <p className="font-mono">Years Experience</p>
        </div>

        <div className="bg-gray-50 shadow-lg p-4 text-center">
          <h1 className="text-4xl font-bold text-red-500">50+</h1>
          <p className="font-mono">Pizza Varieties</p>
        </div>

        <div className="bg-gray-50 shadow-lg p-4 text-center">
          <h1 className="text-4xl font-bold text-red-500">100M+</h1>
          <p className="font-mono">Happy Customers</p>
        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="about1-right md:w-[400px] h-[500px] my-5  w-full flex justify-center">
      <img 
        src="https://i.pinimg.com/1200x/d8/94/44/d89444205a3ba3e91a75ca478343284e.jpg"
        alt="store"
        className="rounded-2xl w-full max-w-full"
      />
    </div>

  </div>
</div>

    </div>
  );
}

export default About1;
