import React from 'react'

function Home5() {
  return (
    <div className='w-full my-5 md:h-[580px] h-[850px] overflow-hidden'>
        <h1 className='text-center text-4xl font-bold py-10 pb-10'>The <span className='bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent '>Pizza Labubu</span> Experience</h1>
        {/* <div className='m-auto  w-[80px] h-[5px] bg-gradient-to-r  from-orange-400 to-red-600'><hr /></div> */}
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
        <p className='text-white text-2xl font-bold'>1</p>
      </div>

      <h1 className="text-lg font-bold text-center mt-3">
        Craft Perfection
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
        <p className='text-white text-2xl font-bold'>2</p>
      </div>

      <h1 className="text-lg font-bold text-center mt-3">
        Wood-Fired-Excellence
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
        <p className='text-white text-2xl font-bold'>3</p>
      </div>

      <h1 className="text-lg font-bold text-center mt-3">
        Global Delivery
      </h1>

      <p className="text-center text-sm mt-1 text-gray-500">
        Our signature pizza have won international<br />
        award for taste and innovation
      </p>
    </a>
  </div>
    </div>
    </div>
  )
}

export default Home5