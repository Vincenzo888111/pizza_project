import React from "react";

function About5() {
  return (
    <div className="p-18 bg-red-600 ">
      <h1 className="text-4xl text-white text-center font-bold">
        Ready to Taste the Difference?
      </h1>
      <p className="text-white text-center font-mono  pt-2">
        Join millions of satisfied customers who have experienced the magic of
        our pizzas <br /> and discovered the joy of authentic Italian flavors.
      </p>
        <div className="flex justify-center mt-4">
            <button className="bg-white text-red-500 p-2 rounded-3xl font-bold hover:bg-gray-200">Explore Our Menu</button>
            <button className="bg-red-600  text-white border-2 p-2 rounded-3xl font-bold ml-4 hover:bg-red-800">Visit Our Restaurant</button>
        </div>
    </div>
  );
}

export default About5;
