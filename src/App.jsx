import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Components/Home/Home";
import Home2 from "./Components/Home/Home2";
import Home3 from "./Components/Home/Home3";
import Home4 from "./Components/Home/Home4";
import Home5 from "./Components/Home/Home5";
import Home6 from "./Components/Home/Home6";

import Menu1 from "./Components/Menu/Menu1";
import Menu2 from "./Components/Menu/Menu2";

import About1 from "./Components/About/About1";
import About2 from "./Components/About/About2";
import About3 from "./Components/About/About3";
import About4 from "./Components/About/About4";
import About5 from "./Components/About/About5";

import Contact1 from "./Components/Contacts/Contact1";
import Cart from "./Components/Cart/Cart1";
import Payment from "./Components/Cart/Payment";

import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Header cart={cart} notification={cart.length} />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Home2 />
                <Home3 />
                <Home4 />
                <Home5 />
                <Home6 />
              </>
            }
          />

          <Route
            path="/Menu1"
            element={
              <>
                <Menu1 />
                <Menu2 cart={cart} setCart={setCart} />
              </>
            }
          />

          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/payment" element={<Payment cart={cart} />} />
        </Route>

        <Route path="/about" element={<><About1 /><About2 /><About3 /><About4 /><About5 /><Footer /></>} />
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<><Contact1 /><Footer /></>} />
      </Routes>
    </>
  );
}

export default App;
