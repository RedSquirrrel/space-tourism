import Navigation from "../Navigation/Navigation";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="grid-container">
        <div>
          <h1 className="uppercase text-accent fs-500 ff-sans-cond letter-spacing-1">
            So, you want to travel to
            <span className="fs-900 ff-serif text-white"> Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            00 Home 01 Destination 02 Crew 03 Technology So, you want to travel to Space Let’s face it; if you want to
            go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit
            back, and relax because we’ll give you a truly out of this world experience! Explore
          </p>
        </div>
        <div>
          <a
            className="grid-container__large-button uppercase ff-serif bg-white text-dark fs-600"
            href="https://changeme.com"
          >
            Explore
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
