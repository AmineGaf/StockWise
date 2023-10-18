import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddProduct = ({ addProduct }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [manufacteurN, setManufacteurN] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");
  const typess = ["", "Smartphone", "Laptop", "Accessories", "Smartwatch", "Other"];
  const colors = ["", "white", "Black", "Gray"];

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const productData = location.state;
    if (productData) {
      setId(productData.id);
      setName(productData.name);
      setType(productData.type);
      setManufacteurN(productData.manufacteurN);
      setDescription(productData.description);
      setColor(productData.color);
      setPrice(productData.price);
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id,
      name,
      type,
      image,
      manufacteurN,
      description,
      color,
      price,
    };
    addProduct(newProduct);

    // Reset all fields
    setId(id + 1);
    setName("");
    setType("");
    setImage(null);
    setManufacteurN("");
    setDescription("");
    setColor("");
    setPrice("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-5">
          Add a New Product
        </h1>
        <form
          className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="nameP"
              className="block text-gray-700 font-semibold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="nameP"
              name="nameP"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Ex. Galaxy S23 Ultra"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="type"
              className="block text-gray-700 font-semibold mb-2"
            >
              Type
            </label>
            <select
              id="type"
              name="type"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {typess.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="image"
              className="block text-gray-700 font-semibold mb-2"
            >
              Product Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              onChange={handleImageChange}
            />
          </div>
          {image && (
            <img
              src={image}
              alt="Selected"
              className="w-32 h-32 object-cover rounded-lg mt-4"
            />
          )}
          <div className="mb-6">
            <label
              htmlFor="nameM"
              className="block text-gray-700 font-semibold mb-2"
            >
              Manufacturer Name
            </label>
            <input
              type="text"
              id="nameM"
              name="nameM"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Ex. Samsung"
              value={manufacteurN}
              onChange={(e) => setManufacteurN(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="desc"
              className="block text-gray-700 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="desc"
              name="desc"
              rows="4"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="color"
              className="block text-gray-700 font-semibold mb-2"
            >
              Color
            </label>
            <select
              id="color"
              name="color"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="3200 DT"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <Button
            title="Add Product"
            styles="bg-[#0688b0] text-white hover:bg-[#06b6d4]"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
