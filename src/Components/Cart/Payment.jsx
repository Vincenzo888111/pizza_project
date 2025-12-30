import React, { useState } from "react";

const formatMoney = (amount) => amount.toFixed(2);

function Payment({ cart = [] }) {
  const [quantities, setQuantities] = useState({});

  const changeQty = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + delta, 1),
    }));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 1),
    0
  );

  const totalItems = cart.reduce(
    (sum, item) => sum + (quantities[item.id] || 1),
    0
  );

  const shipping = cart.length > 0 ? 2 : 0;
  const total = subtotal + shipping;

  return (
    <div className="mt-20 p-4 md:px-0">
      <h1 className="text-4xl text-center font-bold mb-6 bg-gradient-to-r from-red-700 via-orange-400 to-yellow-200 text-transparent bg-clip-text">
        Payment
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Shopping Cart */}
        <div className="w-full border-4 border-orange-400 bg-gradient-to-r from-red-700 via-orange-500 to-yellow-200 rounded-2xl shadow-xl">
          <h2 className="text-center font-bold text-3xl text-white font-mono p-5">
            Shopping Cart
          </h2>

          {cart.length === 0 ? (
            <p className="text-center text-2xl p-5 font-bold text-white">
              🙅 Your cart is empty 🙅
            </p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 text-white font-bold items-center border-b p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-2xl object-cover"
                />

                <div>
                  <p className="font-mono text-xl">{item.name}</p>
                  <p className="font-mono">
                    ${formatMoney(item.price * (quantities[item.id] || 1))}
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="bg-black px-3 py-1 rounded"
                    >
                      -
                    </button>
                    <span>{quantities[item.id] || 1}</span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="bg-green-500 px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Summary */}
        <div className="w-full border-4 border-orange-400 rounded-2xl shadow-xl">
          <div className="bg-gradient-to-r from-red-700 via-orange-500 to-yellow-200 rounded-t-xl">
            <h2 className="font-mono font-bold text-center text-3xl p-5 text-white">
              Cart Summary
            </h2>
          </div>

          <div className="flex justify-between px-5 my-3">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between px-5 my-3">
            <span>Subtotal</span>
            <span>${formatMoney(subtotal)}</span>
          </div>

          <div className="flex justify-between px-5 my-3">
            <span>Shipping</span>
            <span>${formatMoney(shipping)}</span>
          </div>

          <hr className="mx-5" />

          <div className="flex justify-between px-5 font-bold text-lg mt-4">
            <span>Total</span>
            <span>${formatMoney(total)}</span>
          </div>

          <div className="px-5 text-center">
            <button className="mt-6 w-full bg-gradient-to-r from-red-700 via-orange-500 to-yellow-200 text-white py-3 rounded-lg">
              Complete Purchase
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm py-6">
            🔒 Secure Payment. Your information is encrypted.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
