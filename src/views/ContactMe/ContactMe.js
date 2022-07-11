import React from "react";
import "./ContactMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactMe() {
  return (
    <div className="contactMe__section">
      <div className="contactMe__title">Contact Me</div>
      <div className="contactMe__content">
        <div className="contactMe__blur__container">
          <div className="contactMe__blur__content">
            <a href="">
              <span className="contactMe__blur__content__icon">
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
              </span>
            </a>
            <div className="contactMe__blur__bg"></div>
          </div>
        </div>
        <div className="contactMe__blur__container">
          <div className="contactMe__blur__content">
            <a href="">
              <span className="">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </span>
            </a>
            <div className="contactMe__blur__bg"></div>
          </div>
        </div>
        <div className="contactMe__blur__container">
          <div className="contactMe__blur__content">
            <a href="">
              <span className="">
                <FontAwesomeIcon icon="fa-brands fa-facebook" />{" "}
              </span>
            </a>
            <div className="contactMe__blur__bg"></div>
          </div>
        </div>
        <div className="contactMe__blur__container">
          <div className="contactMe__blur__content">
            <a href="">
              <span className="">
                <FontAwesomeIcon icon="fa-regular fa-envelope" />
              </span>
            </a>
            <div className="contactMe__blur__bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
