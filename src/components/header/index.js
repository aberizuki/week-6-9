import { useEffect, useState } from "react";
import Authenticated from "./authenticated.js";
import Unauthenticated from "./unauthenticated.js";
import { Outlet, Link } from "react-router-dom";

const pageTitle = (title) => {
  if (typeof title == "undefined") {
    return "Coffe Shop";
  }
  return `${title} - Coffe Shop`;
};

const Header = ({ headerShown, title }) => {
  const [isLogin, setIsLogin] = useState(false);

  // const RenderMenu = ()=> {
  //   if(isLogin) {
  //     return(<Authenticated setIsLogin={setIsLogin} />)
  //   }
  //   return <Unauthenticated />
  // }

  //similar with componentDidmount() but use hooks
  useEffect(() => {
    //akan berjalan ketika awal pertama kali user load page, dan hanya 1x
    if (localStorage.getItem("@userLogin")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <>
      <nav className="navbar navbar-3 p-50">
        <div className="brand align">
          <img
            src={require("../../assets/img/logo.png")}
            width="30"
            height="30"
          />
          <a className=""> {pageTitle(title)}</a>
        </div>
        <div className="p-15 text-thin">
          <Link to="/" className="p-30 text-thin">
            Home
          </Link>
          <Link to="/product" className="p-30 text-thin">
            Product
          </Link>
          <a className="p-30 text-thin">Your Cart</a>
          <a className="p-30 text-thin">History</a>
        </div>

        {isLogin ? (
          <Authenticated setIsLogin={setIsLogin} />
        ) : (
          <Unauthenticated />
        )}
      </nav>
      {headerShown && <header className="h-[50vh] bg-primary"></header>}
      <hr></hr>
    </>
  );
};

export default Header;
