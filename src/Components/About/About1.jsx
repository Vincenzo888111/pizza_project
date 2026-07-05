import React from "react";

const stats = [
  {
    value: "30+",
    label: "Years Experience",
  },
  {
    value: "50+",
    label: "Pizza Varieties",
  },
  {
    value: "100M+",
    label: "Happy Customers",
  },
];

function About1() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mt-16 bg-[url('https://i.pinimg.com/1200x/98/bf/eb/98bfeb4ac514fcdcb7df9473780b1553.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex min-h-[360px] items-center justify-center bg-black/60 px-4 text-center">
          <div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Our Story
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-100 sm:text-lg">
              From a small family kitchen to a beloved local favorite, our
              journey began with passion for authentic flavors and quality
              ingredients.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="text-sm font-bold uppercase tracking-wide text-red-500">
              Our Journey
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Passion for Pizza
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              What started as a small family kitchen has blossomed into a
              beloved local favorite. Our journey began with a passion for
              authentic flavors and quality ingredients.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Today, we’re proud to serve more than just pizza. We serve
              moments, memories, and a shared love for good food.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-gray-50 p-5 text-center shadow-sm"
                >
                  <h3 className="text-3xl font-extrabold text-red-500">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-gray-700">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src="https://i.pinimg.com/1200x/d8/94/44/d89444205a3ba3e91a75ca478343284e.jpg"
              alt="Pizza restaurant interior"
              className="h-[360px] w-full rounded-2xl object-cover shadow-xl sm:h-[460px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About1;
