import React from "react";
import "./Navbar.css";
import Header from "../../components/Header/Header/Header";
import Banner from "../../components/Banner/Banner";

function Navbar() {
  return (
    <div className="navbar__container">
      <Header />
      <Banner />
    </div>
  );
}

export default Navbar;
