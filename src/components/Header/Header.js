import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faD, faP } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header__section">
      <div className="header__content">
        <div className="header__navbar">
          <div className="header__logo">
            <FontAwesomeIcon icon={faD} />
            <FontAwesomeIcon icon={faP} />
          </div>
          <div className="header__menu">Menu</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
