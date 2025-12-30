import React from "react";

function About4() {
    const btn ="text-red-500 bg-red-600/20  py-1 px-1 rounded-2xl hover:bg-red-600/40 transition duration-200";
  return (
    <div className="bg-gray-50 p-16">
      <h1 className="text-xl font-mono text-red-500 font-bold text-center mb-1">
        MEET THE TEAM
      </h1>
      <h1 className="text-3xl font-bold text-center">
        The Masters Behind the Magic
      </h1>
      <p className="text-gray-500 text-center p-5">
        Our passionate team of pizza artisans dedicated to creating
        unforgettable <br /> experience
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="  relative">
            <img
              src="https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg"
              alt="user"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-5">
            <h1 className="text-xl font-bold">Chef Mario Rossi</h1>
            <h1 className="text-red-500 font-mono font-bold">
              Master pizzaolo
            </h1>
            <p className="text-gray-500 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              odio, modi architecto, quam quae voluptas beatae doloribus maxime
              sint assumenda nihil rerum possimus perspiciatis sapiente magnam
              illum earum sed tempore?
            </p>
            <div className="flex justify-evenly">
               <button className={btn}>Recipe Creator</button>
                <button className={btn}>Recipe Creator</button>
            </div>
          </div>
        </div>
           <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="  relative">
            <img
              src="https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg"
              alt="user"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-5">
            <h1 className="text-xl font-bold">Chef Mario Rossi</h1>
            <h1 className="text-red-500 font-mono font-bold">
              Master pizzaolo
            </h1>
            <p className="text-gray-500 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              odio, modi architecto, quam quae voluptas beatae doloribus maxime
              sint assumenda nihil rerum possimus perspiciatis sapiente magnam
              illum earum sed tempore?
            </p>
            <div className="flex justify-evenly">
               <button className={btn}>Recipe Creator</button>
                <button className={btn}>Recipe Creator</button>
            </div>
          </div>
        </div>
           <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="  relative">
            <img
              src="https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg"
              alt="user"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-5">
            <h1 className="text-xl font-bold">Chef Mario Rossi</h1>
            <h1 className="text-red-500 font-mono font-bold">
              Master pizzaolo
            </h1>
            <p className="text-gray-500 py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              odio, modi architecto, quam quae voluptas beatae doloribus maxime
              sint assumenda nihil rerum possimus perspiciatis sapiente magnam
              illum earum sed tempore?
            </p>
            <div className="flex justify-evenly">
               <button className={btn}>Recipe Creator</button>
                <button className={btn}>Recipe Creator</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About4;
