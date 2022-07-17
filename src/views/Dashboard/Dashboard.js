import React from "react";
import "./Dashboard.css";
import ProductCard from "../../components/Product/ProductCard";
import {
  Cosmetic1,
  Cosmetic2,
  Cosmetic3,
  Cosmetic4,
  Cosmetic5,
  Cosmetic6,
  Cosmetic7,
  Cosmetic8,
  Cosmetic9,
  Cosmetic10,
  Facial1,
  Facial2,
  Facial3,
  Facial4,
  Facial5,
  Facial6,
  Facial7,
  Facial8,
  Facial9,
  Facial10,
  Flowers1,
  Flowers2,
  Flowers3,
  Flowers4,
  Flowers5,
  Flowers6,
  Flowers7,
  Flowers8,
  Flowers9,
  Flowers10,
  Watch1,
  Watch4,
  Watch5,
  Watch6,
  Bag1,
  Bag2,
  Bag3,
  Bag4,
  Bag5,
  Bag6,
  Bag7,
  Bag8,
  Bag9,
  Bag10,
} from "./Imports_Dashboard.js";

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
      { image: Watch1, detail: "Pink Apple SmartWatch" },

      { image: Watch4, detail: "Black Samsung SmartWatch" },
      { image: Watch5, detail: "Fitbit SmartWatch" },
      { image: Watch6, detail: "Fitbit SmartWatch Gold" },
    ],
  },
  {
    title: "Bolsos",
    images: [
      { image: Bag1, detail: "Prime Bag White" },
      { image: Bag2, detail: "Trefoil 2.0 Backpack" },
      { image: Bag3, detail: "Rifta BackPack Red" },
      { image: Bag4, detail: "Rifta BackPack Chalky Brown" },
      { image: Bag5, detail: "Rifta BackPack Black" },
      { image: Bag6, detail: "Nike Sportswear RPM" },
      { image: Bag7, detail: "Nike Sportswear Essentials" },
      { image: Bag8, detail: "Nike Elemental Premium" },
      { image: Bag9, detail: "Nike Hayward" },
      { image: Bag10, detail: "Nike Sportswear RPM" },
    ],
  },
];

function Dashboard() {
  return (
    <div className="dashboard__section" id="dashboard__section">
      <div className="dashboard__title">Productos</div>
      {productsDetails.map((element, i) => (
        <ProductCard title={element.title} images={element.images} />
      ))}
    </div>
  );
}

export default Dashboard;
