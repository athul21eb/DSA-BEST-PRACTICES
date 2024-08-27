import Products from "../../models/products/products-model.js";
import BrandModel from "../../models/brand/brand-model.js";
import expressAsyncHandler from "express-async-handler";

//-------------------------------route => GET/get-products----------------------------------------------
///* @desc   Get all products
///? @access

export const getAllProducts = expressAsyncHandler(async (req, res) => {
  const products = await Products.find({
    deletedAt: { $exists: false },
    isActive: true,
  })
  .populate({
    path: "category",
    match: { isActive: true }, // Ensure the category is active
  })
  .populate({
    path: "brand",
    match: { isActive: true }, // Ensure the brand is active
  });
  

  if (!products.length) {
    res.status(404);
    throw new Error("No products found");
  }

  res.status(200).json({
    message: "Products retrieved successfully",
    products,
  });
});

////-------------------------------route => GET/get-brands----------------------------------------------
///* @desc   Get all brands
///? @access

export const getAllBrands = expressAsyncHandler(async (req, res) => {
  const allBrands = await BrandModel.find({
    deletedAt: { $exists: false },
    isActive: true,
  });

  if (!allBrands.length) {
    res.status(404);
    throw new Error("No brands found");
  }

  res.status(200).json({
    message: "Brands retrieved successfully",
    brands: allBrands,
  });
});
