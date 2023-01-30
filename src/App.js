import logo from "./logo.svg";
import "./App.css";
import "../src/assets/styles/auth.css";
import "../src/assets/styles/global.css";
import "../src/assets/styles/tailwind.css";
import "../src/assets/styles/product.css";

import "./pages/products/index";
import Products from "./pages/products";
import ProductsAdmin from "./pages/productsAdmin";
import AddProduct from "./pages/productsAdminAdd";
import EditProduct from "./pages/productsAdminEdit";
import ProductDetail from "./pages/productDetail";
import Home from "./pages/home";
import Navbar from "./pages/navbar";
import Login from "./pages/login";
import Register from "./pages/register";

import configureStore from "./redux/store";
import { Provider } from "react-redux";

import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const { store } = configureStore();
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navbar />}> */}
            <Route index element={<Home />} />
            <Route path="/product" element={<Products />} />
            <Route path="/productAdmin" element={<ProductsAdmin />} />
            <Route path="/productAdminAdd" element={<AddProduct />} />
            <Route path="/productAdminEdit/:id" element={<EditProduct />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* </Route> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
