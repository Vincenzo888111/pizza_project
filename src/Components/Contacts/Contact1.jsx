import React from "react";

function Contact1() {
  return (
    <div className=" overflow-hidden">
      <div className=" w-full h-full bg-[url('https://i.pinimg.com/1200x/a1/92/55/a19255f5da7797b20985e090ecec1042.jpg')] bg-cover bg-center flex items-center justify-center ">
        <div className="relative  bg-black/50  w-full h-[520px] flex flex-col justify-center">
          <h1 className="text-white text-4xl font-bold text-center">
            Get In Touch
          </h1>
          <p className="text-white text-center p-3">
            We'd love to hear from you. Connect with the world's most famous{" "}
            <br /> pizza delivery service.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start p-10">
        <div className="bg-white shadow-lg p-6 rounded-2xl w-full">
          <h1 className="text-xl  font-bold p-2 mb-4">Contact Information</h1>
          <p className="text-gray-600 text-left">
            Have questions ,feedback, or special requests? We're here to help
            have make your pizza experience unforgettable.
          </p>
          <div className=" m-auto my-5 py-5  transform hover:scale-105 transition-all bg-gray-100 rounded-2xl">
            <div className="m-auto p-1  text-center w-10 h-10 bg-red-500 rounded-[100%]">
              <i className="fa-solid fa-location-dot text-white text-md"></i>
            </div>
            <h1 className="font-bold text-center text-md mt-2">Our Location</h1>
            <p className="text-center text-sm text-gray-500 font-mono">
              168 Chbar Om Pov Street, <br />
              Phnom Penh City
            </p>
          </div>
          <div className=" m-auto my-5 py-5  transform hover:scale-105 transition-all bg-gray-100 rounded-2xl">
            <div className="m-auto p-1  text-center w-10 h-10 bg-red-500 rounded-[100%]">
              <i className="fa-solid fa-phone text-white text-md"></i>
            </div>
            <h1 className="font-bold text-center text-md mt-2">Call Us</h1>
            <p className="text-center text-sm text-gray-500 font-mono">
              Smart: 087 77 49 11
            </p>
            <p className="text-center text-sm text-gray-500 font-mono">
              Metfone: 097 77 49 11
            </p>
            <p className="text-center text-sm text-gray-500 font-mono">
              Cellcard: 012 77 49 11
            </p>
          </div>
          <div className=" m-auto my-5 py-5  transform hover:scale-105 transition-all bg-gray-100 rounded-2xl">
            <div className="m-auto p-1  text-center w-10 h-10 bg-red-500 rounded-[100%]">
              <i className="fa-solid fa-envelope text-white text-md"></i>
            </div>
            <h1 className="font-bold text-center text-md mt-2">Email Us</h1>
            <p className="text-center text-sm text-gray-500 font-mono">
              <a href="">kornvathanak@gmail.com</a>
            </p>
            <p className="text-center text-sm text-gray-500 font-mono">
              <a href="">vathanakkorn@gmail.com</a>
            </p>
          </div>
        </div>
      <div>
        <div className="bg-white shadow-lg p-6 rounded-2xl w-full">
          <h1 className="text-xl font-bold ">Send Us a Message</h1>
          <p className="text-sm text-gray-500">
            we typically respond within 2 hours during business hours.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              rows="5"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button className="bg-red-500 p-2 w-full my-2 mb-4 rounded-md text-white font-bold active:bg-red-600">
            <i class="fa-regular fa-paper-plane"></i>Send Message
          </button>
          <div class="social-icons d-flex mt-4 text-center">
              {/* text-sky-700 */}
              <a href="https://www.facebook.com/share/16rqvxUjEz/?mibextid=wwXIfr" className="facebook">
                <i class="fa-brands fa-facebook text-4xl  text-sky-700"></i>
              </a>
              <a href="#" className="X">
                <i class="fa-brands fa-x-twitter text-4xl text-black"></i>
              </a>
              <a href="#" className="tiktok">
                <i class="fa-brands fa-tiktok text-4xl text-black"></i>
              </a>
              <a href="#" className="telegram">
                <i class="fa-brands fa-telegram text-4xl  text-sky-700"></i>
              </a>
            </div>
        </div>
        <div className="p-2 my-9 bg-white shadow-xl rounded-2xl">
          <h1 className="text-xl font-bold px-2 mb-4">Frequently Asked Questions</h1>
          <p className="font-bold px-2">Do you offer gluten-free pizza options?</p>
          <p className="px-2 text-gray-500">Yes! we offer gluten-free crust options for an additional charge $3. Please note that while we take precautions. Our Kitchen handless gluten-free options are available upon request ingredients.</p>
        </div>
      </div>
        <section class="max-w-md mx-auto p-4">
          {/* <!-- Title --> */}
          <h2 class="text-xl font-semibold mb-3">Find Our Restaurant</h2>

          {/* <!-- Card --> */}
          <div class="rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-white">
            {/* <!-- Google Map --> */}
            <div class="w-full h-64">
              <iframe
                class="w-full h-full"
                src="https://www.google.com/maps?q=Royal%20Palace%20of%20Cambodia&output=embed"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* <!-- Info Row --> */}
            <div class="flex items-center gap-4 px-4 py-3 text-sm text-gray-600">
              <div class="flex items-center gap-1">
                <span class="text-red-500">●</span>
                <span>Free parking available</span>
              </div>

              <div class="flex items-center gap-1">
                <span class="text-blue-500">♿</span>
                <span>Wheelchair accessible</span>
              </div>

              <div class="flex items-center gap-1">
                <span class="text-green-500">🌿</span>
                <span>Outdoor seating</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact1;
