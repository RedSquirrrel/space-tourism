import React, { useState, useEffect } from 'react';
import './Technology.scss';
import Dots from './../../components/Dots/Dots';
// import './../../styles/_utilities.scss';

const Technology = ({ technologyData }) => {
  const selectedNames = technologyData.map((t) => t.name);
  const [technology, setTechnology] = useState('Launch vehicle');

  const shouldBeDesktopSize = () => window.innerWidth > 720;
  const [desktopSize, setDesktopSize] = useState(shouldBeDesktopSize);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDesktopSize(shouldBeDesktopSize());
    });

    return () =>
      window.removeEventListener('resize', () => {
        setDesktopSize(shouldBeDesktopSize());
      });
  }, [desktopSize]);

  const handleTerm = (tech) => {
    setTechnology(tech);
  };

  return (
    <main id="main-technology" className="grid-container technology flow">
      <h1 className="technology__title numbered-title uppercase ff-sans-cond ">
        <span>03</span> Space Lauch 101
      </h1>

      {technology &&
        technologyData.map((t) => {
          return (
            t.name === technology && (
              <React.Fragment key={t.name}>
                <picture className="technology__picture">
                  {!desktopSize ? (
                    <img className="technology__picture__img" src={t.images['landscape']} alt={t.name} />
                  ) : (
                    <img className="technology__picture__img" src={t.images['portrait']} alt={t.name} />
                  )}
                </picture>

                <div className="technology__dots dot-indicators  flex">
                  {technology &&
                    selectedNames.map((techno, index) => {
                      return (
                        <Dots key={techno} selectedDot={technology} id={techno} handleDot={handleTerm}>
                          {index + 1}
                        </Dots>
                      );
                    })}
                </div>

                <article className="technology__info flow ">
                  <p className="technology__term uppercase text-accent">The Terminology ...</p>
                  <h2 className="technology__info__name ff-serif uppercase">{t.name}</h2>
                  <p>{t.description}</p>
                </article>
              </React.Fragment>
            )
          );
        })}
    </main>
  );
};

export default Technology;
