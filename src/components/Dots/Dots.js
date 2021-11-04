import "../../styles/_utilities.scss";
import "./Dots.scss";

const Dots = () => {
  return (
    <div className="dot-indicators flex">
      <button className="activee">
        <span className="sr-only">Slide title</span>
      </button>
      <button>
        <span className="sr-only">Slide title</span>
      </button>
      <button>
        <span className="sr-only">Slide title</span>
      </button>
    </div>
  );
};

export default Dots;
