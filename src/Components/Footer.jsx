import React from "react";

function Footer() {
  return (
    <div className="w-full  xl:h-[310px] md:h-[670px] sm:h-[600px] h-[730px] xl:px-0 md:px-5  px-5 bg-black">
      <div className="xl:flex md:block  block justify-evenly items-start gap-12 pt-10">
        <div className="flex-row">
          <div className="flex gap-1">
            <img
              className="w-10 h-9 bg-black rounded-[50%] "
              src="src/assets/image copy 2.png"
              alt=""
            />
            <h1 className="text-white  font-bold font-boldx">
              Pizza <span className="text-red-500">Labubu</span>
            </h1>
          </div>
          <p className="text-gray-400 my-3 text-[15px]">
            Serving world-famous since 1990. <br />
            Crafted with passion, enjoyed globally.
          </p>

          <ul className="link-left flex gap-2 my-3">
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f text-white transform hover:scale-105"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram text-white transform hover:scale-105"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-x-twitter text-white transform hover:scale-105"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-tiktok text-white transform hover:scale-105"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-row">
          <h1 className="text-white font-bold text-md">Quick Link</h1>
          <ul className="link-right text-gray-400 pt-5">
            <li>
              <a href="#" className="hover:underline ">
                Our Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Location
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Franchise
              </a>
            </li>
          </ul>
        </div>
        <div className=" flex-row sm:flex-row gap-6">
          {/* Contact Title */}
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-md">Contact Us</h1>
          </div>

          {/* Contact Links */}
          <div className=" flex-row sm:flex-row gap-4 pt-5">
            <a
              href="#"
              className="text-gray-400 hover:underline flex items-center gap-2"
            >
              <i className="fa-solid fa-location-dot text-red-500"></i>
              168 Labubu Street, Food District, Phnom Penh City
            </a>

            <a
              href="#"
              className="text-gray-400 hover:underline flex items-center gap-2"
            >
              <i className="fa-solid fa-phone text-red-500"></i>
              087 77 49 11
            </a>

            <a
              href="#"
              className="text-gray-400 hover:underline flex items-center gap-2"
            >
              <i className="fa-solid fa-envelope text-red-500"></i>
              info@example.com
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-white text-md font-bold">Opening Hours</h1>
          <div className="flex gap-11 pt-5">
            <div className="text-gray-400">
              <p>Monday-Thursday</p>
            </div>
            <div className="text-gray-400">
              <p>11:00 - 22:00</p>
            </div>
          </div>
          <div className="flex gap-13">
            <div className="text-gray-400">
              <p>Friday - Saturday</p>
            </div>
            <div className="text-gray-400">
              <p>11:00 - 23:00</p>
            </div>
          </div>
          <div className="flex gap-30">
            <div className="text-gray-400">
              <p>Sunday</p>
            </div>
            <div className="text-gray-400">
              <p>12:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-300 my-5 text-center">
        <div className="text-gray-600"><hr /></div>
            <p className="mt-5">@2025 Pizza Labubu All Right Reserved.|Crafted with❤️for pizza loves worldwide.</p>
      </div>
    </div>
  );
}

export default Footer;
