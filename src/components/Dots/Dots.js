import '../../styles/_utilities.scss';
import './Dots.scss';

const Dots = ({ children, handleDot, id, selectedDot }) => {
  return (
    <button
      aria-selected="true"
      role="tab"
      className={`transparent ${selectedDot === id ? 'active-dot' : ''}`}
      onClick={() => handleDot(id)}
    >
      <span>{children}</span>
    </button>
  );
};

export default Dots;
