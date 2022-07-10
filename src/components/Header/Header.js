import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faD, faP } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header_section">
      <div className="header_content">
        <div className="header_navbar">
          <div className="header_logo">
            <FontAwesomeIcon icon={faD} />
            <FontAwesomeIcon icon={faP} />
          </div>
          <div className="header_menu">
            <div className="header_menu--bottom">About Us</div>
            <div className="header_menu--bottom">Products</div>
            <div className="header_menu--bottom">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
