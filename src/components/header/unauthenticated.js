import { Link } from "react-router-dom";

const Unauthenticated = ({ setIsLogin }) => {
  return (
    <div className="button-navbar navbar p-15 align">
      <Link to="/Login">
        <button className="btn btn-secondary btn-center m-1">Log in</button>
      </Link>
      <Link to="/Register">
        <button className="btn btn-third btn-center m-1">Sign in</button>
      </Link>
    </div>
  );
};
export default Unauthenticated;
