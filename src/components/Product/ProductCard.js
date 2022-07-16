import React, { CSSProperties } from "react";
import "./ProductCard.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ProductCard({ images, title }) {
  return (
    <div className="productCard__container" id="productCard__container">
      <div className="productCard__title">{title}</div>
      <Carousel
        showArrows={true}
        onChange={() => console.log("Onchange")}
        onClickItem={() => console.log("OnClick Item")}
        onClickThumb={() => console.log("onClickThumb")}
        transitionTime={5}
        autoPlay={true}
        className="productCard__content"
      >
        {images.map((element, i) => (
          <div>
            <img src={element.image} />
            <p className="legend">{element.detail}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductCard;
