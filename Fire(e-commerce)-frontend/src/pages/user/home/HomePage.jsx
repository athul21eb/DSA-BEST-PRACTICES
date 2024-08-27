import { useLazyGetAllProductListQuery } from "../../../slices/public/PublicApiSlice";

import PopularBrands from "../../../components/layout/user/popularBrands/PopularBrands";
import Banner from "../../../components/layout/user/banners/Banner";
import ProductList from "../../../components/layout/user/ProductListofCards/ProductCardList.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../../../components/layout/user/userFooter/Footer.jsx";

const Homepage = () => {
  const [triggerProductList] = useLazyGetAllProductListQuery();

  useEffect(() => {
    triggerProductList();
  },[triggerProductList]);

const {products} = useSelector(state=>state.public);

  const productData = [
    {
      id: 1,
      title: "Nike Mercurial Superfly 9 Elite",
      price: "₹ 28,000",
      rating: 4.4,
      reviews: 118,
      defaultImg: "/path/to/default-image-1.jpg", // Replace with actual image paths
      hoverImg: "/path/to/hover-image-1.jpg",
    },
    {
      id: 2,
      title: "X CRAZYFAST.1 FIRM",
      price: "₹ 29,000",
      rating: 4.4,
      reviews: 118,
      defaultImg: "/path/to/default-image-2.jpg",
      hoverImg: "/path/to/hover-image-2.jpg",
    },
    {
      id: 1,
      title: "Nike Mercurial Superfly 9 Elite",
      price: "₹ 28,000",
      rating: 4.4,
      reviews: 118,
      defaultImg: "/path/to/default-image-1.jpg", // Replace with actual image paths
      hoverImg: "/path/to/hover-image-1.jpg",
    },
    {
      id: 2,
      title: "X CRAZYFAST.1 FIRM",
      price: "₹ 29,000",
      rating: 4.4,
      reviews: 118,
      defaultImg: "/path/to/default-image-2.jpg",
      hoverImg: "/path/to/hover-image-2.jpg",
    },
    {
      id: 1,
      title: "Nike Mercurial Superfly 9 Elite",
      price: "₹ 28,000",
      rating: 4.4,
      reviews: 118,
      defaultImg: "/path/to/default-image-1.jpg", // Replace with actual image paths
      hoverImg: "/path/to/hover-image-1.jpg",
    },
    {
      id: 2,
      title: "X CRAZYFAST.1 FIRM",
      price: "₹ 29,000",
      rating: 4.4,
      reviews: 118,
      defaultImg: "/path/to/default-image-2.jpg",
      hoverImg: "/path/to/hover-image-2.jpg",
    },
    {
      id: 1,
      title: "Nike Mercurial Superfly 9 Elite",
      price: "₹ 28,000",
      rating: 4.4,
      reviews: 118,
      defaultImg: "/path/to/default-image-1.jpg", // Replace with actual image paths
      hoverImg: "/path/to/hover-image-1.jpg",
    },
    {
      id: 2,
      title: "X CRAZYFAST.1 FIRM",
      price: "₹ 29,000",
      rating: 4.4,
      reviews: 118,
      defaultImg: "/path/to/default-image-2.jpg",
      hoverImg: "/path/to/hover-image-2.jpg",
    },
    // Add more products similarly...
  ];

  return (
    <>
    <div className="px-4 pt-6 sm:px-6 lg:px-8">
      <PopularBrands />
      <Banner bannerImg={"./Banner1.svg"} />
      <ProductList productData={products} />
      <Banner bannerImg={"./banner1.png"}/>
     
    </div>
     <Footer/>
     </>
  );
};

export default Homepage;
