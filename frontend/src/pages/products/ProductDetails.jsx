import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

const ProductDetails = () => {
  const { productId } = useParams();
  const productData = new URLSearchParams(window.location.search).get("data");
  const product = productData ? JSON.parse(decodeURIComponent(productData)) : null;

  if (!product) {
    return <div>Error: Invalid product data</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-10 ml-10">
        <div className="flex flex-col gap-5 sm:flex-row">
          <img
            src={product.image}
            className="w-[50%] sm:w-[25%] rounded-lg"
            alt={product.name}
          />
          <div className="flex flex-col mt-10">
            <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
            <p className="mt-4 text-gray-600">{product.description}</p>
            <button className="mt-6 px-4 py-2 bg-[#0688b0] text-white rounded-md hover:bg-[#06b6d4]">
              {product.type}
            </button>
          </div>
        </div>
        <div className="mt-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
           
            <li className="flex items-center">
              <h1 className="text-lg font-semibold mr-2">Manufacturer Name:</h1>
              <span>{product.manufacteurN}</span>
            </li>
            <li className="flex items-center">
              <h1 className="text-lg font-semibold mr-2">Price:</h1>
              <span>{product.price}</span>
            </li>
            <li className="flex items-center">
              <h1 className="text-lg font-semibold mr-2">
                Price Manufacturer:
              </h1>
              <span>300DT</span>
            </li>
            <li className="flex items-center">
              <h1 className="text-lg font-semibold mr-2">Color:</h1>
              <span>{product.color}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
