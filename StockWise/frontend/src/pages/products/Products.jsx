import React, { useMemo } from "react";
import Navbar from "../../components/Navbar";
import searchL from "../../assets/searchL.png";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const Products = ({ products }) => {
  const navigate = useNavigate();

  const navigateToProduct = (product) => {
    const productData = encodeURIComponent(JSON.stringify(product));
    navigate(`/products/${product.id}?data=${productData}`);
  };

  const navigateToUpdateProduct = (product) => {
    const updateproductData = encodeURIComponent(JSON.stringify(product));
    navigate(`/update-product/${product.id}?data=${updateproductData}`);
  };

  const types = ["Accessories", "Laptop", "Smartphone", "Tablet"];
  const manufactures = ["Apple", "Samsung", "Asus", "Dell"];

  const renderedProductItems = useMemo(() => {
    return products.map((product, index) => (
      <div
        className={`flex flex-col items-start cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mt-10 ${
          index === 0 && products.length === 1 ? "lg:w-[50%] ml-5" : ""
        }`}
        key={product.id}
        onClick={() => navigateToProduct(product)}
      >
        <div className="relative">
          <img src={product.image} alt={product.name} className="w-32 sm:w-[50%] mb-2" />
          <button
            className="text-zinc-400 text-sm sm:text-xl absolute top-2 right-[120px]"
            onClick={(e) => {
              e.stopPropagation();
              navigateToUpdateProduct(product);
            }}
          >
            <FaEdit />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-zinc-700 text-xl sm:text-xl">
            {product.name}
          </h1>
          <h2 className="text-zinc-400 text-xs sm:text-sm">{product.type}</h2>
          <h2 className="text-zinc-400 font-semibold text-xs sm:text-sm">
            {product.price} DT
          </h2>
        </div>
      </div>
    ));
  }, [products, navigateToProduct, navigateToUpdateProduct]);

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <div className="flex flex-col m-5 sm:m-20 gap-5">
        <div>
          <h1 className="text-center text-2xl sm:text-4xl font-semibold mb-5 text-zinc-800">
            OUR PRODUCTS
          </h1>
        </div>
        <div>
          <div className="flex">
            <img
              src={searchL}
              alt="search"
              className="w-5 sm:w-6 absolute ml-2 mt-3 cursor-pointer"
            />
            <input
              type="text"
              name="search"
              className="w-full border border-zinc-600 rounded-md p-2 pl-10 font-semibold text-sm sm:text-xl"
              placeholder="Type here to search by name, description, or type"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4 mb-10 mx-2 sm:mx-2 sm:flex-row">
          <div className="flex flex-col gap-5 sm:w-1/4">
            <div className="flex flex-col">
              <label className="text-zinc-600 text-sm sm:text-xl">Type</label>
              <select
                name="type"
                id="label"
                className="block py-2.5 text-sm sm:text-xl w-full text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-zinc-600 text-sm sm:text-xl">Manufacturer</label>
              <select
                name="manufacturer"
                id="label"
                className="block py-2.5 text-sm sm:text-xl w-full text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-500 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
              >
                {manufactures.map((manufacture) => (
                  <option key={manufacture} value={manufacture}>
                    {manufacture}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-between mt-10 gap-10">
            {renderedProductItems}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
