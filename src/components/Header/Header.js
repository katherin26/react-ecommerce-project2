import React from "react";
import "./Header.css";
import HamburguerMenu from "./HeaderHamburguerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="header__section">
      <div className="header__content">
        <div className="header__navbar">
          <div className="header__logo">
            <FontAwesomeIcon
              className="header__logo__sigil"
              icon={"fa-solid fa-sun"}
            />
            <div className="header__logo__title">Dulce Paz</div>
          </div>
          <div className="header__menu">
            <HamburguerMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
