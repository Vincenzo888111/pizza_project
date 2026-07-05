import React from "react";

const team = [
  {
    name: "Chef Mario Rossi",
    role: "Master Pizzaiolo",
    image:
      "https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg",
    bio: "With decades of experience, Mario leads our kitchen with traditional techniques, bold flavors, and a deep love for handmade pizza.",
    skills: ["Recipe Creator", "Dough Expert"],
  },
  {
    name: "Sofia Romano",
    role: "Flavor Specialist",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    bio: "Sofia creates our signature flavor combinations, pairing fresh ingredients with sauces, herbs, and premium toppings.",
    skills: ["Menu Design", "Sauce Maker"],
  },
  {
    name: "Luca Bianchi",
    role: "Wood-Fire Chef",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80",
    bio: "Luca brings every pizza to life in the oven, creating crispy crusts, smoky flavor, and perfectly melted cheese.",
    skills: ["Oven Master", "Crust Expert"],
  },
];

function About4() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-red-500">
            Meet The Team
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            The Masters Behind the Magic
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-500">
            Our passionate team of pizza artisans is dedicated to creating
            unforgettable experiences.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h2>

                <p className="mt-1 font-bold text-red-500">{member.role}</p>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {member.bio}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About4;
