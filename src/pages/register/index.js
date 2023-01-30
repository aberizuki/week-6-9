import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    data.append("username", username);
    data.append("password", password);

    console.log(username);
    console.log(password);

    axios
      .post(`http://localhost:5000/api/v1/auth/register`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => console.log("post success:", res))
      .catch((err) => console.log("err:", err));
  };

  //   console.log(localStorage.getItem("@userLogin"));
  return (
    <>
      <main className="container body-home">
        <section className="auth-bg"></section>
        <section className="auth-form">
          <nav className="container navbar">
            <div className="brand">
              <a>
                <img
                  src={require("../../assets/img/logo.png")}
                  width="30"
                  height="30"
                />
              </a>
              <h3>Coffee Shop</h3>
            </div>
            <h2 className="text-secondary text-center brand text-right">
              Sign Up
            </h2>
          </nav>
          <form onSubmit={onSubmit} className="p-50">
            <div className="mb-5">
              <label className="form-label" htmlFor="username-input">
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                className="form-input rounded-xl"
                id="username-input"
                type="text"
                placeholder="Enter your Username"
              />
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="password-input">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="form-input rounded-xl"
                id="password-input"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            {/* <div className="mb-5">
              <label className="form-label" for="text-input">
                Phone Number
              </label>
              <input
                className="form-input rounded-xl"
                id="text-input"
                type="text"
                placeholder="Enter your Phone Number"
              />
            </div> */}
            <button
              type="submit"
              className="btn btn-primary rounded-xl btn-block mb-5 text-secondary"
            >
              Sign Up
            </button>
            <button className="btn btn-third rounded-xl btn-block mb-5 text-black">
              <div className="btn-center">
                <img
                  src={require("../../assets/img/google.png")}
                  width="30"
                  height="30"
                />
                <div className="ml-5">Sign Up with Google</div>
              </div>
            </button>
            <div>
              <hr width="100%" color="#C4C4C4" />
              <div className="text-account mb-5">Already have an account?</div>
            </div>
            <a className="btn btn-secondary rounded-xl btn-block mb-5 text-third flex">
              Login Here
            </a>
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

export default Register;
