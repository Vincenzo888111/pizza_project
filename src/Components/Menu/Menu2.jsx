import React from "react";

function Menu2({ cart, setCart, setShowModal }) {
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="my-5 mx-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Product Image"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex justify-between  ">
              <h3 className="text-xl font-bold text-gray-800">Spicy Diavola</h3>
              <span className="ml-2 text-lg font-bold text-white rounded-3xl text-center p-2 px-5 bg-gradient-to-r from-orange-500 to-orange-700">
                $22.99
              </span>
            </div>
            <div className="flex gap-5">
              <p className="p-2 bg-purple-400/50 text-center rounded-3xl text-purple-800 font-bold text-[13px] pt-1">
                Popular
              </p>
              <p className="p-2 px-5 bg-red-600/20 text-center rounded-3xl text-red-600 font-bold text-[13px] pt-1">
                Spicy
              </p>
            </div>
            <p className="text-gray-600 mt-2">
              Tomato sauce, mozzarella, and lots of pepperoni.
            </p>
            <h1 className="text-black text-xl font-bold p-5">Size</h1>
            <div className="flex justify-evenly">
              <div className=" bg-gray-50  shadow-md active:border-3 active:border-red-500 rounded-md text-center p-1 px-4 font-bold active:bg-red-200/30 active:text-red-600 font-mono">
                Medium{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
              <div className=" p-1 px-4 bg-gray-50 shadow-md active:border-3 active:border-red-500 rounded-md text-center pt-1 font-bold active:bg-red-200/30 active:text-red-600 font-mono">
                Large{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
              <div className=" p-1 px-4 bg-gray-50 shadow-md active:border-3 active:border-red-500 rounded-md text-center pt-1 font-bold active:bg-red-200/30 active:text-red-600 font-mono">
                Xl{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-gray-500 px-6 py-2 mt-4 shadow-md rounded-md border font-mono
             hover:bg-red-50 hover:border-red-500"
              >
                <i className="fa-solid fa-bars mr-2"></i>
                Customize
              </button>

              <div className="mt-4">
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: 1,
                      name: "Spicy Diavola",
                      price: 22.99,
                      image:
                        "https://images.unsplash.com/photo-1513104890138-7c749659a591",
                    })
                  }
                  type="button"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
                 hover:bg-orange-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src=" https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Product Image"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex justify-between  ">
              <h3 className="text-xl font-bold text-gray-800">
                Margherita Classica
              </h3>
              <span className="ml-2 text-lg font-bold text-white  p-2 px-5 rounded-3xl text-center  bg-gradient-to-r from-orange-500 to-orange-700">
                $15.99
              </span>
            </div>
            <div className="flex gap-5">
              <p className="p-2 bg-purple-400/50 text-center rounded-3xl text-purple-800 font-bold text-[13px] pt-1">
                Popular
              </p>
              <p className="px-3 bg-green-600/20 text-center rounded-3xl text-green-600 font-bold text-[13px] pt-1">
                Vegetarian
              </p>
            </div>
            <p className="text-gray-600 mt-2">
              Tomato sauce, mozzarella, and lots of pepperoni.
            </p>
            <h1 className="text-black text-xl font-bold p-5">Size</h1>
            <div className="flex justify-evenly">
              <div className="p-1 px-4   bg-gray-50  shadow-md active:border-3 active:border-red-500 rounded-md text-center pt-1 font-bold hover:bg-red-200/30 active:text-red-600 font-mono">
                Medium{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
              <div className="p-1 px-4   bg-gray-50 shadow-md active:border-3 active:border-red-500 rounded-md text-center pt-1 font-bold hover:bg-red-200/30 active:text-red-600 font-mono">
                Large{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
              <div className="p-1 px-4   bg-gray-50 shadow-md active:border-3 active:border-red-500 rounded-md text-center pt-1 font-bold hover:bg-red-200/30 active:text-red-600 font-mono">
                Xl{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-gray-500 px-6 py-2 mt-4 shadow-md rounded-md border font-mono
             hover:bg-red-50 hover:border-red-500"
              >
                <i className="fa-solid fa-bars mr-2"></i>
                Customize
              </button>

              <div className="mt-4">
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: 2,
                      name: "Margherita Classica",
                      price: 15.99,
                      image:
                        "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    })
                  }
                  type="button"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
                 hover:bg-orange-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60x"
              alt="Product Image"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          </div>
          <div className="p-6">
            <div className="flex justify-between  ">
              <h3 className="text-xl font-bold text-gray-800">
                BBQ Chicken Feas
              </h3>
              <span className="ml-2 text-lg font-bold text-white p-2 px-4 rounded-3xl text-center bg-gradient-to-r from-orange-500 to-orange-700">
                $18.99
              </span>
            </div>
            <div className="flex gap-5">
              <p className="p-2 bg-purple-400/50 text-center rounded-3xl text-purple-800 font-bold text-[13px] pt-1">
                Popular
              </p>
              <p className="p-2 px-4 bg-yellow-500/20 text-center rounded-3xl text-yellow-500 font-bold text-[13px] pt-1">
                Meat
              </p>
            </div>
            <p className="text-gray-600 mt-2">
              Tomato sauce, mozzarella, and lots of pepperoni.
            </p>
            <h1 className="text-black text-xl font-bold p-5">Size</h1>
            <div className="flex justify-evenly">
              <div className="p-1 px-4 bg-gray-50 shadow-md active:border-3 active:border-red-500 rounded-md text-center pt-1 font-bold hover:bg-red-200/30 active:text-red-600 font-mono">
                Medium{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
              <div className="p-1 px-4 bg-gray-50 shadow-md active:border-3 active:border-red-500 rounded-md text-center pt-1 font-bold hover:bg-red-200/30 active:text-red-600 font-mono">
                Large{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
              <div className="p-1 px-4 bg-gray-50 shadow-md active:border-3 active:border-red-500 rounded-md text-center pt-1 font-bold hover:bg-red-200/30 active:text-red-600 font-mono">
                Xl{" "}
                <p className="text-[12px] active:text-black font-normal ">
                  Base Price
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-gray-500 px-6 py-2 mt-4 shadow-md rounded-md border font-mono
             hover:bg-red-50 hover:border-red-500"
              >
                <i className="fa-solid fa-bars mr-2"></i>
                Customize
              </button>

              <div className="mt-4">
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: 2,
                      name: "Margherita Classica",
                      price: 15.99,
                      image:
                        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60x",
                    })
                  }
                  type="button"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
                 hover:bg-orange-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg"
              alt="Spicy Diavola Pizza"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Spicy Diavola</h3>
              <span className="text-lg font-bold text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700">
                $15.99
              </span>
            </div>

            <div className="flex gap-3 mt-3">
              <span className="px-3 py-1 bg-purple-400/50 rounded-3xl text-purple-800 font-bold text-xs">
                Popular
              </span>
              <span className="px-3 py-1 bg-red-600/40 rounded-3xl text-red-600 font-bold text-xs">
                Spicy
              </span>
            </div>

            <p className="text-gray-600 mt-3">
              Tomato sauce, mozzarella, and lots of pepperoni.
            </p>

            <h2 className="text-black text-lg font-bold mt-5 mb-3">Size</h2>

            <div className="flex justify-evenly gap-3">
              {["Medium", "Large", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
                     hover:bg-red-200/30 hover:text-red-600
                     active:border-2 active:border-red-500
                     focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  {size}
                  <p className="text-xs font-normal text-gray-600">
                    Base Price
                  </p>
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-gray-500 px-6 py-2 mt-4 shadow-md rounded-md border font-mono
             hover:bg-red-50 hover:border-red-500"
              >
                <i className="fa-solid fa-bars mr-2"></i>
                Customize
              </button>

              <div className="mt-4">
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: 2,
                      name: "Margherita Classica",
                      price: 15.99,
                      image:
                        "https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg",
                    })
                  }
                  type="button"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
                 hover:bg-orange-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg"
              alt="Spicy Diavola Pizza"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Spicy Diavola</h3>
              <span className="text-lg font-bold text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700">
                $15.99
              </span>
            </div>

            <div className="flex gap-3 mt-3">
              <span className="px-3 py-1 bg-purple-400/50 rounded-3xl text-purple-800 font-bold text-xs">
                Popular
              </span>
              <span className="px-3 py-1 bg-red-600/40 rounded-3xl text-red-600 font-bold text-xs">
                Spicy
              </span>
            </div>

            <p className="text-gray-600 mt-3">
              Tomato sauce, mozzarella, and lots of pepperoni.
            </p>

            <h2 className="text-black text-lg font-bold mt-5 mb-3">Size</h2>

            <div className="flex justify-evenly gap-3">
              {["Medium", "Large", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
                     hover:bg-red-200/30 hover:text-red-600
                     active:border-2 active:border-red-500
                     focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  {size}
                  <p className="text-xs font-normal text-gray-600">
                    Base Price
                  </p>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center mt-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-gray-500 px-6 py-2 mt-4 shadow-md rounded-md border font-mono
             hover:bg-red-50 hover:border-red-500"
              >
                <i className="fa-solid fa-bars mr-2"></i>
                Customize
              </button>

              <div className="mt-4">
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: 2,
                      name: "Margherita Classica",
                      price: 15.99,
                      image:
                        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60x",
                    })
                  }
                  type="button"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
                 hover:bg-orange-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/73/4e/0f/734e0fa60eb2f98c3ed053b5a8fffd0d.jpg"
              alt="Spicy Diavola Pizza"
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">
              NEW
            </span>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Spicy Diavola</h3>
              <span className="text-lg font-bold text-white px-5 py-2 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-700">
                $15.99
              </span>
            </div>

            <div className="flex gap-3 mt-3">
              <span className="px-3 py-1 bg-purple-400/50 rounded-3xl text-purple-800 font-bold text-xs">
                Popular
              </span>
              <span className="px-3 py-1 bg-red-600/40 rounded-3xl text-red-600 font-bold text-xs">
                Spicy
              </span>
            </div>

            <p className="text-gray-600 mt-3">
              Tomato sauce, mozzarella, and lots of pepperoni.
            </p>

            <h2 className="text-black text-lg font-bold mt-5 mb-3">Size</h2>

            <div className="flex justify-evenly gap-3">
              {["Medium", "Large", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className="px-4 py-2 bg-gray-50 shadow-md rounded-md font-mono font-bold
                     hover:bg-red-200/30 hover:text-red-600
                     active:border-2 active:border-red-500
                     focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  {size}
                  <p className="text-xs font-normal text-gray-600">
                    Base Price
                  </p>
                </button>
              ))}
            </div>

           <div className="flex justify-between items-center mt-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-gray-500 px-6 py-2 mt-4 shadow-md rounded-md border font-mono
             hover:bg-red-50 hover:border-red-500"
              >
                <i className="fa-solid fa-bars mr-2"></i>
                Customize
              </button>

              <div className="mt-4">
                <button
                  onClick={() =>
                    handleAddToCart({
                      id: 2,
                      name: "Margherita Classica",
                      price: 15.99,
                      image:
                        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60x",
                    })
                  }
                  type="button"
                  className="bg-orange-500 text-white px-6 py-2 rounded-md font-mono
                 hover:bg-orange-800"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu2;
