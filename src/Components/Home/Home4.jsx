import React from "react";

function Home4() {
  return (
    <section className="w-full bg-gradient-to-r from-red-600 to-orange-400 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:justify-between">
        <div className="w-full md:w-1/2">
          <img
            className="mx-auto aspect-square w-full max-w-[360px] rounded-3xl object-cover shadow-2xl md:max-w-[340px] lg:max-w-[400px]"
            src="https://i.pinimg.com/736x/b4/f1/65/b4f1657706054c68d982ba75c7de31a6.jpg"
            alt="Truffle and prosciutto pizza"
          />
        </div>

        <div className="w-full text-center md:w-1/2 md:text-left">
          <p className="mx-auto inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-bold tracking-wide text-yellow-300 md:mx-0">
            GLOBAL FAVORITE
          </p>

          <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Truffle & Prosciutto Feast
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-orange-50">
            Our most requested pizza worldwide! Black truffle, premium
            prosciutto, wild mushrooms, and aged mozzarella.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <span className="text-4xl font-extrabold text-yellow-300">
              $29.99
            </span>

            <span className="text-xl text-white/80 line-through">$42.99</span>

            <span className="rounded-full bg-yellow-300 px-4 py-1 text-sm font-bold text-black">
              -30%
            </span>
          </div>

          <button
            type="button"
            className="mt-8 rounded-full bg-white px-8 py-4 font-bold text-red-600 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:text-black hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
          >
            Order This Pizza
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home4;
