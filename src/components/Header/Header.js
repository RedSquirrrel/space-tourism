import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import '../../styles/_utilities.scss';
import './Header.scss';
import logo from '../../assets/shared/logo.svg';

const Header = () => {
  const shouldBeOpen = () => window.innerWidth > 560;
  const [menuOpen, setMenuOpen] = useState(shouldBeOpen);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMenuOpen(shouldBeOpen());
    });

    return () =>
      window.removeEventListener('resize', () => {
        setMenuOpen(shouldBeOpen());
      });
  }, [menuOpen]);

  const menuToggleHander = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img className="header__content__logo" src={logo} alt="logo" />
        </Link>

        <div className={`header__content__nav ${menuOpen ? 'isMenu' : ' '}`}>
          <ul className="header__content__primary-navigation  flex">
            <li className="underline-indicators">
              <NavLink to="/" onClick={menuToggleHander} className="ff-sans-cond uppercase text-white letter-spacing-2">
                <span>00</span>Home
              </NavLink>
            </li>
            <li className="underline-indicators">
              <NavLink
                to="/destination"
                onClick={menuToggleHander}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span>01</span>Destination
              </NavLink>
            </li>
            <li className="underline-indicators">
              <NavLink
                to="/crew"
                onClick={menuToggleHander}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span>02</span>Crew
              </NavLink>
            </li>
            <li className="underline-indicators">
              <NavLink to="/technology" onClick={menuToggleHander} className="uppercase text-white letter-spacing-2">
                <span>03</span>Technology
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="header__content__toggle">
          {!menuOpen ? <BiMenuAltRight onClick={menuToggleHander} /> : <AiOutlineClose onClick={menuToggleHander} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
