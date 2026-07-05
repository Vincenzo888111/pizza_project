import React from "react";

const milestones = [
  {
    year: "1990",
    text: "Opened our first location in Naples with just 4 tables and a dream.",
  },
  {
    year: "1998",
    text: 'Won the "Best Pizza in Italy" award, marking our national recognition.',
  },
  {
    year: "2005",
    text: "Expanded internationally with our first location in New York City.",
  },
  {
    year: "2012",
    text: "Launched our global franchise program, sharing our pizza worldwide.",
  },
  {
    year: "2018",
    text: 'Received the "World’s Best Pizza Chain" award at the International Food Expo.',
  },
  {
    year: "2023",
    text: "Served our 10 millionth customer, a milestone in our global journey.",
  },
];

function About3() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-red-500">
            Our Journey
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Milestones & Achievements
          </h1>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {milestones.map((item) => (
            <div
              key={item.year}
              className="relative rounded-xl bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-red-600" />

                <h2 className="text-xl font-extrabold text-gray-900">
                  {item.year}
                </h2>
              </div>

              <p className="mt-3 pl-6 text-sm leading-6 text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About3;
