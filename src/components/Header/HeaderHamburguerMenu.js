import React from "react";
import "./HeaderHamburguerMenu.css";

function HeaderHamburguerMenu() {
  return (
    <div className="hamburguerMenu__section">
      <div className="hamburguerMenu__content">
        <div className="hamburguerMenu__container">
          <div className="hamburguerMenu__hamburguer">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <div className="hamburguerMenu__navbar">
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
  );
}

export default HeaderHamburguerMenu;
