import React from "react";
import CofeLogo from "../img/Cofe-logo.svg";
import "./Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <a className="header__link" href="#link">
            <img
              className="header__logo"
              src={CofeLogo}
              alt="cofe logo"
              width="237"
              height="27"
            />
          </a>

          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a className="nav__link" href="#link">Home</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#link">About us</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="#link">Create your plan</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
