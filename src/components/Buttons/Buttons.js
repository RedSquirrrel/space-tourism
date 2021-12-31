import '../../styles/_utilities.scss';
import './Buttons.scss';

const Buttons = ({ children, handleDestination, id, selectDestination }) => {
  return (
    <button
      className={`${
        selectDestination === id ? 'active' : ''
      } uppercase text-accent ff-sans-cond bg-dark letter-spacing-2 dest-btn`}
      onClick={() => handleDestination(id)}
    >
      {children}
    </button>
  );
};

export default Buttons;
