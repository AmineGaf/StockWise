import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const [err,setErr] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const places = ["" ,"Monastir" ,"Sousse", "Tunis"];

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      country: "sousse",
      terms: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "full name must be 20 character or less")
        .required("Full name is required"),
      email: Yup.string().email("Invalid email").required("email is required"),
      password: Yup.string()
        .max(20, "20 character or less")
        .required("password is required"),
      terms: Yup.array()
      .required("terms must be checkeD !"),
    }),

    onSubmit: async (values) => {
      try {
        // API call
        const response = await axios.post("http://localhost:5000/login", values);
        if (response.status === 200 && response.data) {
          console.log(response.data);
          // Store the token
          SignUp(response.data.token);
          navigate("/products");
        }
      } catch (err) {
        console.error(err);
        setErr("This account already exist");
    }
  },
    
  });

  async function handleSignUp(event) {
    event.preventDefault();
    if (
      !formik.errors.email &&
      !formik.errors.password &&
      !formik.errors.country &&
      !formik.errors.username
    ) {
      try {
        const response = await axios.post(
          "http://localhost:5000/signup",
          formik.values
        );
        if (response.status = 201 ){
          navigate("/login");
        }
      } catch (err) {
        setErr("This account already exists!");
        setIsVisible(true);

        setTimeout(() => {
          setIsVisible(false);
        }, 3000);
      }
      formik.resetForm();
    }
  };



  return (
    <div className="h-screen flex items-center justify-center bg-[#0688b0]">
      <form
        className="bg-[#f0fdfa] rounded-lg "
        onSubmit={(e) => handleSignUp(e) }
      >
        <div className="flex-1 p-20">
          <div className="flex flex-col items-center justify-center ">
            <img src={logo} alt="logo" className="w-10 " />
            <h1 className="font-bold text-2xl mb-5">StockWise</h1>
          </div>
          <div className="">
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block font-bold text-sm pb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="username"
                className="border-2 border-gray-500 rounded-md p-2  "
                placeholder="Ex.Amine Gafsi"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <h1 className="font-bold text-red-500">
                {formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : ""}
              </h1>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold text-sm pb-2">
                Email
              </label>
              <input
                type="  "
                name="email"
                className="border-2 border-gray-500 rounded-md p-2  "
                placeholder="Ex.amine@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <h1 className="font-bold text-red-500">
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </h1>
            </div>
            <div className="mb-4">
              <label htmlFor="passwod" className="block font-bold text-sm pb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="border-2 border-gray-500 rounded-md p-2  "
                placeholder="**********"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <h1 className="font-bold text-red-500">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </h1>
            </div>

            <div className="mb-4">
              <label htmlFor="country" className="block font-bold text-sm pb-2">
                Country
              </label>
              <select
                type="country"
                name="country"
                className="border-2 border-gray-500 rounded-md p-2 "
                value={formik.values.country}
                onChange={formik.handleChange}
              >
                {
                  places.map((place) => (
                    <option value={place}>{place}</option>
                  ))
                }
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="terms" className="block font-bold text-sm pb-2">
                Terms
              </label>
              <div className=" gap-2">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    className="h-5 w-5 border-2"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                  />
                  <p className="text-gray-500">
                    I agree to the terms and the conditions...
                  </p>
                </div>
                <h1 className="font-bold text-red-500 mt-1">
                  {formik.touched.terms && formik.errors.terms 
                    ? formik.errors.terms
                    : ""}
                </h1>
              </div>
            </div>
          </div>
          <Button title={"Create account"} styles={"bg-[#0688b0]"}/>
            {isVisible && (

              <h1 className="font-bold text-red-500 mt-2">
                {err}
              </h1>
            )}
              
        </div>
      </form>
    </div>
  );
};

export default SignUp;
