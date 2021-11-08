import "../../styles/_utilities.scss";
import logo from "../../assets/shared/logo.svg";

const Navigation = () => {
  return (
    <header className="primary-header flex">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <nav>
        <ul className="primary-navigation underline-indicators flex">
          <li className="active">
            <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="https://changeme.com">
              <span>01</span>Home
            </a>
          </li>
          <li>
            <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="https://changeme.com">
              <span>02</span>Destination
            </a>
          </li>
          <li>
            <a className="ff-sans-cond uppercase text-white letter-spacing-2" href="https://changeme.com">
              <span>03</span>Crew
            </a>
          </li>
          <li>
            <a className="uppercase text-white letter-spacing-2" href="https://changeme.com">
              <span>03</span>Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
