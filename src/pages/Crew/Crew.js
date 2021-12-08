import React, { useState } from 'react';
import './Crew.scss';
import Dots from './../../components/Dots/Dots';

const Crew = ({ crewData }) => {
  console.log(crewData);
  const selectedCrews = crewData.map((n, i) => {
    // i = n.name;
    return n.name;
  });
  const [selectedCrew, setSelectCrew] = useState(selectedCrews[0]);

  const handleCrew = (crew) => {
    setSelectCrew(crew);
  };

  return (
    <main id="main-crew" className="grid-container crew flow">
      <h1 className="numbered-title uppercase ff-sans-cond crew__title">
        <span>02</span> Meet Your Crew
      </h1>

      {crewData &&
        crewData.map((c) => {
          return (
            c.name === selectedCrew && (
              <React.Fragment key={c.name}>
                <div className="crew__dots dot-indicators flex">
                  {selectedCrew &&
                    selectedCrews.map((crewName, index) => {
                      return (
                        <Dots key={crewName} selectedCrew={selectedCrew} id={crewName} handleCrew={handleCrew}>
                          {crewName}
                        </Dots>
                      );
                    })}
                </div>

                <article className="crew__details flow ">
                  <header className="flow ">
                    <h2 className="ff-serif uppercase crew__details__role">{c.role}</h2>
                    <p className=" crew__details__name uppercase ff-serif">{c.name}</p>
                  </header>
                  <p>{c.bio} </p>
                </article>
                <picture className="crew__picture">
                  <img className="crew__picture__img" src={c.images[0].png} alt={c.name} />
                </picture>
              </React.Fragment>
            )
          );
        })}
    </main>
  );
};

export default Crew;
