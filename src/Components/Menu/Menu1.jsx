import React, { useState } from "react";

function Menu1({ cart, setCart, showModal, setShowModal }) {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [toast, setToast] = useState(false);

  const PIZZA_DATA = [
    {
      id: 1,
      name: "Spicy Diavola",
      price: 22.99,
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=60",
      description: "Tomato sauce, mozzarella, and lots of pepperoni.",
      tags: ["Popular", "Spicy"],
      isNew: true,
    },
    {
      id: 2,
      name: "Margherita Classica",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=500&q=60",
      description: "Traditional tomato sauce with fresh mozzarella and basil.",
      tags: ["Popular", "Vegetarian"],
      isNew: true,
    },
    {
      id: 3,
      name: "BBQ Chicken Feast",
      price: 13.99,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=60",
      description: "Grilled chicken, BBQ sauce, and red onions.",
      tags: ["Popular", "Meat"],
      isNew: true,
    },
    {
      id: 4,
      name: "Cheese Lover",
      price: 12.99,
      image:
        "https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg",
      description: "A rich blend of mozzarella, cheddar, and parmesan.",
      tags: ["Popular", "Cheesy"],
      isNew: false,
    },
    {
      id: 5,
      name: "Hawaiian Tropical",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=60",
      description: "Pineapple, ham, and extra mozzarella cheese.",
      tags: ["Sweet", "Meat"],
      isNew: false,
    },
    {
      id: 6,
      name: "Seafood Extreme",
      price: 18.99,
      image:
        "https://i.pinimg.com/1200x/4e/6a/d1/4e6ad1d2cd1276b677e1cf6edfcc3c99.jpg",
      description: "Fresh shrimp, squid, and mussels with special sauce.",
      tags: ["Seafood", "Premium"],
      isNew: true,
    },
    {
      id: 7,
      name: "Pizza Slices Rustic",
      price: 10.99,
      image:
        "https://i.pinimg.com/1200x/98/bf/eb/98bfeb4ac514fcdcb7df9473780b1553.jpg",
      description: "Tomato sauce, mozzarella, and rustic pepperoni slices.",
      tags: ["Popular", "Spicy"],
      isNew: true,
    },
    {
      id: 8,
      name: "Veggie Delight",
      price: 8.99,
      image:
        "https://i.pinimg.com/736x/bd/33/56/bd3356cecca660b4927f5c1a5c94570a.jpg",
      description: "Tomato sauce, mozzarella, and fresh garden vegetables.",
      tags: ["Popular", "Vegetarian"],
      isNew: true,
    },
    {
      id: 9,
      name: "BBQ Chicken Special",
      price: 11.99,
      image:
        "https://i.pinimg.com/1200x/85/b1/5a/85b15a93913875c036b5c0c39cea0886.jpg",
      description: "Grilled chicken with smoky BBQ sauce and onions.",
      tags: ["Popular", "Meat"],
      isNew: true,
    },
    {
      id: 10,
      name: "Spicy Diavola Junior",
      price: 9.99,
      image:
        "https://i.pinimg.com/736x/7f/fd/51/7ffd51aa3cfe80c6c23ede4f52366bb9.jpg",
      description: "Spicy pepperoni slices with a kick of chili.",
      tags: ["Popular", "Spicy"],
      isNew: true,
    },
    {
      id: 11,
      name: "Margherita Premium",
      price: 15.99,
      image:
        "https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg",
      description: "Traditional Italian basil and fresh mozzarella.",
      tags: ["Popular", "Classic"],
      isNew: true,
    },
    {
      id: 12,
      name: "Rustic Margherita",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=500&q=60",
      description: "Traditional thin crust with fresh toppings.",
      tags: ["Popular", "Classic"],
      isNew: true,
    },
  ];

  const filteredPizzas = PIZZA_DATA.filter((pizza) => {
    const matchesSearch = pizza.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      active === "all" ||
      (active === "popular" && pizza.tags.includes("Popular")) ||
      (active === "new" && pizza.isNew) ||
      (active === "veg" && pizza.tags.includes("Vegetarian")) ||
      (active === "meat" && pizza.tags.includes("Meat")) ||
      (active === "spicy" && pizza.tags.includes("Spicy"));

    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    setToast(true);

    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  const categories = [
    { id: "all", label: "All Pizzas", icon: null },
    { id: "popular", label: "Popular", icon: "fa-star text-sky-700" },
    { id: "new", label: "New", icon: "fa-lightbulb text-yellow-400" },
    { id: "veg", label: "Vegetarian", icon: "fa-circle text-green-500" },
    {
      id: "meat",
      label: "Meat Lover",
      icon: "fa-drumstick-bite text-orange-700",
    },
    { id: "spicy", label: "Spicy", icon: "fa-pepper-hot text-red-600" },
  ];

  const PizzaCard = ({ item }) => {
    const [selectedSize, setSelectedSize] = useState("Medium");

    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
        <div className="relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {item.isNew && (
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          )}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center gap-3">
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>

            <span className="text-lg font-bold text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700">
              ${item.price}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mt-3">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-3xl font-bold text-xs ${
                  tag === "Spicy"
                    ? "bg-red-600/20 text-red-600"
                    : tag === "Vegetarian"
                      ? "bg-green-600/20 text-green-600"
                      : tag === "Meat"
                        ? "bg-yellow-500/20 text-yellow-600"
                        : "bg-purple-400/50 text-purple-800"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 mt-3 text-sm">{item.description}</p>

          <h2 className="text-black text-lg font-bold mt-5 mb-3">Size</h2>

          <div className="flex justify-evenly gap-3">
            {["Medium", "Large", "XL"].map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 shadow-sm rounded-md font-mono font-bold transition-all ${
                  selectedSize === size
                    ? "bg-orange-500 text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-red-100"
                }`}
              >
                {size}

                <p
                  className={`text-[10px] font-normal ${
                    selectedSize === size ? "text-orange-100" : "text-gray-400"
                  }`}
                >
                  Base Price
                </p>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center gap-5 mt-5">
            <button
              type="button"
              onClick={() => {
                setSelectedPizza({ ...item, size: selectedSize });
                setShowModal(true);
              }}
              className="flex-1 text-gray-500 px-4 py-2 mt-4 shadow-sm rounded-md border font-mono hover:bg-red-50 hover:border-red-500 transition"
            >
              <i className="fa-solid fa-bars mr-2"></i>
              Customize
            </button>

            <button
              type="button"
              onClick={() => handleAddToCart({ ...item, size: selectedSize })}
              className="flex-1 bg-orange-500 text-white px-6 py-2 mt-4 rounded-md font-mono hover:bg-orange-600 transition"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full">
      {toast && (
        <div className="fixed right-5 top-20 z-[1000] animate-bounce rounded-xl bg-green-500 px-5 py-3 font-bold text-white shadow-xl">
          <i className="fa-solid fa-circle-check mr-2"></i>
          Added to cart successfully!
        </div>
      )}

      <div className="w-full h-[300px] bg-gray-800 flex flex-col justify-center items-center text-white px-5 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Our World Famous Menu
        </h1>

        <p className="max-w-2xl text-gray-300">
          Explore our world-famous pizzas, crafted with premium ingredients.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-10 px-5 md:px-20 gap-5">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Signature Pizza</h2>
          <p className="text-gray-500">Handcrafted perfection in every slice</p>
        </div>

        <div className="relative w-full md:w-80">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search pizza..."
            className="w-full h-12 pl-5 pr-12 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none transition"
          />

          <i className="fa-solid fa-magnifying-glass absolute right-5 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>

      <div className="flex justify-center px-5 pb-10">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full shadow-sm transition-all duration-300 ${
                active === cat.id
                  ? "bg-orange-100 text-orange-600 scale-110 shadow-md font-bold"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
              }`}
            >
              {cat.icon && <i className={`fa-solid ${cat.icon}`}></i>}
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="my-5 mx-3 py-10 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 underline decoration-orange-500">
            Our Full Pizza Menu
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPizzas.map((pizza) => (
              <PizzaCard key={pizza.id} item={pizza} />
            ))}
          </div>
        </div>
      </div>

      {showModal && selectedPizza && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999] p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
            <h2 className="text-xl font-bold mb-2">
              Customize: {selectedPizza.name}
            </h2>

            <p className="mb-4 text-sm font-bold text-orange-600">
              Selected Size: {selectedPizza.size}
            </p>

            <div className="space-y-4">
              <div>
                <p className="font-bold text-sm mb-2">
                  Extra Toppings (+$1.50)
                </p>

                {["Extra Cheese", "Pepperoni", "Mushrooms"].map((top) => (
                  <label
                    key={top}
                    className="flex items-center gap-2 mb-1 cursor-pointer"
                  >
                    <input type="checkbox" className="accent-orange-500" />
                    {top}
                  </label>
                ))}
              </div>

              <div>
                <p className="font-bold text-sm mb-2">Special Request</p>

                <textarea
                  className="w-full border p-2 rounded-md text-sm h-24"
                  placeholder="Ex: No onion..."
                ></textarea>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={() => {
                  handleAddToCart(selectedPizza);
                  setShowModal(false);
                }}
                className="flex-1 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu1;
