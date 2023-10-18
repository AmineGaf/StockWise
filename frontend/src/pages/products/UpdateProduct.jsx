import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import Navbar from "../../components/Navbar";

const UpdateProduct = ({ products, setProducts }) => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const location = useLocation();
  const [err, setErr] = React.useState("");
  const colors = ["", "white", "Black", "Gray"];
  const typess = ["", "Smartphone", "Laptop", "Accessories", "Smartwatch", "Other"];

  useEffect(() => {
    const data = new URLSearchParams(location.search).get("data");
    if (data) {
      const productData = JSON.parse(decodeURIComponent(data));

      formik.setValues({
        id: productData.id,
        name: productData.name,
        type: productData.type,
        price: productData.price,
        manufacteurN: productData.manufacteurN,
        description: productData.description,
        color: productData.color,
        image: productData.image,
      });
    }
  }, [location.search]);

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      price: 0,
      color: "",
      manufacteurN: "",
      description: "",
      image: "", 
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Product Name is required"),
      type: Yup.string().required("Type is required"),
      price: Yup.number().required("Price is required"),
      manufacteurN: Yup.string().required("manufacteur name is required"),
      color: Yup.string().required("Color is required"),
      description: Yup.string().required("description is required"),
    }),
    onSubmit: (values) => {
      try {
        const updatedProduct = {
          id: productId,
          name: values.name,
          type: values.type,
          price: values.price,
          manufacteurN: values.manufacteurN,
          color: values.color,
          description: values.description,
          image: values.image,
        };

        const updatedProducts = products.map((product) =>
          product.id == productId ? updatedProduct : product 
        );

        setProducts(updatedProducts);

        
        navigate("/products");
      } catch (error) {
        setErr("An error occurred while updating the product.");
        console.error(error);
      }
    },
  });

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
    <div className="h-screen bg-[#0688b0]">
      <Navbar />
      <div className="flex items-center justify-center mt-7 bg-[#0688b0]">
        <form
          className="bg-[#f0fdfa] rounded-lg"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex-1 p-20">
            <div className="flex flex-col justify-center items-center">
              <img src={logo} alt="logo" className="w-10" />
              <h1 className="font-bold text-2xl mb-8">StockWise</h1>
            </div>
            <div className="">
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold text-sm pb-2">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 border-gray-500 rounded-md p-2"
                  placeholder="Enter product name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <h1 className="font-bold text-red-500">
                    {formik.errors.name}
                  </h1>
                )}
              </div>
              <div className="mb-4">
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
              <div className="mb-4">
                <label htmlFor="type" className="block font-bold text-sm pb-2">
                  Type
                </label>
                <select
                  name="type"
                  className="border-2 border-gray-500 rounded-md p-2"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  {typess.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
                </select>
                {formik.touched.type && formik.errors.type && (
                  <h1 className="font-bold text-red-500">
                    {formik.errors.type}
                  </h1>
                )}
              </div>
              <div className="mb-6">
            <label
              htmlFor="manufacteurN"
              className="block text-gray-700 font-semibold mb-2"
            >
              Manufacturer Name
            </label>
            <input
              type="text"
              id="manufacteurN"
              name="manufacteurN"
              className="w-full border-gray-300 border-2 px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500"
              placeholder="Ex. Samsung"
              value={formik.values.manufacteurN}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
              value={formik.values.color}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
              <div className="mb-4">
                <label htmlFor="price" className="block font-bold text-sm pb-2">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  className="border-2 border-gray-500 rounded-md p-2"
                  placeholder="Enter price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.price && formik.errors.price && (
                  <h1 className="font-bold text-red-500">
                    {formik.errors.price}
                  </h1>
                )}
              </div>
              <div className="flex gap-2">
                <Button
                  title={"Update"}
                  styles={"bg-[#0688b0]"}
                  type="submit"
                />
              </div>
              {err && <h1 className="font-bold text-red-500">{err}</h1>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
