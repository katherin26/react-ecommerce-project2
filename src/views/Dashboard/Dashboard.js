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

import Facial1 from "../../assets/images_products_cuidadoFacial/cerave.png";
import Facial2 from "../../assets/images_products_cuidadoFacial/clinique.png";
import Facial3 from "../../assets/images_products_cuidadoFacial/foreo.png";
import Facial4 from "../../assets/images_products_cuidadoFacial/garnier.png";
import Facial5 from "../../assets/images_products_cuidadoFacial/larocheposey.png";
import Facial6 from "../../assets/images_products_cuidadoFacial/larocheposey2.png";
import Facial7 from "../../assets/images_products_cuidadoFacial/maxcomplexion.png";
import Facial8 from "../../assets/images_products_cuidadoFacial/meltingcleansingbalm.png";
import Facial9 from "../../assets/images_products_cuidadoFacial/niacinamidebrigtening.png";
import Facial10 from "../../assets/images_products_cuidadoFacial/theordinary.png";

import Flowers1 from "../../assets/images_products_arreglodeFlores/flowers1.jpg";
import Flowers2 from "../../assets/images_products_arreglodeFlores/flowers2.jpg";
import Flowers3 from "../../assets/images_products_arreglodeFlores/flowers3.jpg";
import Flowers4 from "../../assets/images_products_arreglodeFlores/flowers4.jpg";
import Flowers5 from "../../assets/images_products_arreglodeFlores/flowers5.jpg";
import Flowers6 from "../../assets/images_products_arreglodeFlores/flowers6.jpg";
import Flowers7 from "../../assets/images_products_arreglodeFlores/flowers7.jpg";
import Flowers8 from "../../assets/images_products_arreglodeFlores/flowers8.jpg";
import Flowers9 from "../../assets/images_products_arreglodeFlores/flowers9.jpg";
import Flowers10 from "../../assets/images_products_arreglodeFlores/flowers10.jpg";

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
      { image: Facial1, detail: "Hydrating Facial Cleanser" },
      { image: Facial2, detail: "Balm Makeup Remover" },
      { image: Facial3, detail: "Foreo Play Plus 2" },
      { image: Facial4, detail: "Skin Active Micellar Cleansing Water" },
      { image: Facial5, detail: "Toleraine Hydrating Gentle Face Cleanser" },
      { image: Facial6, detail: "Toleraine Purifying Foaming Face Wash" },
      { image: Facial7, detail: "Max Complexion Correction Pads" },
      {
        image: Facial8,
        detail: "Holy Hydration! Makeup Melting Cleansing Balm",
      },
      { image: Facial9, detail: "Niacinamide Brightening Toner" },
      {
        image: Facial10,
        detail: "Glycolic Acid7% Exfoliating Toning Solution",
      },
    ],
  },

  {
    title: "Arreglo de Flores",
    images: [
      { image: Flowers1, detail: "Red Rose Flower" },
      { image: Flowers2, detail: "Red Rose and White Clavel" },
      { image: Flowers3, detail: "White Rose" },
      { image: Flowers4, detail: "Red Rose and White flower" },
      { image: Flowers5, detail: "Red and white Rose" },
      { image: Flowers6, detail: "Pink Rose" },
      { image: Flowers7, detail: "Orange and Yellow Rose" },
      { image: Flowers8, detail: "Red Rose Heart" },
      { image: Flowers9, detail: "Red Rose Cilinder" },
      { image: Flowers10, detail: "Red Rose Cilinder" },
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
