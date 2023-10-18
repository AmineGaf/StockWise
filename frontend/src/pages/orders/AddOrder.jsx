import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddOrder = ({addOrder}) => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [paid, setPaid] = useState("");
  const [status, setStatus] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      name: name,
      quantity: quantity,
      paid: paid,
      status: status,
      totalPrice: totalPrice
    };
    addOrder(newOrder);
  
    // Reset all fields
    setName("");
    setQuantity("");
    setPaid("");
    setStatus("");
    setTotalPrice("");
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Add Order
        </h1>
        <form className="max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="nameO"
              className="block text-gray-700 font-semibold mb-2"
            >
              Order Name
            </label>
            <input
              type="text"
              id="nameO"
              name="nameO"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Ex. Airpods"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-semibold mb-2"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Ex. 30"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="paiment"
              className="block text-gray-700 font-semibold mb-2"
            >
              Paiment
            </label>
            <select
              id="paiment"
              name="paiment"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              value={paid}
              onChange={(e) => setPaid(e.target.value)}
              required
            >
              <option ></option>
              <option >YES</option>
              <option >NO</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="status"
              className="block text-gray-700 font-semibold mb-2"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option ></option>
              <option >Arrived</option>
              <option >Shipping</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              TotalPrice
            </label>
            <input
              type="number"
              id="totalprice"
              name="totalprice"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="3200 DT"
              value={totalPrice}
              onChange={(e) => setTotalPrice(e.target.value)}
              required
            />
          </div >
          
          <div >

          <Button
            title="Add Order"
            styles="bg-[#0688b0] text-white hover:bg-[#06b6d4]"
            />

          
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddOrder;