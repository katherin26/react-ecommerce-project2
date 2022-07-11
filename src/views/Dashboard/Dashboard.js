import React from "react";
import "./Dashboard.css";
import ProductCard from "../../components/Product/ProductCard";

function Dashboard() {
  return (
    <div className="dashboard__section">
      <div className="dashboard__title">Products section</div>
      <div className="dashboard__container">
        <div className="carousel" id="carousel">
          <ProductCard />
        </div>
      </div>
      <div className="nav__prev">-</div>
      <div className="nav__next">-</div>
    </div>
  );
}

export default Dashboard;
