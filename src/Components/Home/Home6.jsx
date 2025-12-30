import React from "react";

function Home6() {
  const rating = 4;
  return (
    <div className="w-full mt-5 bg-pink-50 overflow-hidden py-10">
  {/* Heading */}
  <h1 className="text-center text-3xl font-bold pt-5">
    Global Testimonials
  </h1>
  <div className="w-[80px] h-[5px] bg-gradient-to-r m-auto mt-2 from-red-500 to-orange-200"></div>

  {/* Cards Grid */}
  <div
    className="
      grid
      justify-items-center
      gap-6
      sm:grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      mt-10
      px-4
    "
  >
    {[1, 2, 3].map((item) => (
      <div
        key={item}
        className="
          w-[280px]
          sm:w-[300px]
          md:w-[340px]
          h-[230px]
          bg-white
          rounded-2xl
          shadow
          transition-transform duration-300
          hover:shadow-xl
          hover:scale-105
        "
      >
        <a href="#">
          <div className="w-10 h-10 mx-auto mt-8 flex items-center justify-center shadow-2xl rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-NjuTS5YjhUlPDbMt9gBHaqIItbT0kwT_84P2ugECcFUAlcwk3IvQNA&s"
              alt=""
            />
          </div>

          <p className="text-3xl text-center text-yellow-400 mt-2">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </p>

          <p className="text-center text-sm mt-1 text-gray-500 px-3">
            Our signature pizza have won international
            award for taste and innovation
          </p>

          <h1 className="text-lg font-bold text-center mt-3">
            Global Delivery
          </h1>
        </a>
      </div>
    ))}
  </div>

  {/* CTA Section */}
  <div className="flex justify-center items-center mt-16 px-4">
    <div className="w-full max-w-5xl rounded-3xl bg-red-600 py-8 px-4">
      <h1 className="text-center text-2xl md:text-3xl font-bold text-white">
        Join Our Global Pizza Club
      </h1>

      <p className="text-gray-200 text-center mt-2 text-sm md:text-base">
        Be the first to know about new menu items, exclusive deals, and
        <br className="hidden md:block" />
        special events from the world's most famous pizzerias.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
        <input
          className="
            w-full
            max-w-sm
            h-[50px]
            bg-white
            text-gray-600
            rounded-3xl
            px-4
          "
          type="email"
          placeholder="Enter your email"
        />

        <button
          className="
            w-full
            max-w-[200px]
            h-[50px]
            bg-gradient-to-r
            from-red-500
            to-orange-400
            rounded-3xl
            font-bold
            text-white
            transform
            hover:scale-105
            transition
          "
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Home6;
