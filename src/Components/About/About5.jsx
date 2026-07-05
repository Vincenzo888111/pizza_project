import React from "react";
import { Link } from "react-router-dom";

function About5() {
  // const [orderType, setOrderType] = useState("delivery");

  // const handleSubmit = () => {
  //   alert(`You selected: ${orderType}`);
  // };

  return (
    <section className="bg-red-600 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to Taste the Difference?
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-red-50">
          Join millions of satisfied customers who have experienced the magic of
          our pizzas and discovered the joy of authentic Italian flavors.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/Menu1"
            className="rounded-full bg-white px-6 py-3 font-bold text-red-600 transition hover:bg-gray-100"
          >
            Explore Our Menu
          </Link>

          <button
            type="button"
            className="rounded-full border-2 border-white px-6 py-3 font-bold text-white transition hover:bg-red-700"
          >
            Visit Our Restaurant
          </button>
        </div>

        {/* <div className="mx-auto mt-10 max-w-md rounded-2xl bg-white/10 p-5">
          <p className="font-bold text-white">Choose your order type</p>

          <div className="mt-4 flex justify-center gap-6 text-white">
            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="ship"
                value="delivery"
                checked={orderType === "delivery"}
                onChange={(e) => setOrderType(e.target.value)}
                className="accent-yellow-300"
              />
              Delivery
            </label>

            <label className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="ship"
                value="pickup"
                checked={orderType === "pickup"}
                onChange={(e) => setOrderType(e.target.value)}
                className="accent-yellow-300"
              />
              Pickup
            </label>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="mt-5 rounded-full bg-black px-6 py-2 font-bold text-white transition hover:bg-gray-800"
          >
            Submit
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default About5;
