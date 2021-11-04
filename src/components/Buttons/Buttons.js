import "../../styles/_utilities.scss";
import "./Buttons.scss";

const Buttons = () => {
  return (
    <div className=" tab-list underline-indicators flex">
      <button className="uppercase active text-accent ff-sans-cond bg-dark letter-spacing-2">Moon</button>
      <button className="uppercase text-accent ff-sans-cond bg-dark letter-spacing-2">Mars</button>
      <button className="uppercase text-accent ff-sans-cond bg-dark letter-spacing-2">Europa</button>
      <button className="uppercase text-accent ff-sans-cond bg-dark letter-spacing-2">Titan</button>
    </div>
  );
};

export default Buttons;
