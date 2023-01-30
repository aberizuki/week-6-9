import React, { useState, useEffect } from "react";
// import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import Header from "../../components/header";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducts } from "../../redux/action/product";

const Products = () => {
  const { data, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllproducts());
  }, []);

  return (
    <>
      <Header />

      <main className="container">
        <section className="promo p-50 mb-5">
          <h1 className="text-secondary text-center mb-5">Promo for you</h1>
          <p className="text-center mb-5">
            Coupons will be updated every weeks. <br />
            Check them out!
          </p>
          <div className="card-l text-center mb-5 p-card-l">
            <img
              className="rounded-full"
              src={require("../../assets/img/beef-spha.png")}
              alt=""
            />
            <h1>
              Beef Sphagetti
              <br />
              20% OFF
            </h1>
            <p>
              Buy 1 Choco Oreo and get 20% off
              <br />
              for Beef Spaghetti
            </p>
            <hr />
            <p>COUPON CODE</p>
            <h1>FNPR15RG</h1>
            <p>Valid until October 10th 2020</p>
          </div>
          <button className="btn btn-secondary rounded-xl btn-block mb-5 text-third">
            Apply Coupon
          </button>
          <h3 className="text-gray-1">Terms and Condition</h3>
          <p className="text-gray-2">1. You can only apply 1 coupon per day</p>
          <p className="text-gray-2">2. It only for dine in</p>
          <p className="text-gray-2">3. Buy 1 get 1 only for new user</p>
          <p className="text-gray-2">
            4. Should make member card to apply coupon
          </p>
        </section>
        <section className="product">
          <div>
            <nav className="container navbar-2">
              <a className="p-30 text-thin-2">Favorite Product</a>
              <a className="p-30 text-thin-2">Coffee</a>
              <a className="p-30 text-thin-2">Non Coffee</a>
              <a className="p-30 text-thin-2">Foods</a>
              <a className="p-30 text-thin-2">Add-on</a>
            </nav>
          </div>
          <div className="prod-grid flex p-100">
            {data.map((item) => {
              console.log(item.images[0]["filename"]);
              return (
                <div
                  key={item.id}
                  className="card-s text-center mb-5 p-card-s ml-10"
                >
                  <Link to={`/product/${item.id}`}>
                    <img
                      className="rounded-full prod-img p-10 justify-center mr-[0]"
                      src={`http://localhost:5000/uploads/images/${item.images[0].filename}`}
                      alt=""
                    />
                  </Link>
                  <br />
                  <a>
                    <strong className="p-10">{item.title}</strong> <br />
                  </a>
                  <a className="text-secondary p-10">{item.price}</a>
                  <a>{}</a>
                </div>
              );
            })}
            {/* <div className="card-s text-center mb-5 p-card-s ml-10">
              <img
                className="rounded-full"
                src={require("../../assets/img/beef-spha.png")}
                alt=""
              />
              <h1>Veggie Tomato Mix</h1>
              <p className="text-secondary">IDR 34.000</p>
            </div>
            */}
          </div>
        </section>
      </main>
      <footer className="">
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
    </>
  );
};

export default Products;
