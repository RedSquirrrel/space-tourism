import { useState } from "react";
import "./Destination.scss";

const Destination = ({ data }) => {
  const selectedNames = ["Moon", "Mars", "Europa", "Titan"];
  const [selectDestination, setSelectDestination] = useState(selectedNames[1]);

  const handleDestination = (e) => {
    setSelectDestination(e.target.id);
  };

  return (
    <div className="destination">
      <h1>
        <span>01</span> Pick Your Destination
      </h1>
      {selectDestination &&
        selectedNames.map((dest, index) => {
          return (
            <button
              key={index}
              id={dest}
              className={selectDestination === dest ? "destination__active" : "destination__btn"}
              onClick={handleDestination}
            >
              {dest}
            </button>
          );
        })}

      {data.destinations &&
        data.destinations.map((d, i) => {
          return (
            d.name === selectDestination && (
              <div key={i}>
                <h1>{d.name}</h1>
                <img src={d.images[0].png} alt={d.name} />
                <p>{d.description}</p>
              </div>
            )
          );
        })}
    </div>
  );
};

export default Destination;
