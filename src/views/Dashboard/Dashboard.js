import React from "react";
import "./Dashboard.css";
import ProductCard from "../../components/Product/ProductCard";
import Cosmetic1 from "../../assets/images_products_cosmetics/bronzing_chanel_cream.png";
import Cosmetic2 from "../../assets/images_products_cosmetics/chanel_foundation.png";
import Cosmetic3 from "../../assets/images_products_cosmetics/chanel_rubor.png";
import Cosmetic4 from "../../assets/images_products_cosmetics/hoola_benefit.png";
import Cosmetic5 from "../../assets/images_products_cosmetics/mac_fix_spray.jpeg";
import Cosmetic6 from "../../assets/images_products_cosmetics/mac_fixplus.png";
import Cosmetic7 from "../../assets/images_products_cosmetics/mac_lippencil.png";
import Cosmetic8 from "../../assets/images_products_cosmetics/mac_rubor.png";
import Cosmetic9 from "../../assets/images_products_cosmetics/mascara_chanel.png";
import Cosmetic10 from "../../assets/images_products_cosmetics/shadow_chanel_4.png";

let productsDetails = [
  {
    title: "Cosmetics",
    images: [
      { image: Cosmetic1, detail: "LES BEIGES Healthy Glow Bronzing Cream" },
      {
        image: Cosmetic2,
        detail: "LES BEIGES Healthy Glow Foundation Hydration and Longwear",
      },
      { image: Cosmetic3, detail: "JOUES CONTRASTE Powder Blush" },
      { image: Cosmetic4, detail: "Hoola Matte Powder Bronzer" },
      { image: Cosmetic5, detail: "The MAC Fix+Stay" },
      {
        image: Cosmetic6,
        detail: "Prep + Prime Fix + Primer and Setting Spray",
      },
      { image: Cosmetic7, detail: "Lip Pencil (Mahogany)" },
      { image: Cosmetic8, detail: "M-A-C X Stranger Things Powder Blush" },
      { image: Cosmetic9, detail: "LE VOLUME DE CHANEL Mascara" },
      {
        image: Cosmetic10,
        detail: "LES 4 OMBRES Multi-effect quadra eyeshadow",
      },
    ],
  },
  {
    title: "Cuidado Facial",
    images: [
      { image: Cosmetic1, detail: "detail1" },
      { image: Cosmetic1, detail: "detail2" },
      { image: Cosmetic1, detail: "detail3" },
      { image: Cosmetic1, detail: "detail4" },
      { image: Cosmetic1, detail: "detail5" },
      { image: Cosmetic1, detail: "detail7" },
      { image: Cosmetic1, detail: "detail8" },
    ],
  },
  {
    title: "Desayunos sorpresa",
    images: [
      { image: Cosmetic1, detail: "detail1" },
      { image: Cosmetic1, detail: "detail2" },
      { image: Cosmetic1, detail: "detail3" },
      { image: Cosmetic1, detail: "detail4" },
      { image: Cosmetic1, detail: "detail5" },
      { image: Cosmetic1, detail: "detail7" },
      { image: Cosmetic1, detail: "detail8" },
    ],
  },
  {
    title: "Arreglo de Flores",
    images: [
      { image: Cosmetic1, detail: "detail1" },
      { image: Cosmetic1, detail: "detail2" },
      { image: Cosmetic1, detail: "detail3" },
      { image: Cosmetic1, detail: "detail4" },
      { image: Cosmetic1, detail: "detail5" },
      { image: Cosmetic1, detail: "detail7" },
      { image: Cosmetic1, detail: "detail8" },
    ],
  },
  {
    title: "Smartwatch",
    images: [
      { image: Cosmetic1, detail: "detail1" },
      { image: Cosmetic1, detail: "detail2" },
      { image: Cosmetic1, detail: "detail3" },
      { image: Cosmetic1, detail: "detail4" },
      { image: Cosmetic1, detail: "detail5" },
      { image: Cosmetic1, detail: "detail7" },
      { image: Cosmetic1, detail: "detail8" },
    ],
  },
  {
    title: "Bolsos",
    images: [
      { image: Cosmetic1, detail: "detail1" },
      { image: Cosmetic1, detail: "detail2" },
      { image: Cosmetic1, detail: "detail3" },
      { image: Cosmetic1, detail: "detail4" },
      { image: Cosmetic1, detail: "detail5" },
      { image: Cosmetic1, detail: "detail7" },
      { image: Cosmetic1, detail: "detail8" },
    ],
  },
];

function Dashboard() {
  return (
    <div className="dashboard__section">
      <div className="dashboard__title">Productos</div>
      {productsDetails.map((element, i) => (
        <ProductCard title={element.title} images={element.images} />
      ))}
    </div>
  );
}

export default Dashboard;
