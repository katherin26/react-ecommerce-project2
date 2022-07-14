import React from "react";
import "./Dashboard.css";
import ProductCard from "../../components/Product/ProductCard";
import Cosmetics from "../../assets/images/photo.jpeg";
import Practice from "../../assets/images/cetech-oyf.png";

let productsDetails = [
  {
    title: "Cosmetics",
    images: [
      { image: Practice, detail: "detail1" },
      { image: Practice, detail: "detail2" },
      { image: Practice, detail: "detail3" },
      { image: Practice, detail: "detail4" },
      { image: Practice, detail: "detail5" },
      { image: Practice, detail: "detail7" },
      { image: Practice, detail: "detail8" },
    ],
  },
  {
    title: "Cuidado Facial",
    images: [
      { image: Practice, detail: "detail1" },
      { image: Practice, detail: "detail2" },
      { image: Practice, detail: "detail3" },
      { image: Practice, detail: "detail4" },
      { image: Practice, detail: "detail5" },
      { image: Practice, detail: "detail7" },
      { image: Practice, detail: "detail8" },
    ],
  },
  {
    title: "Desayunos sorpresa",
    images: [
      { image: Practice, detail: "detail1" },
      { image: Practice, detail: "detail2" },
      { image: Practice, detail: "detail3" },
      { image: Practice, detail: "detail4" },
      { image: Practice, detail: "detail5" },
      { image: Practice, detail: "detail7" },
      { image: Practice, detail: "detail8" },
    ],
  },
  {
    title: "Arreglo de Flores",
    images: [
      { image: Practice, detail: "detail1" },
      { image: Practice, detail: "detail2" },
      { image: Practice, detail: "detail3" },
      { image: Practice, detail: "detail4" },
      { image: Practice, detail: "detail5" },
      { image: Practice, detail: "detail7" },
      { image: Practice, detail: "detail8" },
    ],
  },
  {
    title: "Smartwatch",
    images: [
      { image: Practice, detail: "detail1" },
      { image: Practice, detail: "detail2" },
      { image: Practice, detail: "detail3" },
      { image: Practice, detail: "detail4" },
      { image: Practice, detail: "detail5" },
      { image: Practice, detail: "detail7" },
      { image: Practice, detail: "detail8" },
    ],
  },
  {
    title: "Bolsos",
    images: [
      { image: Practice, detail: "detail1" },
      { image: Practice, detail: "detail2" },
      { image: Practice, detail: "detail3" },
      { image: Practice, detail: "detail4" },
      { image: Practice, detail: "detail5" },
      { image: Practice, detail: "detail7" },
      { image: Practice, detail: "detail8" },
    ],
  },
];

function Dashboard() {
  return (
    <div className="dashboard__section">
      {productsDetails.map((element, i) => (
        <ProductCard title={element.title} images={element.images} />
      ))}
    </div>
  );
}

export default Dashboard;
