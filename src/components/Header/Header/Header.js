import React from "react";
import "./Header.css";
import HeaderHamburgerMenu from "../HeaderHamburgerMenu/HeaderHamburgerMenu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <div className="header__navbar">
      <div className="header__logo">
        <FontAwesomeIcon
          className="header__logo__sigil"
          icon={"fa-solid fa-sun"}
        />
        <div className="header__logo__title">Dulce Paz</div>
      </div>
      <div className="header__menu">
        <HeaderHamburgerMenu />
      </div>
    </div>
  );
}

export default Header;
