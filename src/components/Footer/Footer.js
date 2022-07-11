import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer__section">
      <div className="footer__content">
        <h1 className="footer__title">
          <FontAwesomeIcon className="copyright" icon={faCopyright} /> 2022
          Dulce Paz | HandCrafted by Katherin Ochoa
        </h1>
      </div>
    </div>
  );
}

export default Footer;
