import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [validate, setValidate] = useState({ error: false, message: "" });
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(loginForm);
    axios({
      url: "http://localhost:5000/api/v1/auth/login",
      method: "POST",
      data: loginForm,
    })
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("@userLogin", JSON.stringify(res.data.data));
        navigate("/product");
      })
      .catch((err) => {
        setValidate({ error: true, message: err.response.data.message });
      });
  };

  // console.log(localStorage.getItem("@userLogin"));
  useEffect(() => {
    if (localStorage.getItem("@userLogin")) {
      navigate("/product");
    }
  }, []);
  return (
    <>
      <main className="container body-home">
        <section className="auth-bg"></section>
        <section className="auth-form">
          <nav className="container navbar">
            <div className="brand">
              <a href="product.html">
                <img
                  src={require("../../assets/img/logo.png")}
                  width="30"
                  height="30"
                />
              </a>
              <h3>Coffee Shop</h3>
            </div>
            <h2 className="text-secondary text-center brand text-right">
              Login
            </h2>
            {/* <button className="btn btn-primary rounded-full">Sign Up</button> */}
          </nav>
          <form onSubmit={handleLogin} className="p-50">
            {validate.error && (
              <div className="alert alert-error shadow-lg my-3">
                <div>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> */}
                  <span>{validate.message}</span>
                </div>
              </div>
            )}
            <div className="mb-5">
              <label className="form-label" htmlFor="username">
                Username
              </label>
              <input
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    username: e.target.value,
                  })
                }
                className="form-input rounded-xl"
                id="username"
                type="text"
                placeholder="Enter your Username"
              />
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="password-input">
                Password
              </label>
              <input
                onChange={(e) =>
                  setLoginForm({
                    ...loginForm,
                    password: e.target.value,
                  })
                }
                className="form-input rounded-xl"
                id="password-input"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
            <div className="mb-5">
              <a className="text-forgot mb-5" href="forgotpw.html">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="btn btn-primary rounded-xl btn-block mb-5 text-secondary"
            >
              Login
            </button>
            <button className="btn btn-third rounded-xl btn-block mb-5 text-black">
              <div className="btn-center">
                <img
                  src={require("../../assets/img/google.png")}
                  width="30"
                  height="30"
                />
                <div className="ml-5">Login with Google</div>
              </div>
            </button>
            <div>
              <hr width="100%" color="#C4C4C4" />
              <div className="text-account mb-3">Don't have an account?</div>
            </div>
            <Link to="/register">
              <button className="btn btn-secondary rounded-xl btn-block mb-5 text-third flex mr-10">
                Sign Up Here
              </button>
            </Link>
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
}

// export default Login;
