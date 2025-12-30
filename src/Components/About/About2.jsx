import React from 'react'

function About2() {
  return (
    <div>
        <section className="bg-red-50  py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-xl md:text-xl font-extrabold text-red-600">
          Our Secrete
        </h1>
        <h1 className="text-4xl md:text-4xl font-extrabold text-black">What Make Us Special</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          The perfect Combination of convenience, taste, and quality
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
          <div className="p-6">
            <div className='rounded-[50%] bg-red-500 w-20 h-20 text-center m-auto pt-5'><i className="fa-brands fa-pagelines text-4xl text-white"></i></div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mt-5">Authentic</h3>
            <p className="text-gray-600 mt-2 text-center">
                Crafted with traditional recipes and fresh ingredients for a true taste.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
         <div className="p-6">
            <div className='rounded-[50%] bg-red-500 w-20 h-20 text-center m-auto pt-5'><i className="fa-brands fa-pagelines text-4xl text-white"></i></div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mt-5">Authentic</h3>
            <p className="text-gray-600 mt-2 text-center">
                Crafted with traditional recipes and fresh ingredients for a true taste.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="p-6">
            <div className='rounded-[50%] bg-red-500 w-20 h-20 text-center m-auto pt-5'><i className="fa-brands fa-pagelines text-4xl text-white"></i></div>
            <h3 className="text-xl font-semibold text-gray-800 text-center mt-5">Authentic</h3>
            <p className="text-gray-600 mt-2 text-center">
                Crafted with traditional recipes and fresh ingredients for a true taste.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About2