import { useState } from "react";
import Orders from "./pages/orders/Orders";
import Login from "./pages/connextion/Login";
import SignUp from "./pages/connextion/SignUp";
import Products from "./pages/products/Products";
import AddProduct from "./pages/products/AddProduct";
import UpdateProduct from "./pages/products/UpdateProduct";
import ProductDetails from "./pages/products/ProductDetails";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Addorder from "./pages/orders/AddOrder";

function App() {
  const [orders, setOrders] = useState([]);

  const addOrder = (order) => {
    setOrders([...orders, order]);
  };

  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Outlet  */}
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/products"
            element={<Products products={products} setProducts={setProducts} />}
          />
          <Route
            path="/add-product"
            element={<AddProduct addProduct={addProduct} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetails />}
          />
           <Route 
            path="/update-product/:productId"
            element={<UpdateProduct
                        products={products} 
                        setProducts={setProducts} 
                        
                      />}
          />
          <Route
            path="/orders"
            element={<Orders orders={orders} setOrders={setOrders} />}
          />
          <Route path="/add-order" element={<Addorder addOrder={addOrder} />} />
          {/* Outlet  */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
