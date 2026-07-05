import React from "react";

const experiences = [
  {
    number: "1",
    title: "Craft Perfection",
    text: "Every pizza is shaped by hand, layered with premium ingredients, and finished with care.",
  },
  {
    number: "2",
    title: "Wood-Fired Excellence",
    text: "Our ovens create a crisp crust, smoky flavor, and beautifully melted cheese every time.",
  },
  {
    number: "3",
    title: "Global Delivery",
    text: "From our kitchen to pizza lovers worldwide, we deliver freshness, speed, and flavor.",
  },
];

function Home5() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          The{" "}
          <span className="bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            Pizza Labubu
          </span>{" "}
          Experience
        </h1>

        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experiences.map((item) => (
            <div
              key={item.number}
              className="rounded-xl bg-gray-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 shadow-lg">
                <span className="text-2xl font-bold text-white">
                  {item.number}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-bold text-gray-900">
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

export default Home5;
