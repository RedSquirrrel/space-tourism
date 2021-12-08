import '../../styles/_utilities.scss';
import './Dots.scss';

const Dots = ({ children, handleCrew, id, selectedCrew }) => {
  return (
    <button
      aria-selected="true"
      role="tab"
      className={selectedCrew === id ? 'activee' : ''}
      onClick={() => handleCrew(id)}
    >
      <span className="sr-only">{children}</span>
    </button>
  );
};

export default Dots;
