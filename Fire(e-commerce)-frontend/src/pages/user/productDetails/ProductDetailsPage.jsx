import React, { useEffect, useState } from "react";
import Magnifier from "react-magnifier";

import { useParams, useNavigate, Link, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";

const ProductDetailsPage = () => {

	
	const [product, setProduct] = useState(null);
	const [mainImage, setMainImage] = useState("");
	const [loading, setLoading] = useState(true);
	const [selectSize, setSelectSize] = useState(null);
	

	const [error, setError] = useState("");
	const dispatch = useDispatch();
  const location = useLocation(); // This will give you access to the location object
  
  // Create an instance of URLSearchParams to parse the query string
  const queryParams = new URLSearchParams(location.search);
  
  // To get a specific query parameter value
  const id = queryParams.get('id'); 
	const navigate = useNavigate();

	console.log("is in cart", isInCart);

	const checkIsInCart = () => {
		return cartItems.items?.some((item) => item.productId._id === product?._id);
	};

	useEffect(() => {
		if (user) {
			dispatch(getCarItems());
		}
	}, [dispatch]);

	useEffect(() => {
		if (product && cartItems.items) {
			setIsInCart(checkIsInCart());
		}
	}, [product, cartItems]);

	const handleAddToCart = async () => {
		if (!selectSize) {
			setError("Please select size");
			return;
		}
		setError("");
		try {
			dispatch(
				addCartItems({
					productId: product._id,
					size: selectSize,
				})
			);
			toast.success("Added to cart successfully");
			setIsInCart(!isInCart);
		} catch (error) {
			console.log(error);
			toast.error("Faild to add");
		}
	};
	useEffect(() => {
		fetchProductDetails();
	}, [id]);

	useEffect(() => {
		dispatch(getWishlist(userId));
	}, [dispatch, userId]);

	useEffect(() => {
		if (product) {
			setIsInWishlist(wishlist.some((item) => item._id === product._id));
		}
	}, [wishlist, product]);

	const [isInWishlist, setIsInWishlist] = useState(false);
	console.log("is in wishlist", isInWishlist);

	const handleWish = () => {
		if (!userId) {
			toast.error("Please log in to add items to your wishlist.");
			navigate("/login");
			return;
		}

		dispatch(handleWishlist({ userId, productId: product._id })).then(() => {
			setIsInWishlist(!isInWishlist);
		});
	};

	const fetchProductDetails = async () => {
		try {
			const response = await api.get(`/product/productDetails/${id}`);
			if (response?.data?.productsDetails) {
				setProduct(response.data.productsDetails);
				setMainImage(response.data.productsDetails?.gallery[0]);
				setLoading(false);
			} else {
				console.error("Product details not found in response:", response);
			}
		} catch (error) {
			console.error("Error fetching product details:", error);
			setLoading(false);
		}
	};

	const handleThumbnailClick = (imageSrc) => {
		setMainImage(imageSrc);
	};

	return (
		<>
			<div className="mb-8">
				<h2 className="text-2xl font-bold">Product Details</h2>
				<span className="text-gray-600 font-semibold">
					Home / Product Details / {product?.gender}
				</span>
			</div>
			<div className="container mx-auto p-4 max-w-screen-lg">
				<div className="flex flex-col md:flex-row md:space-x-4">
					<div className="flex flex-wrap md:flex-col md:space-y-2 space-x-2 md:space-x-0">
						{product?.gallery.map((image, index) => (
							<img
								key={index}
								src={image}
								alt={`Thumbnail ${index + 1}`}
								className="w-32 h-36 object-cove