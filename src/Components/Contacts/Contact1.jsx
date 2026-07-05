import React from "react";

const contactItems = [
  {
    icon: "fa-location-dot",
    title: "Our Location",
    lines: ["168 Chbar Om Pov Street", "Phnom Penh City"],
  },
  {
    icon: "fa-phone",
    title: "Call Us",
    lines: ["Smart: 087 77 49 11", "Metfone: 097 77 49 11", "Cellcard: 012 77 49 11"],
  },
  {
    icon: "fa-envelope",
    title: "Email Us",
    lines: ["kornvathanak@gmail.com", "vathanakkorn@gmail.com"],
  },
];

function Contact1() {
  return (
    <section className="overflow-hidden bg-gray-50">
      <div className="mt-16 bg-[url('https://i.pinimg.com/1200x/a1/92/55/a19255f5da7797b20985e090ecec1042.jpg')] bg-cover bg-center">
        <div className="flex min-h-[420px] items-center justify-center bg-black/55 px-4 text-center">
          <div>
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              Get In Touch
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-100 sm:text-lg">
              We'd love to hear from you. Connect with the world's most famous
              pizza delivery service.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Contact Information
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Have questions, feedback, or special requests? We're here to help
            make your pizza experience unforgettable.
          </p>

          <div className="mt-6 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-gray-50 p-5 text-center transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-red-500">
                  <i className={`fa-solid ${item.icon} text-white`} />
                </div>

                <h3 className="mt-3 font-bold text-gray-900">{item.title}</h3>

                <div className="mt-2 space-y-1 text-sm text-gray-500">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              We typically respond within 2 hours during business hours.
            </p>

            <form className="mt-6 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full rounded-md border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-red-500 p-3 font-bold text-white transition hover:bg-red-600"
              >
                <i className="fa-regular fa-paper-plane mr-2" />
                Send Message
              </button>
            </form>

            <div className="mt-6 flex justify-center gap-5">
              <a href="https://www.facebook.com/share/16rqvxUjEz/?mibextid=wwXIfr">
                <i className="fa-brands fa-facebook text-3xl text-sky-700" />
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter text-3xl text-black" />
              </a>
              <a href="#">
                <i className="fa-brands fa-tiktok text-3xl text-black" />
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram text-3xl text-sky-700" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 font-bold text-gray-800">
                Do you offer gluten-free pizza options?
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Yes, we offer gluten-free crust options for an additional $3.
                Please note that our kitchen handles gluten ingredients.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">
                Find Our Restaurant
              </h2>

              <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
                <iframe
                  className="h-72 w-full"
                  src="https://www.google.com/maps?q=Royal%20Palace%20of%20Cambodia&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant location map"
                />
              </div>

              <div className="mt-4 grid gap-2 text-sm text-gray-600 sm:grid-cols-3">
                <p>Free parking</p>
                <p>Wheelchair accessible</p>
                <p>Outdoor seating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact1;
