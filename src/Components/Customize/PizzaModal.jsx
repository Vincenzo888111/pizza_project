import { useState } from "react";

export default function PizzaModal({ onClose }) {
  const [size, setSize] = useState("Medium");
  const [qty, setQty] = useState(1);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] md:w-[700px] rounded-xl p-6 relative">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Spicy Diavola</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <img
            src="src/assets/pizza.jpg"
            alt="Pizza"
            className="rounded-lg"
          />

          {/* Content */}
          <div>
            <p className="text-gray-600 mb-4">
              Spicy salami, jalapeños, red onions, mozzarella with chili oil.
            </p>

            {/* Size */}
            <h4 className="font-semibold mb-2">Size</h4>
            <div className="flex gap-2 mb-4">
              {["Medium", "Large", "XL"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 rounded border
                    ${size === s ? "bg-red-500 text-white" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Customizations */}
            <h4 className="font-semibold mb-2">Customizations</h4>
            <div className="space-y-2 text-sm">
              <label className="flex justify-between">
                <span><input type="checkbox" /> Extra Cheese</span>
                <span>+ $2.00</span>
              </label>
              <label className="flex justify-between">
                <span><input type="checkbox" /> Extra Sauce</span>
                <span>+ $1.50</span>
              </label>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-4">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>

            {/* Total */}
            <div className="mt-4 text-xl font-bold text-red-600">
              Total: $24.99
            </div>

            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
