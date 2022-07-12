import React from "react";
import "./Dashboard.css";
import ProductCard from "../../components/Product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carousel } from "react-responsive-carousel";

function Dashboard() {
  return (
    <div className="dashboard__section">
      <div className="dashboard__title">Products section</div>
      <div className="dashboard__container">
        <div className="carousel" id="carousel">
          <ProductCard />
        </div>
      </div>
      <Carousel
        showArrows={true}
        onChange={() => console.log("Onchange")}
        onClickItem={() => console.log("OnClick Item")}
        onClickThumb={() => console.log("onClickThumb")}
      >
        <div>
          <img src="images/flowers__banner.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="images/flowers__banner2.jpg" />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Dashboard;
