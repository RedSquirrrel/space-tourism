import '../../styles/_utilities.scss';
import './Buttons.scss';

const Buttons = ({ children, handleDestination, id }) => {
  return (
    <button
      // className="uppercase active text-accent ff-sans-cond bg-dark letter-spacing-2"
      className="uppercase text-accent ff-sans-cond letter-spacing-2"
      onClick={() => handleDestination(id)}
    >
      {children}
    </button>
  );
};

export default Buttons;
