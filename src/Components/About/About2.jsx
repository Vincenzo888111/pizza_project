import React from "react";

const specials = [
  {
    icon: "fa-pagelines",
    title: "Authentic",
    text: "Crafted with traditional recipes and fresh ingredients for a true Italian-inspired taste.",
  },
  {
    icon: "fa-fire",
    title: "Wood-Fired Flavor",
    text: "Baked hot for a crispy crust, smoky aroma, and perfectly melted cheese.",
  },
  {
    icon: "fa-heart",
    title: "Made With Care",
    text: "Every pizza is prepared with attention to detail, from the dough to the final topping.",
  },
];

function About2() {
  return (
    <section className="bg-red-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-extrabold uppercase tracking-wide text-red-600">
            Our Secret
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Makes Us Special
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            The perfect combination of convenience, taste, and quality.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {specials.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500 shadow-lg">
                <i className={`fa-solid ${item.icon} text-3xl text-white`} />
              </div>

              <h2 className="mt-6 text-xl font-bold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About2;
