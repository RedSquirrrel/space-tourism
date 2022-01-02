import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Home.scss';

const Home = () => {
  return (
    <div>
      <a className="text-dark bg-white skip-to-content" href="#main">
        Skip to content
      </a>

      <main id="main-home" className="home grid-container">
        <div className="home__title-container">
          <h1 className="home__title-container__title uppercase text-accent ff-sans-cond letter-spacing-1">
            So, you want to travel to
            <span className="d-block ff-serif text-white"> Space</span>
          </h1>
        </div>

        <div className="home__paragraph-container">
          <p className="home__paragraph-container__paragraph text-accent ">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
            of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className="home__large-button-container">
          <Link
            to="/destination"
            className="home__large-button-container__large-button uppercase ff-serif bg-white text-dark"
          >
            Explore
          </Link>
        </div>

        <footer className="ff-serif text-accent">
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Home;
