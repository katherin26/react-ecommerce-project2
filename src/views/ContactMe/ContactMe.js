import React from "react";
import "./ContactMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactMe() {
  return (
    <div className="contactMe__section" id="contactMe__section">
      <div className="contactMe__title">Contáctanos</div>
      <div className="contactMe__content">
        <div className="contactMe__blur__container">
          <div className="contactMe__blur__content">
            <a href="https://wa.me/573152592401" target="_blank">
              <span className="contactMe__blur__content__icon">
                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
              </span>
            </a>
            <div className="contactMe__blur__bg"></div>
          </div>
        </div>
        <div className="contactMe__blur__container">
          <div className="contactMe__blur__content">
            <a
              href="https://www.instagram.com/dulcepazmomentosinolvidables/"
              target="_blank"
            >
              <span className="">
                <FontAwesomeIcon icon="fa-brands fa-instagram" />
              </span>
            </a>
            <div className="contactMe__blur__bg"></div>
          </div>
        </div>
        <div className="contactMe__blur__container">
          <div className="contactMe__blur__content">
            <a
              href="https://www.facebook.com/jenny.villanueva.79656921"
              target="_blank"
            >
              <span className="">
                <FontAwesomeIcon icon="fa-brands fa-facebook" />{" "}
              </span>
            </a>
            <div className="contactMe__blur__bg"></div>
          </div>
        </div>
        <div className="contactMe__blur__container">
          <div className="contactMe__blur__content">
            <a href="mailto:pawnotestesting@gmail.com">
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
