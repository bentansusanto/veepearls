"use client";
import Layouts from "@/components/Layout/Layouts";
import JewelryProducts from "@/components/PearlProducts";
import { jewerlyType, productJewerly } from "@/libs/ProductData/ProductData";
import React from "react";

const TypeJewelry = ({ params }: { params: { type: string } }) => {
  const type = params.type;
  const products = productJewerly.filter(
    (product) => product.slug_type.toLowerCase() === type,
  );

  const filteredType = jewerlyType.filter((list) => list.type.toLowerCase() === type.toLowerCase()) 
  console.log(filteredType)
  return (
    <Layouts>
      <JewelryProducts product={products} typeJewelry={filteredType}/>
      {/* <p className="text-white">Success get jewelry</p> */}
    </Layouts>
  )
};

export default TypeJewelry;
