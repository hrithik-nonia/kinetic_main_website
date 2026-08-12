// built in imports
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// custom imports lazy loading pages
const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const FilterPage = lazy(() => import("../pages/FilterPage.jsx"));
const ShopPage = lazy(() => import("../pages/ShopPage.jsx"));
const ProductPage = lazy(() => import("../pages/ProductPage.jsx"));
const DealPage = lazy(() => import("../pages/DealsPage.jsx"));
const SellerPage = lazy(() => import("../pages/SellerPage.jsx"));
const NewArivalsPage = lazy(() => import("../pages/NewArivalsPage.jsx"));
const WishListPage = lazy(() => import("../pages/WishListPage.jsx"));
const ProfilePage = lazy(() => import("../pages/ProfilePage.jsx"));
const Profile = lazy(() => import("../pages/Profile.jsx"));
const CompanyPage = lazy(() => import("../pages/CompanyPage.jsx"));
const CustomerSupport = lazy(() => import("../pages/CustomerSupport.jsx"));
const SellerCenter = lazy(() => import("../pages/SellerCenter.jsx"));
const ShippingInfo = lazy(() => import("../pages/ShippingInfo.jsx"));
const AffiliateProgram = lazy(() => import("../pages/AffiliateProgram.jsx"));
const LegalPage = lazy(() => import("../pages/LegalPage.jsx"));

// instant loading components
import KineticNavbar from "../components/layout/KineticNavbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
import { ProtectAuthForm } from "./ProtectedRoutes.jsx";

export default function AppRoutes() {
  return (
    <Suspense fallback="Loading...">
      <KineticNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/dealPage" element={<DealPage />} />
        <Route path="/sellerPage" element={<SellerPage />} />
        <Route path="/newArivalsPage" element={<NewArivalsPage />} />
        <Route path="/wishListPage" element={<WishListPage />} />

        <Route
          path="/profilePage"
          element={
            <ProtectAuthForm>
              <ProfilePage />
            </ProtectAuthForm>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/company" element={<CompanyPage />} />

        <Route path="/support" element={<CustomerSupport />} />
        <Route path="/seller-center" element={<SellerCenter />} />
        <Route path="/shipping-info" element={<ShippingInfo />} />
        <Route path="/affiliate-program" element={<AffiliateProgram />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>

      <Footer />
    </Suspense>
  );
}
