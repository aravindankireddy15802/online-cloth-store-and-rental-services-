import React from "react";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import User from "./components/User.jsx";
import Cart from "./components/Cart.jsx"
import Men from"./components/men.jsx"
import Women from"./components/women.jsx"
import Suits from "./components/Suits.jsx";
import {Toaster} from "react-hot-toast"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index path="/" element={<Home />} />
        <Route path="/user"  element={<User />} />
        <Route path="/cart"  element={<Cart />} />
         <Route path="/men" element={<Men />} /> 
         <Route path="/women" element={<Women />} />
        <Route path="/suits" element={<Suits />} />
      </Routes> 
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
