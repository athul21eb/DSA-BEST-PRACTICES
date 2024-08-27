import { useState } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className="p-4 rounded-lg shadow-xl bg-slate-100 transition-transform transform hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/product-details?id=${product._id}`)}
    >
      {/* Image with hover effect */}
      <div className="relative ">
        <img
          src={isHovered ? product.gallery[1] : product.thumbnail}
          alt={product.productName}
          className="  w-full h-48 object-contain transition-opacity duration-500"
        />
      </div>

      {/* Rating and Reviews */}
      <div className="flex items-center justify-center mt-2 text-sm">
        <FaStar className="text-yellow-400 mr-1" />
        <span className="font-semibold">4.4</span>
        <span className="text-gray-500 ml-2">|1.3k</span>
      </div>

      {/* Product Details */}
      <div className="mt-2 text-center">
        <h3 className="text-lg font-semibold truncate">{product.productName}</h3>
        <p className="text-gray-700 flex items-center justify-center">
          <BiRupee className="mr-1" />
          {product.salePrice}
        </p>

        {/* Favorite Icon */}
        <div className="absolute top-2 right-2 text-gray-600 hover:text-red-500 cursor-pointer">
          <FaHeart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
