import React, { useState } from "react";
import "./HeaderHamburgerMenu.css";

function HeaderHamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="hamburgerMenu__container">
      <div
        className={
          showMenu
            ? "hamburgerMenu__hamburger isactive"
            : "hamburgerMenu__hamburger"
        }
        onClick={handleToggle}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <div
        className={
          showMenu ? "hamburgerMenu__navbar active" : "hamburgerMenu__navbar "
        }
      >
        <ul>
          <li>
            <a href="#contactMe__section">
              <b>Contáctanos</b>
            </a>
          </li>
          <li>
            <a href="#about__section">
              <b>Mi Historia</b>
            </a>
          </li>
          <li>
            <a href="#dashboard__section">
              <b>Productos</b>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderHamburgerMenu;
