import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0688b0]">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to StockWise</h1>
      <p className="text-lg text-white text-center mb-16">
        StockWise is a powerful inventory management system that helps you keep track of your stock, manage orders, and streamline your business processes.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link
          to="/login"
          className="bg-white shadow-md rounded-lg p-6 text-center text-[#0688b0] hover:bg-[#0688b0] hover:text-white transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <p className="text-lg text-gray-800">
            Login to access the StockWise system and manage your inventory and orders.
          </p>
        </Link>
        <Link
          to="/about"
          className="bg-white shadow-md rounded-lg p-6 text-center text-[#0688b0] hover:bg-[#0688b0] hover:text-white transition duration-300"
        >
          <h2 className="text-2xl font-semibold mb-4">About StockWise</h2>
          <p className="text-lg text-gray-800">
            Discover how StockWise can revolutionize your inventory management and order processing.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;