import React from "react";
import "./About.css";
import Image from "../../assets/images/photo.jpeg";

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
            Fundada en el año 2006, CeTech- OYF inicio como Cibercafé ofreciendo
            a sus usuarios acceso a internet, llamadas Internacionales y recarga
            de minutos. Un par de años más tarde fue agregando más servicios
            como : retiros y consignaciones con el banco Davivienda y Nequi,
            pago de servicios con Mega red y Puntored, servicios de papelería
            como : Laminación, Fotocopiadora, Argollado, Impresiones y venta de
            útiles escolares.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
