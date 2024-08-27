import React, { useState } from "react";

import { useLazyGetAllBrandsListQuery } from "../../../../slices/public/PublicApiSlice";
import { toast } from "react-toastify";

const PopularBrands = () => {
  const [triggerBrandsList] = useLazyGetAllBrandsListQuery();

  const [brandDetails, setBrandDetails] = useState([]);

  const fetchingAllBrands = async () => {
    try {
      const response = await triggerBrandsList().unwrap();

      
      if (response) {
        const { brands } = response; 
        setBrandDetails(brands);
      }


    } catch (err) {
      // Display error message in case of failure
      toast.error(err?.data?.message || err?.error);
      console.error(err);
    }
  };

  useState(() => {
    fetchingAllBrands();
  }, []);
  return (
    <div className="mx-auto sm:mx-1r0 max-w-full px-4 sm:px-4 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Popular Brands</h2>
        <button className="text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
  
      {/* Brand Images */}
      <div className="flex space-x-3 sm:space-x-4 md:space-x-6 overflow-x-auto pb-4 sm:pb-6 mb-6 hide-scrollbar snap-x snap-mandatory scroll-smooth">
        {brandDetails.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-gray-400 rounded-full flex items-center justify-center snap-start"
          >
            <img
              src={brand?.brandPhotoUrl}
              alt={brand?.brandName || `Brand ${index + 1}`}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default PopularBrands;
 {/* <div className="relative overflow-hidden rounded-xl">
        <img
          src={bannerImg}
          alt="Sneaker"
          className="w-full h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[36rem] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center pl-8 sm:pl-12 md:pl-16 lg:pl-20 text-white">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">
            Limited time only
          </p>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-8xl font-extrabold mb-3 sm:mb-4 md:mb-6 leading-tight">
            Get 30% off
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-md lg:max-w-lg xl:max-w-xl">
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </p>
        </div>
      </div> */}