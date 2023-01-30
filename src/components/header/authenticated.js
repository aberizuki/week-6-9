const Authenticated = ({ setIsLogin }) => {
  return (
    <div className="button-navbar navbar p-15">
      {/* <button className="btn btn-secondary btn-center m-1">Log in</button>
        <button className="btn btn-third btn-center m-1">Sign in</button> */}
      <img
        src={require("../../assets/img/search.png")}
        width="30"
        height="30"
      />
      <img src={require("../../assets/img/chat.png")} width="30" height="30" />
      <img
        src={require("../../assets/img/profile.png")}
        width="30"
        height="30"
        className="rounded-full"
      />
      <a
        onClick={() => {
          localStorage.removeItem("@userLogin");
          setIsLogin(false);
        }}
        className=""
      >
        Log Out
      </a>
    </div>
  );
};
export default Authenticated;
