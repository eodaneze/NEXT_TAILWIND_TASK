import CooperateSection from "@/components/CooperateSection";
import FooterSection from "@/components/FooterSection";
import Header from "@/components/Header";
import Link from "next/link";
import React from "react";
import Hero from "./Hero";
import ShopeByPrice from "./ShopeByPrice";
import Trend from "./Product_cards";
import Product_cards from "./Product_cards";

const Products = () => {
  return (
    <>
     <Hero />
     <ShopeByPrice />
     <Product_cards />
     <CooperateSection />
     <FooterSection />
    </>
  );
};

export default Products;
