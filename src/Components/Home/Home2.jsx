import React from "react";

const features = [
  {
    icon: "fa-award",
    title: "Award-Winning Recipes",
    text: "Our signature pizzas have won international awards for taste and innovation.",
  },
  {
    icon: "fa-pizza-slice",
    title: "Authentic Ingredients",
    text: "We use fresh dough, rich sauces, premium cheese, and carefully selected toppings.",
  },
  {
    icon: "fa-globe",
    title: "Loved Worldwide",
    text: "Our pizzas are enjoyed by customers across the globe for their unforgettable flavor.",
  },
  {
    icon: "fa-fire",
    title: "Freshly Baked",
    text: "Every pizza is baked hot and fresh to deliver the perfect crispy, cheesy bite.",
  },
];

function Home2() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Why We're World Famous
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400" />

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-gray-600">
            For over three decades, we've been perfecting the art of pizza
            making, earning recognition across the globe.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="group rounded-xl bg-gray-50 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 shadow-lg">
                <i className={`fa-solid ${item.icon} text-xl text-white`} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home2;
