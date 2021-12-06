import '../../styles/_utilities.scss';
import './Dots.scss';

const Dots = ({ children, handleCrew, id }) => {
  return (
    <button className="activee" onClick={() => handleCrew(id)}>
      <span className="sr-only">{children}</span>
    </button>
  );
};

export default Dots;
