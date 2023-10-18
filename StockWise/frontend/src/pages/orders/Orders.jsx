import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import searchL from "../../assets/searchL.png";
import checked from "../../assets/checked.png";
import err from "../../assets/err.png";
import deleteL from "../../assets/deleteL.png";

const Orders = ({ orders, setOrders }) => {
  const handleDeleteOrder = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index);
    setOrders(updatedOrders);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col m-4 md:m-10">
        <div className="flex items-center mb-2 md:mb-4">
          <img
            src={searchL}
            alt="search"
            className="absolute w-4 md:w-5 ml-2 cursor-pointer"
          />
          <input
            type="text"
            name="search"
            className="w-full border border-gray-300 rounded-md p-2 pl-8 md:pl-10 font-semibold focus:outline-none focus:border-blue-500"
            placeholder="Type here to search by order, number, name, or status"
          />
        </div>
        <div>
          <ul className="grid grid-cols-6  gap-4 font-semibold text-gray-600 text-lg mb-2 md:mb-4">
            <li>Name</li>
            <li>Quantity</li>
            <li>Paid</li>
            <li>Status</li>
            <li>TotalPrice</li>
          </ul>
        </div>
        <div>
          {orders.map((order, index) => (
            <ul key={index} className="grid grid-cols-6 gap-4 mb-2 md:mb-4">
              <li className="border border-gray-300 rounded-md p-2 font-semibold text-gray-800">
                {order.name}
              </li>
              <li className="border border-gray-300 rounded-md p-2 font-semibold text-gray-800">
                {order.quantity}
              </li>
              <li className="border border-gray-300 rounded-md p-2 font-semibold text-gray-800 flex items-center justify-center">
                {order.paid === "YES" ? (
                  <img src={checked} alt="checked" className="w-6 md:w-7" />
                ) : (
                  <img src={err} alt="error" className="w-6 md:w-8" />
                )}
              </li>
              <li className="border border-gray-300 rounded-md p-2 font-semibold text-gray-800">
                {order.status}
              </li>
              <li className="border border-gray-300 rounded-md p-2 font-semibold text-gray-800">
                {order.totalPrice}DT
              </li>
              <li>
                <img
                  src={deleteL}
                  alt="delete"
                  className="cursor-pointer"
                  onClick={() => handleDeleteOrder(index)}
                />
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;