import "../../styles/_utilities.scss";

const Navigation = () => {
  return (
    <nav>
      <ul className="primary-navigation underline-indicators flex">
        <li className="active">
          <a className="uppercase text-white letter-spacing-2" href="#">
            <span>01</span>Active
          </a>
        </li>
        <li>
          <a className="uppercase text-white letter-spacing-2" href="#">
            <span>02</span>Hovered
          </a>
        </li>
        <li>
          <a className="uppercase text-white letter-spacing-2" href="#">
            <span>03</span>Idle
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
