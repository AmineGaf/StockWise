import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import * as Yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [err, setErr] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        // API call
        const response = await axios.post("http://localhost:5000/login", values);
        if (response.status === 200 && response.data) {
          console.log(response.data);
          // Store the token
          login(response.data.token);
          navigate("/products");
        }
      } catch (err) {
        handleLogin(err);
      }
    },
  });

  async function handleLogin(err) {
    if (err.response && err.response.status === 401) {
      const errorMessage = err.response.data.message;
      setErr(errorMessage);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-[#0688b0]">
      <form
        className="bg-[#f0fdfa] rounded-lg "
        onSubmit={formik.handleSubmit}
      >
        <div className="flex-1 p-20">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="logo" className="w-10 " />
            <h1 className="font-bold text-2xl mb-8">StockWise</h1>
          </div>
          <div className="">
            <div className="mb-4">
              <label htmlFor="email" className="block font-bold text-sm pb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="border-2 border-gray-500 rounded-md p-2"
                placeholder="Ex.amine@gmail.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <h1 className="font-bold text-red-500">{formik.errors.email}</h1>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-bold text-sm pb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="border-2 border-gray-500 rounded-md p-2"
                placeholder="**********"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <h1 className="font-bold text-red-500">{formik.errors.password}</h1>
              )}
            </div>
            <div className="flex gap-2">
              <Button title={"Login"} styles={"bg-[#0688b0]"} type="submit" />
            </div>
            <div>
              <p className="text-[#525252] mt-3">
                You don't have an account ?
                <a
                  href="http://localhost:5173/Sign-up"
                  className="text-[#262626] font-bold cursor-pointer hover:text-black ml-1"
                >
                  Click here
                </a>
              </p>
            </div>
            <div>
              {isVisible && (
                <h1 className="font-bold text-red-500 mt-2">{err}</h1>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;