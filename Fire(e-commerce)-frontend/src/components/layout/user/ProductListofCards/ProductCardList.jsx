import React, { useState } from "react";
import ProductCard from "../../../common/productCard/ProductCard";
import { Navigate, useNavigate } from "react-router-dom";

const ProductCardList = ({ productData }) => {
  
  return (
    <div className="p-4 mt-6">
      {/* Section Heading */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">New Arrivals</h2>
        <a href="#" className="text-blue-500 hover:underline">
          See All
        </a>
      </div>

      {/* Product Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCardList;
