import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import "../../styles/_utilities.scss";
import "./Header.scss";
import logo from "../../assets/shared/logo.svg";

const Header = () => {
  const shouldBeOpen = () => window.innerWidth > 560;
  const [menuOpen, setMenuOpen] = useState(shouldBeOpen);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMenuOpen(shouldBeOpen());
    });

    return () =>
      window.removeEventListener("resize", () => {
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

        <div className={`header__content__nav ${menuOpen ? "isMenu" : " "}`}>
          <ul className="header__content__primary-navigation underline-indicators flex">
            <li className="active">
              <Link to="/" onClick={menuToggleHander} className="ff-sans-cond uppercase text-white letter-spacing-2">
                <span aria-hidden="true">01</span>Home
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                onClick={menuToggleHander}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span aria-hidden="true">02</span>Destination
              </Link>
            </li>
            <li>
              <Link
                to="/crew"
                onClick={menuToggleHander}
                className="ff-sans-cond uppercase text-white letter-spacing-2"
              >
                <span aria-hidden="true">03</span>Crew
              </Link>
            </li>
            <li>
              <Link to="/technology" onClick={menuToggleHander} className="uppercase text-white letter-spacing-2">
                <span aria-hidden="true">03</span>Technology
              </Link>
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
