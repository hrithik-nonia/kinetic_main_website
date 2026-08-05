// built in imports
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// custom imports
const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const FilterPage = lazy(() => import("../pages/FilterPage.jsx"));
const ShopPage = lazy(() => import("../pages/ShopPage.jsx"));
const ProductPage = lazy(() => import("../pages/ProductPage.jsx"));

export default function AppRoutes() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
    </Suspense>
  );
}
