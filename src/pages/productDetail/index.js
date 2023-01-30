import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/header";

const ProductDetail = () => {
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
        {/* <nav className="navbar navbar-3 p-50">
          <div className="brand">
            <img
              src={require("../../assets/img/logo.png")}
              width="30"
              height="30"
            />
            <h3>Coffee Shop</h3>
          </div>
          <div className="p-15 text-thin">
            <a className="p-30 text-thin">Home</a>
            <a className="p-30 text-thin">Product</a>
            <a className="p-30 text-thin">Your Cart</a>
            <a className="p-30 text-thin">History</a>
          </div>
          <div className="button-navbar navbar p-15">
            <img
              src={require("../../assets/img/search.png")}
              width="30"
              height="30"
            />
            <img
              src={require("../../assets/img/chat.png")}
              width="30"
              height="30"
            />
            <img
              src={require("../../assets/img/profile.png")}
              width="30"
              height="30"
              className="rounded-full"
            />
          </div>
        </nav>
        <hr /> */}
        <main className="container bg-gray">
          <section className="prod-zoom p-120 mb-5 flex">
            {/* {dataImages.map((item) => {
              if (item.id === id) {
                console.log(item);
                return (
                  <img
                    className="rounded-real mb-5"
                    src={`http://localhost:5000/uploads/images/${item.images[0].filename}`}
                    alt=""
                  />
                );
              }
            })} */}
            <img
              className="rounded-real det-img mb-5"
              src={`http://localhost:5000/uploads/images/${
                dataProduct.images ? dataProduct.images[0].filename : ""
              }`}
              alt=""
            />

            {/* <img
              className="rounded-real mb-5"
              src={require("../../assets/img/beef-spha.png")}
              alt=""
            /> */}
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
              <div className="mb-5">
                <p>Delivery only on Monday to friday at 1 - 7 pm</p>
                <p>
                  Cold brewing is a method of brewing that combines ground
                  coffee and cool water and uses time instead of heat to extract
                  the flavor. It is brewed in small batches and steeped for as
                  long as 48 hours.
                </p>
              </div>
              <div className="text-center">
                <h1 className="mb-5">Choose a size</h1>
                <div className="">
                  <button className="btn btn-primary rounded-full mb-5 text-secondary btn-round mr-10 ml-10">
                    R
                  </button>
                  <button className="btn btn-primary rounded-full mb-5 text-secondary btn-round mr-10 ml-10">
                    L
                  </button>
                  <button className="btn btn-primary rounded-full mb-5 text-secondary btn-round mr-10 ml-10">
                    XL
                  </button>
                </div>
              </div>
            </div>
            <h1 className="text-center">Choose delivery method</h1>
            <div className="flex p-100">
              <button className="btn-s btn-secondary rounded-xl mb-5 text-third ml-10">
                Dine in
              </button>
              <button className="btn-s btn-secondary rounded-xl mb-5 text-third ml-10">
                Door delivery
              </button>
              <button className="btn-s btn-secondary rounded-xl mb-5 text-third ml-10">
                Pick up
              </button>
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

export default ProductDetail;
