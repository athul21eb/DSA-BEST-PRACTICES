import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from "react-router-dom";
import App from "../App";

// import Homepage from "../pages/user/home/HomePage";

// import LoginPage from "../pages/LoginPage";
// import SignUpPage from "../pages/user/signUp/SignUpPage";
// import OtpValidationPage from "../pages/OtpPage";
// import ProfilePage from "../pages/user/profielPage/ProfilePage";
// import AdminLoginPage from "../pages/admin/adminlogin/AdminLoginPage";
// import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
// import AdminProducts from "../pages/admin/AdminProducts";

// import AdminBrands from "../pages/admin/AdminBrands";
// import AdminOrders from "../pages/admin/order/AdminOrders";
// import AdminSalesReport from "../pages/admin/salesReport/AdminSalesReport";
// import AdminCoupons from "../pages/admin/coupons/AdminCoupons";
// import AdminSettings from "../pages/admin/settings/AdminSettings";
// import AdminUserManagement from "../pages/admin/customers/AdminUserManagement";
// import AdminHeader from "../components/wrappers/adminHeader/AdminHeader";
// import UserHeader from "../components/wrappers/userHeader";
// import AdminProtectedRoutes from "../protectRoutes/admin/adminProtectedRoute/AdminProtectedRoutes";
// import AdminRedirectRoute from "../protectRoutes/admin/adminRedirectRoute/AdminRedirectRoute";
// import AddProduct from "../pages/admin/product/ProductEditPage";
// import ProductPage from "../pages/user/productDetails/ProductDetailsPage";
// import AdminCategory from './../pages/admin/Category/AdminCategory';

import Homepage from "../pages/user/home/HomePage";

import LoginPage from "../pages/user/Login/LoginPage";
import SignUpPage from "../pages/user/signUp/SignUpPage";
import OtpValidationPage from "../pages/user/otp/OtpPage";
import ProfilePage from "../pages/user/profile/ProfilePage";
import AdminLoginPage from "../pages/admin/adminLogin/AdminLoginPage.jsx";
import AdminDashboard from "../pages/admin/dashboard/AdminDashboard";
import AdminProducts from "../pages/admin/product/AdminProducts";

import AdminBrands from "../pages/admin/brands/AdminBrands";
import AdminOrders from "../pages/admin/order/AdminOrders";
import AdminSalesReport from "../pages/admin/salesReport/AdminSalesReport";
import AdminCoupons from "../pages/admin/coupons/AdminCoupons";
import AdminSettings from "../pages/admin/settings/AdminSettings";
import AdminUserManagement from "../pages/admin/customers/AdminUserManagement";
import AdminHeader from "../components/wrappers/adminWrapper/AdminHeaderWrapper";
import UserHeader from "../components/wrappers/userWrapper/UserHeaderWrapper";
import AdminProtectedRoutes from "../protectRoutes/admin/adminProtectedRoute/AdminProtectedRoutes";
import AdminRedirectRoute from "../protectRoutes/admin/adminRedirectRoutes/AdminRedirectRoute";
import AddProduct from "../pages/admin/product/productCreatePage/productAddPage";
import ProductPage from "../pages/user/productDetails/ProductDetailsPage.jsx";
import AdminCategory from "../pages/admin/category/AdminCategory.jsx";
import EditProductForm from "../pages/admin/product/productEditpage/ProductEditPage.jsx";
import ForgotPasswordPage from "../pages/user/forgotPassword/ForgotPasswordPage.jsx";
import ForgotOtpPage from "../pages/user/forgotPassword/ForgotOtp/ForgotOtpPage.jsx";
import SetNewPassword from "../pages/user/forgotPassword/passwordReset/PasswordReset.jsx";
import UserRedirectRoute from "../protectRoutes/user/userRedirectRoute/UserRedirectRoutes.jsx";
import UserProtectedRoutes from "../protectRoutes/user/userProtectedRoute/UserProtectedRoutes.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<UserRedirectRoute />}>
        {/* Public User Routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="otp" element={<OtpValidationPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route path="forgot-password-otp" element={<ForgotOtpPage />} />
        <Route path="password-reset" element={<SetNewPassword />} />
      </Route>

      <Route element={<UserHeader />}>
        <Route index element={<Homepage />} />
        <Route path="product-details" element={<ProductPage />} />
        <Route element={<UserProtectedRoutes />}>
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route path="admin" element={<Outlet />}>
        <Route element={<AdminRedirectRoute />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<AdminLoginPage />} />
        </Route>
        <Route element={<AdminProtectedRoutes />}>
          <Route element={<AdminHeader />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<Outlet />}>
              <Route index element={<AdminProducts />} />

              <Route path="create-product" element={<AddProduct />} />
              <Route path="edit-product" element={<EditProductForm />} />
            </Route>
            <Route path="category" element={<AdminCategory />} />
            <Route path="customers" element={<AdminUserManagement />} />
            <Route path="brands" element={<AdminBrands />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="sales-report" element={<AdminSalesReport />} />
            <Route path="coupons" element={<AdminCoupons />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

export default router;
