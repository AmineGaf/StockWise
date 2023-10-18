import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (
    <nav className="bg-[#0688b0] text-white flex justify-between items-center p-5 font-sans">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" className="w-10" />
        <h1 className="ml-2 text-2xl font-bold">StockWise</h1>
      </div>
      <ul className="hidden md:flex mt-2 gap-5 text-xl font-semibold">
        <li className="cursor-pointer" onClick={() => navigate("/products")}>
          Products
        </li>
        <li className="cursor-pointer " onClick={() => navigate("/orders")}>
          Orders
        </li>

        <li className="cursor-pointer" onClick={() => navigate("/add-order")}>
          <Button styles={"bg-white text-cyan-600 "} title={"Add Order"} />
        </li>
        <li className="cursor-pointer" onClick={() => navigate("/add-product")}>
          <Button styles={"bg-white text-cyan-600"} title={"Add Product"} />
        </li>
        <li onClick={() => navigate("/login")}>
          <Button styles="bg-white text-cyan-600" title="Sign Out" />
        </li>
      </ul>

      <div className="md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-6 h-6 cursor-pointer"
          onClick={handleToggle}
        />

        {toggle && (
          <div className="absolute top-16 right-0 mt-2 mr-4 p-4 bg-[#0891b2] rounded-lg">
            <ul className="flex flex-col gap-2">
              <li
                className="font-semibold cursor-pointer"
                onClick={() => navigate("/orders")}
              >
                Orders
              </li>
              <li
                className="font-semibold cursor-pointer"
                onClick={() => navigate("/products")}
              >
                Products
              </li>
              <li onClick={() => navigate("/add-product")}>
                <Button styles="bg-white text-cyan-600" title="Add Product" />
              </li>
              <li onClick={() => navigate("/add-order")}>
                <Button styles="bg-white text-cyan-600" title="Add Order" />
              </li>
              <li onClick={() => navigate("/login")}>
                <Button styles="bg-white text-cyan-600" title="Sign Out" />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
