import React from "react";

function Home3() {
  return (
    <section className="bg-red-50 min-h-screen py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our Signature Pizza
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Taste the creation that us famous worldwide.
        </p>
        {/* <div class="mt-6">
      <button class="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800">Shop Now</button>
    </div> */}
      </div>

      {/* <div class="flex flex-wrap justify-center gap-4 mb-10">
    <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">All</button>
    <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">Headphones</button>
    <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">Shoes</button>
    <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">Watches</button>
    <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">Accessories</button>
  </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Product Image"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Pepperoni</h3>
            <p className="text-gray-600 mt-2">
              Tomato sauce, mozzarella, and lots of pepperoni.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-orange-600">$12.99</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl hover:bg-orange-800">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Product Image"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
              SALE
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">Vegetarian</h3>
            <p className="text-gray-600 mt-2">
              Tomato sauce, mozzarella, bell peppers, mushrooms, and olives.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-orange-600">$14.99</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl hover:bg-orange-800">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Product Image"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-1">Vegetarian</h3>
            <p className="text-sm text-gray-500 mb-2">
              Tomato sauce, mozzarella, bell peppers, mushrooms, and olives.
            </p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-orange-600">$13.99</span>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-4xl hover:bg-orange-800">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="bg-gradient-to-r from-red-600 to-orange-400 font-bold text-white w-[200px] h-[50px] rounded-4xl  transform hover:scale-103 shadow hover:shadow-xl">
          View Full Menu
        </button>
      </div>
    </section>
  );
}

export default Home3;
