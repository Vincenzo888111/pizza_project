import React from "react";
import { Link } from "react-router-dom";

function Register() {
  const createAccount = () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!username || !email) {
      alert("Missing information!");
    } else if (password.length < 8) {
      alert("Weak password (min 8 characters)");
    } else {
      alert("Register success!");
    }
  };

  return (
    <div className="w-full md:h-[650px] p-5 md:mt-25 flex justify-center overflow-hidden">
      <div className="flex rounded-2xl md:w-[1000px] w-full">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex w-[500px] rounded-2xl bg-[url('https://i.pinimg.com/736x/e8/77/95/e8779598dfddd024c2ebfcda78aa117c.jpg')] bg-center bg-cover bg-no-repeat">
          <h1 className="text-5xl font-bold text-gray-800 font-mono text-center pt-10">
            Hello Welcome Back!
          </h1>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-[500px] rounded-2xl md:bg-black bg-white pt-10">
          <h1 className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text text-3xl text-center font-bold pt-5">
            Create an Account
          </h1>

          <div className="flex flex-col px-10">

            {/* FULL NAME */}
            <label
              htmlFor="username"
              className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text pt-7 pb-3"
            >
              Fullname
            </label>
            <div className="relative">
              <input
                id="username"
                type="text"
                placeholder="Enter name"
                className="w-full border-2 md:border-white border-black md:text-white text-gray-800 p-2 pr-10 rounded bg-transparent"
              />
              <i className="fa-solid fa-user-pen absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text" />
            </div>

            {/* EMAIL */}
            <label
              htmlFor="email"
              className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text pt-7 pb-3"
            >
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                className="w-full border-2 md:border-white border-black md:text-white text-gray-800 p-2 pr-10 rounded bg-transparent"
              />
              <i className="fa-solid fa-envelope absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text" />
            </div>

            {/* PASSWORD */}
            <label
              htmlFor="password"
              className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text pt-7 pb-3"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                className="w-full border-2 md:border-white border-black md:text-white text-gray-800 p-2 pr-10 rounded bg-transparent"
              />
              <i className="fa-solid fa-lock absolute right-3 top-3 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text" />
            </div>

            {/* TERMS */}
            <div className="py-5 flex gap-2">
              <input id="terms" type="checkbox" className="w-[18px]" />
              <label htmlFor="terms" className="md:text-white text-black">
                I accept the{" "}
                <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text">
                  Terms and Conditions
                </span>
              </label>
            </div>

            {/* BUTTON */}
            <button
              onClick={createAccount}
              className="w-[150px] h-[50px] bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-white rounded hover:scale-105 transition"
            >
              Register
            </button>

            <p className="md:text-white text-black pt-5">
              Already have an account?{" "}
              <Link
                to="/login"
                className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 text-transparent bg-clip-text"
              >
                Login here
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
