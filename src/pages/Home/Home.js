// import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <a className="fs-300 text-dark bg-white skip-to-content" href="#main">
        Skip to content
      </a>

      <main id="main" className="home">
        <div className="grid-container grid-container__home">
          <div className="grid-container__text-container">
            <h1 className="uppercase text-accent fs-500 ff-sans-cond letter-spacing-1">
              So, you want to travel to
              <span className="d-block fs-900 ff-serif text-white"> Space</span>
            </h1>
            <p className="grid-container__paragraph text-accent ">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover
              kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world
              experience!
            </p>
          </div>
          <div>
            <a
              className="grid-container__large-button uppercase ff-serif bg-white text-dark"
              href="https://changeme.com"
            >
              Explore
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
