import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Outlet, Link } from "react-router-dom";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ img }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    data.append("title", title);
    data.append("img", image);
    data.append("category", category);
    data.append("price", price);
    data.append("desc", desc);

    console.log(title);
    console.log(category);
    console.log(price);
    console.log(desc);
    console.log(image);

    axios
      .post(`http://localhost:5000/api/v1/product`, data, {
        headers: {
          "content-type": "multipart/form-data",
          // token : userLogin,
        },
      })
      .then((res) => {
        console.log("post success:", res);
        navigate("/product");
      })
      .catch((err) => console.log("err:", err));
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <>
      <Header />
      <main className="container body-home">
        <section className="auth-bg"></section>
        <section className="auth-form">
          <nav className="container navbar">
            <div className="brand">
              <h1>Product Input</h1>
            </div>
          </nav>
          <form onSubmit={onSubmit} className="p-50">
            <div className="mb-5">
              <label className="form-label" htmlFor="product">
                Title
              </label>
              <input
                className="form-input rounded-xl"
                onChange={(e) => setTitle(e.target.value)}
                type="text"
              />
            </div>

            <div className="mb-5">
              <label className="form-label" htmlFor="product">
                Image
              </label>
              {img && <img className="preview" src={img} alt="preview" />}
              <input
                className="form-input rounded-xl"
                type="file"
                onChange={(e) => onImageUpload(e)}
                img={imagePreview}
              />
            </div>

            <div className="mb-5">
              <label className="form-label" htmlFor="product">
                Category
              </label>
              <input
                onChange={(e) => setCategory(e.target.value)}
                className="form-input rounded-xl"
                type="text"
              />
            </div>

            <div className="mb-5">
              <label className="form-label" htmlFor="product">
                Price
              </label>
              <input
                onChange={(e) => setPrice(e.target.value)}
                className="form-input rounded-xl"
                type="text"
              />
            </div>

            <div className="mb-5">
              <label className="form-label" htmlFor="product">
                Description
              </label>
              <input
                onChange={(e) => setDesc(e.target.value)}
                className="form-input rounded-xl"
                type="text"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary rounded-xl btn-block mb-5 text-secondary"
            >
              Submit
            </button>
          </form>
          <section className="container bg-gray">
            <section className="auth-form p-20 footer-l">
              <div className="brand">
                <img
                  src={require("../../assets/img/logo.png")}
                  width="30"
                  height="30"
                />
                <h3>Coffee Shop</h3>
              </div>
              <div>
                <h5 className="ml-5 p-16">
                  Coffee Shop is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </h5>
              </div>
              <div className="container p-16">
                <img
                  src={require("../../assets/img/twitter.png")}
                  className="p-10 mb-3"
                />
                <img
                  src={require("../../assets/img/facebook.png")}
                  className="p-10 mb-3"
                />
                <img
                  src={require("../../assets/img/ig.png")}
                  className="p-10 mb-3"
                />
              </div>
              <div>
                <a className="p-16">&copy;2020CoffeeShop</a>
              </div>
            </section>
            <section className="auth-form p-10 footer-r">
              <div>
                <h4>Product</h4>
                <div className="container">
                  <div>
                    <div className="p-10 ml">Download</div>
                    <div className="p-10 ml">Location</div>
                    <div className="p-10 ml">Blog</div>
                  </div>
                  <div>
                    <div className="p-10">Pricing</div>
                    <div className="p-10">Countries</div>
                  </div>
                </div>
              </div>
              <div>
                <h4>Engage</h4>
                <div className="container">
                  <div>
                    <div className="p-10 ml">Coffee Shop?</div>
                    <div className="p-10 ml">FAQ</div>
                    <div className="p-10 ml">Terms of Servuce</div>
                  </div>
                  <div>
                    <div className="p-10">About Us</div>
                    <div className="p-10">Privacy policy</div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
};

export default AddProduct;
