import React, { useState } from 'react';
import './Destination.scss';
import Buttons from './../../components/Buttons/Buttons';

const Destination = ({ dataDestinations }) => {
  const selectedNames = dataDestinations.map((n, i) => {
    i = n.name;
    return n.name;
  });
  const [selectDestination, setSelectDestination] = useState(selectedNames[0]);

  const handleDestination = (planet) => {
    setSelectDestination(planet);
  };

  return (
    <main id="main-destination" className="grid-container destination flow">
      <h1 className="numbered-title uppercase ff-sans-cond destination__title">
        <span>01</span> Pick Your Destination
      </h1>

      {dataDestinations &&
        dataDestinations.map((d) => {
          return (
            d.name === selectDestination && (
              <React.Fragment key={d.name}>
                <img className="destination__img" src={d.images[0].png} alt={d.name} />

                <div className="destination__buttons tab-list underline-indicators flex">
                  {selectDestination &&
                    selectedNames.map((dest, index) => {
                      return (
                        <Buttons
                          key={dest}
                          id={dest}
                          selectDestination={selectDestination}
                          handleDestination={handleDestination}
                        >
                          {dest}
                        </Buttons>
                      );
                    })}
                </div>

                <article className="destination__info flow ">
                  <h2 className="ff-serif uppercase destination__name">{d.name}</h2>
                  <p>{d.description}</p>

                  <div className="destination__meta flex">
                    <div>
                      <h3 className="letter-spacing-3 ff-sans-cond  fs-200 text-accent uppercase">Avg. Distance </h3>
                      <p className="ff-serif text-white uppercase">{d.distance} </p>
                    </div>
                    <div>
                      <h3 className="letter-spacing-3 ff-sans-cond  fs-200 text-accent uppercase">Est. Travel Time </h3>
                      <p className="ff-serif text-white uppercase">{d.travel} </p>
                    </div>
                  </div>
                </article>
              </React.Fragment>
            )
          );
        })}
    </main>
  );
};

export default Destination;
