import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission/page reload
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    alert("Login successful!");
    // Here you would typically make an API call to authenticate
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(e);
  };

  return (
    <div className="md:p-10 flex justify-center items-center min-h-screen overflow-x-hidden">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between bg-white/80 shadow-[0_10px_20px_rgba(156,163,175,0.6)] rounded-3xl w-full max-w-4xl">
        
        {/* Left Section */}
        <div className="hidden md:flex bg-gradient-to-r from-orange-500 to-yellow-400 w-1/2 h-full rounded-r-[20%] rounded-l-[5%]">
          <div className="p-20 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-white text-center my-17">
              Hello, Welcome
            </h2>
            <div className="text-white text-center">
              <p>Don't have an account?</p>
            </div>
            <div className="flex justify-center p-5">
              <button className="border-2 border-white text-white font-bold py-2 px-8 rounded-4xl hover:bg-white hover:text-orange-500 transition duration-300">
                <Link to="/register">Register</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-6 flex flex-col justify-center items-center w-full md:w-1/2 px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Login</h1>
          
          <form onSubmit={handleSubmit} className="w-full max-w-xs">
            {/* Email Input */}
            <div className="relative w-full mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <i className="fa-regular fa-envelope text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2"></i>
            </div>
            
            {/* Password Input */}
            <div className="relative w-full mb-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-lg p-3 w-full pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                required
              />
              <i className="fa-solid fa-lock text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2"></i>
            </div>

            {/* Forgot Password */}
            <div className="mb-4 text-right">
              <Link 
                to="/forgot-password" 
                className="hover:underline font-mono text-gray-500 hover:text-black transition duration-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 w-full mb-5 rounded-4xl hover:shadow-lg transition duration-300">
              <button 
                type="submit"
                className="text-white font-bold py-3 w-full rounded-4xl hover:opacity-90 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>

          {/* Register Button */}
          <div className="w-full max-w-xs mb-6">
            <div className="border-2 border-orange-500 w-full text-center rounded-4xl hover:bg-orange-500 transition duration-300">
              <Link to="/register">
                <button className="text-orange-500 font-bold py-3 w-full rounded-4xl hover:text-white transition duration-300">
                  Register
                </button>
              </Link>
            </div>
          </div>

          <p className="text-gray-500 p-2">Or Login with social platforms</p>

          <div className="flex gap-4 my-4 text-center">
            <a href="#!" className="hover:scale-110 transition-transform duration-300">
              <i className="fa-brands fa-facebook text-4xl text-sky-700"></i>
            </a>
            <a href="#!" className="hover:scale-110 transition-transform duration-300">
              <i className="fa-brands fa-x-twitter text-4xl text-black"></i>
            </a>
            <a href="#!" className="hover:scale-110 transition-transform duration-300">
              <i className="fa-brands fa-tiktok text-4xl text-black"></i>
            </a>
            <a href="#!" className="hover:scale-110 transition-transform duration-300">
              <i className="fa-brands fa-telegram text-4xl text-sky-700"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;