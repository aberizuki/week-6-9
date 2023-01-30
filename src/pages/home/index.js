import Header from "../../components/header";
import "../../assets/styles/global.css";
// import "../home/global1.css";
// import "../home/style1.css";

const Home = () => {
  return (
    <>
      <Header />

      <div className="search-container">
        <div className="search-bar">
          <img className="icn18" src={require("../../assets/img/search.png")} />
          <input
            className="sb-fill font16px-med text-grey rubik"
            type="text"
            placeholder="Search.."
          />
        </div>
      </div>

      <section className="banner">
        <h1 className="font50px-bld text-white rubik h1bann">
          Start Your Day with Coffee and Good Meals
        </h1>
        <p className="font20px-bld text-white rubik pbann">
          We provide high quality beans, good taste, and healthy meals made by
          love just for you. Start your day with us for a bigger smile!
        </p>
        <a href="#">
          <button className="btn-prim eff-btn btnbann">Get Started</button>
        </a>
      </section>

      {/* <section>
        <section class="contguide">
          <img class="icn55" src="img/Icon/user.png" />
          <div
            class="guidetext"
            style="border-right: 2px #eeeff2 solid; padding-right: 12vw"
          >
            <h2 class="font25px-bld text-blueblack rubik">90+</h2>
            <p class="font16px-reg text-grey rubik">Staff</p>
          </div>
        </section>

        <section class="contguide">
          <img class="icn55" src="img/Icon/location.png" />
          <div
            class="guidetext"
            style="border-right: 2px #eeeff2 solid; padding-right: 12vw"
          >
            <h2 class="font25px-bld text-blueblack rubik">30+</h2>
            <p class="font16px-reg text-grey rubik">Stores</p>
          </div>
        </section>

        <section class="contguide">
          <img class="icn55" src="img/Icon/Server.png" />
          <div class="guidetext">
            <h2 class="font25px-bld text-blueblack rubik">800+</h2>
            <p class="font16px-reg text-grey rubik">Costumers</p>
          </div>
        </section>
      </section> */}
    </>
  );
};

export default Home;
