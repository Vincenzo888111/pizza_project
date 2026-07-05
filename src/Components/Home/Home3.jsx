import React from "react";

const pizzas = [
  {
    id: 1,
    name: "Pepperoni",
    description: "Tomato sauce, mozzarella, and lots of pepperoni.",
    price: 14.99,
    badge: "NEW",
    badgeClass: "bg-black",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Vegetarian",
    description:
      "Tomato sauce, mozzarella, bell peppers, mushrooms, and olives.",
    price: 15.99,
    badge: "SALE",
    badgeClass: "bg-red-600",
    image:
      "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Spicy Diavola",
    description: "Spicy salami, chili flakes, mozzarella, and tomato sauce.",
    price: 22.99,
    badge: "",
    badgeClass: "",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

function Home3({ cart, setCart }) {
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <section className="bg-red-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Our Signature Pizza
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Taste the creations that made us famous worldwide.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {pizza.badge && (
                  <span
                    className={`absolute right-3 top-3 rounded px-3 py-1 text-xs font-bold text-white ${pizza.badgeClass}`}
                  >
                    {pizza.badge}
                  </span>
                )}
              </div>

              <div className="flex min-h-[230px] flex-col p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {pizza.name}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
                  {pizza.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-xl font-bold text-orange-600">
                    ${pizza.price.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(pizza)}
                    className="rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home3;
