import React, { useState } from "react";
import "./HeaderHamburguerMenu.css";
import "./js.js";

function HeaderHamburguerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="hamburgerMenu__section">
      <div className="hamburgerMenu__content">
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
              showMenu
                ? "hamburgerMenu__navbar active"
                : "hamburgerMenu__navbar "
            }
          >
            <ul>
              <li>
                <a href="#">
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <b>Home</b>
                </a>
              </li>
              <li>
                <a href="#">
                  <b>Home</b>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderHamburguerMenu;