import React, { useState, useEffect } from 'react';
import './Destination.scss';
import Buttons from './../../components/Buttons/Buttons';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Destination = ({ dataDestinations }) => {
  const [loading, setLoading] = useState(false);
  const selectedNames = dataDestinations.map((n) => n.name);
  const [selectDestination, setSelectDestination] = useState('Moon');

  const shouldBeDesktopSize = () => window.innerWidth > 720;
  const [desktopSize, setDesktopSize] = useState(shouldBeDesktopSize);

  let timeoutDuration = Math.floor(Math.random() * 600) + 300;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setDesktopSize(shouldBeDesktopSize());
    });

    return () =>
      window.removeEventListener('resize', () => {
        setDesktopSize(shouldBeDesktopSize());
      });
  }, [desktopSize]);

  const handleDestination = (planet) => {
    setSelectDestination(planet);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, timeoutDuration);
  };

  return (
    <main id="main-destination" className="grid-container destination flow">
      <h1 className="numbered-title uppercase ff-sans-cond destination__title">
        <span>01</span> Pick Your Destination
      </h1>
      <SkeletonTheme baseColor="#202020" highlightColor="#444" duration={0.5}>
        {dataDestinations &&
          dataDestinations.map((d) => {
            return (
              d.name === selectDestination && (
                <React.Fragment key={d.name}>
                  <picture className="destination__picture">
                    <div>
                      {loading ? (
                        desktopSize ? (
                          <Skeleton
                            circle={true}
                            height={400}
                            width={400}
                            style={{ boxShadow: '-4px -1px 13px 10px rgba(0,0,0,0.5)' }}
                          />
                        ) : (
                          <Skeleton
                            circle={true}
                            height={200}
                            width={200}
                            style={{ boxShadow: '-4px -1px 13px 10px rgba(0,0,0,0.5)' }}
                          />
                        )
                      ) : (
                        <img className="destination__picture__img" src={d.images[0].png} alt={d.name} />
                      )}
                    </div>
                  </picture>

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
                    <h2 className="ff-serif uppercase destination__name">
                      {!loading ? d.name : <Skeleton style={{ boxShadow: '-4px -1px 13px 10px rgba(0,0,0,0.5)' }} />}
                    </h2>
                    <p>
                      {!loading ? (
                        d.description
                      ) : (
                        <Skeleton count={4} style={{ boxShadow: '-4px -1px 13px 10px rgba(0,0,0,0.5)' }} />
                      )}
                    </p>
                    <div className="destination__meta flex">
                      <div>
                        <h3 className="letter-spacing-3 ff-sans-cond  fs-200 text-accent uppercase">Avg. Distance </h3>
                        <p className="ff-serif text-white uppercase">
                          {!loading ? (
                            d.distance
                          ) : (
                            <Skeleton style={{ boxShadow: '-4px -1px 13px 10px rgba(0,0,0,0.5)' }} />
                          )}
                        </p>
                      </div>
                      <div>
                        <h3 className="letter-spacing-3 ff-sans-cond  fs-200 text-accent uppercase">
                          Est. Travel Time
                        </h3>
                        <p className="ff-serif text-white uppercase">
                          {!loading ? (
                            d.travel
                          ) : (
                            <Skeleton style={{ boxShadow: '-4px -1px 13px 10px rgba(0,0,0,0.5)' }} />
                          )}
                        </p>
                      </div>
                    </div>
                  </article>
                </React.Fragment>
              )
            );
          })}
      </SkeletonTheme>
    </main>
  );
};

export default Destination;
