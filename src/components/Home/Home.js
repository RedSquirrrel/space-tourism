import Navigation from "../Navigation/Navigation";
import "./Home.scss";
import logo from "../../assets/shared/logo.svg";

const Home = () => {
  return (
    <div className="container">
      <div className="flex">
        <img src={logo} alt="logo" />
        <Navigation />
      </div>
      <div className="flex">
        <div>
          <p className="uppercase">So, you want to travel to</p>
          <h1 className="uppercase">Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <a className="large-button uppercase ff-serif bg-white text-dark fs-600" href="#">
          Explore
        </a>
      </div>
    </div>
  );
};

export default Home;
