import React from "react";
import "./About.css";
import Image from "../../assets/images/dulce_photo.png";

function About() {
  return (
    <div className="about__section" id="about__section">
      <div className="about__content">
        <h1 className="about__title">Mi Historia</h1>
        <div className="about__details">
          <div className="about__image">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img src={Image} className="about__image__user"></img>
          </div>
          <p className="about__paragraph">
            Dulce Paz es una compañía fundada en el año 2017 por{" "}
            <b>Jenny Villanueva</b>, nuestra misión es brindar servicios para
            facilitar a las personas que necesitan de un <b>regalo</b> o una
            sorpresa especial para un ser querido.
            <br />
          </p>

          <p className="about__paragraph">
            Gracias a las redes sociales como{" "}
            <b>Facebook, Instagram, Whatsaap y nuestro sitio web</b>, podemos
            contactar con personas en toda Colombia y proveer nuestra mercancía
            y servicios de lunes a domingo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
