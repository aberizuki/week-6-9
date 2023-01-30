import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/header";

const EditProduct = () => {
  let { id } = useParams();

  const [dataProduct, setDataProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/product/${id}`)
      .then((res) => setDataProduct(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const [dataImages, setDataImages] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/product/`)
      .then((res) => setDataImages(res.data.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <Header />
      <section>
        <main className="container bg-gray">
          <section className="prod-zoom p-120 mb-5 flex">
            <img
              className="rounded-real det-img mb-5"
              src={`http://localhost:5000/uploads/images/${
                dataProduct.images ? dataProduct.images[0].filename : ""
              }`}
              alt=""
            />

            <h1 className="text-center text-black-2 m-1">
              {dataProduct.title}
            </h1>
            <p className="text-center text-black mb-5">{dataProduct.price}</p>
            <button className="btn btn-secondary rounded-xl btn-block mb-5 text-third">
              Add to cart
            </button>
            <button className="btn btn-primary rounded-xl btn-block mb-5 text-third">
              Ask a staff
            </button>
          </section>
          <section className="prod-detail p-50 mb-5">
            <div className="card-d text-left mb-5 p-50 m-detail">
              <form className="p-50">
                <div className="mb-5">
                  <label className="form-label" for="product">
                    Title
                  </label>
                  <input
                    className="form-input rounded-xl"
                    id="product"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label" for="product">
                    Image
                  </label>
                  <input
                    className="form-input rounded-xl"
                    id="product"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label" for="product">
                    Category
                  </label>
                  <input
                    className="form-input rounded-xl"
                    id="product"
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="mb-5">
                  <label className="form-label" for="product">
                    Price
                  </label>
                  <input
                    className="form-input rounded-xl"
                    id="product"
                    type="text"
                    placeholder=""
                  />
                </div>

                <button className="btn btn-primary rounded-xl btn-block mb-5 text-secondary">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>
        <footer className="p-10">
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
                <h5 className="ml-5 p-16 text-gray-0">
                  Coffee Shop is a store that sells some good
                  <br />
                  meals, and especially coffee. We provide
                  <br />
                  high quality beans
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
            <section className="container p-10 footer-r flex">
              <div className="ml-10">
                <h4>Product</h4>
                <div className="container">
                  <div>
                    <div className="p-10 ml">Download</div>
                    <div className="p-10 ml">Location</div>
                    <div className="p-10 ml">Blog</div>
                    <div className="p-10">Pricing</div>
                    <div className="p-10">Countries</div>
                  </div>
                </div>
              </div>
              <div className="ml-10">
                <h4>Engage</h4>
                <div className="container">
                  <div>
                    <div className="p-10 ml">Coffee Shop?</div>
                    <div className="p-10 ml">FAQ</div>
                    <div className="p-10 ml">Terms of Servuce</div>
                    <div className="p-10">About Us</div>
                    <div className="p-10">Privacy policy</div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </footer>
      </section>
    </>
  );
};

export default EditProduct;
