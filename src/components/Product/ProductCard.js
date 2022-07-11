import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="carousel__slide">
      <div className="carousel__visual">
        <img
          className="carousel__image"
          src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>
      <div className="carousel__content">
        <h1 className="carousel__content__title">Cherry</h1>
        <a
          className="carousel__content__link"
          href="https://unsplash.com/photos/vbAEHCrvXZ0"
        >
          @picoftasty
        </a>
        <span className="carousel__content__heart">heart icon</span>
      </div>
    </div>
  );
}

export default ProductCard;
