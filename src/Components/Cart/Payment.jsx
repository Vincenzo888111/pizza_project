import React, { useMemo, useState } from "react";

const formatMoney = (amount) => Number(amount || 0).toFixed(2);

function Payment({ cart = [], setCart }) {
  const [quantities, setQuantities] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const cartItems = useMemo(() => {
    const grouped = {};

    cart.forEach((item) => {
      if (grouped[item.id]) {
        grouped[item.id].quantity += 1;
      } else {
        grouped[item.id] = {
          ...item,
          quantity: 1,
        };
      }
    });

    return Object.values(grouped);
  }, [cart]);

  const getQty = (item) => quantities[item.id] || item.quantity;

  const changeQty = (id, delta) => {
    setQuantities((prev) => {
      const item = cartItems.find((pizza) => pizza.id === id);
      const currentQty = prev[id] || item?.quantity || 1;

      return {
        ...prev,
        [id]: Math.max(currentQty + delta, 1),
      };
    });
  };

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));

    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * getQty(item),
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + getQty(item), 0);

  const shipping = cartItems.length > 0 ? 2 : 0;
  const total = subtotal + shipping;

  const handleOpenModal = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setModalOpen(true);
  };

  const handleSendOrder = () => {
    if (!fullName || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    const orderList = cartItems
      .map(
        (item) =>
          `${item.name} x ${getQty(item)} - $${formatMoney(
            item.price * getQty(item)
          )}`
      )
      .join("\n");

    const message = `
NEW ORDER
-----------------------
Name: ${fullName}
Phone: ${phone}
Address: ${address}

Items:
${orderList}

Total Items: ${totalItems}
Subtotal: $${formatMoney(subtotal)}
Shipping: $${formatMoney(shipping)}
Total: $${formatMoney(total)}

Payment:
Customer should scan ABA QR and pay exactly $${formatMoney(total)}.
`;

    const TELEGRAM_USERNAME = "Nakk1234";

    const telegramURL = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(
      message
    )}`;

    window.open(telegramURL, "_blank");
    setModalOpen(false);
  };

  return (
    <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="mb-8 bg-gradient-to-r from-red-700 via-orange-400 to-yellow-300 bg-clip-text text-center text-4xl font-extrabold text-transparent">
        Payment
      </h1>

      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="bg-gradient-to-r from-red-700 via-orange-500 to-yellow-300 p-5">
            <h2 className="text-center text-3xl font-bold text-white">
              Shopping Cart
            </h2>
          </div>

          <div className="p-5">
            {cartItems.length === 0 ? (
              <p className="rounded-xl bg-orange-50 p-6 text-center text-xl font-bold text-orange-700">
                Your cart is empty
              </p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 rounded-xl border border-orange-100 bg-orange-50 p-4 sm:flex-row sm:items-center"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <p className="text-xl font-bold text-gray-900">
                        {item.name}
                      </p>

                      <p className="mt-1 font-semibold text-orange-600">
                        ${formatMoney(item.price * getQty(item))}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={() => changeQty(item.id, -1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 font-bold text-white"
                        >
                          -
                        </button>

                        <span className="min-w-6 text-center font-bold">
                          {getQty(item)}
                        </span>

                        <button
                          type="button"
                          onClick={() => changeQty(item.id, 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white"
                        >
                          +
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700 sm:ml-auto"
                        >
                          <i className="fa-solid fa-trash mr-2"></i>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="bg-gradient-to-r from-red-700 via-orange-500 to-yellow-300 p-5">
            <h2 className="text-center text-3xl font-bold text-white">
              Cart Summary
            </h2>
          </div>

          <div className="p-6">
            <div className="space-y-4 text-gray-700">
              <div className="flex justify-between">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${formatMoney(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>${formatMoney(shipping)}</span>
              </div>
            </div>

            <hr className="my-5 border-orange-200" />

            <div className="flex justify-between text-xl font-extrabold text-gray-900">
              <span>Total</span>
              <span>${formatMoney(total)}</span>
            </div>

            <button
              type="button"
              onClick={handleOpenModal}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-red-700 via-orange-500 to-yellow-300 py-3 font-bold text-white transition hover:scale-[1.02]"
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="bg-gradient-to-r from-orange-500 via-red-400 to-yellow-400 bg-clip-text text-center text-4xl font-extrabold text-transparent">
              Checkout
            </h2>

            <div className="mt-6 rounded-2xl bg-orange-50 p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900">Pay With ABA</h3>

              <p className="mt-2 text-sm text-gray-600">
                Please scan this QR and pay exactly:
              </p>

              <p className="mt-2 text-4xl font-extrabold text-red-600">
                ${formatMoney(total)}
              </p>

              <img
                src={`${import.meta.env.BASE_URL}aba-qr.jpg.png`}
                alt="ABA QR Code"
                className="mx-auto mt-4 h-80 w-64 rounded-xl bg-white object-contain p-2 shadow-md"
              />

              <p className="mt-4 text-sm font-medium text-gray-600">
                After payment, fill your delivery information and send order.
              </p>
            </div>

            <p className="mt-6 text-xl font-bold text-gray-700">
              Shipping Address
            </p>

            <div className="mt-4 space-y-3">
              <input
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <input
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <textarea
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Address"
                rows="4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-xl bg-gray-200 px-5 py-3 font-bold text-gray-700 transition hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSendOrder}
                className="rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-yellow-300 px-5 py-3 font-bold text-white transition hover:scale-[1.02]"
              >
                Send Order via Telegram
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Payment;
