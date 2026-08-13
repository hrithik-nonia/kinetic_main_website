// built in imports
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// custom imports
import HeroSection from "../components/layout/HeroSection";
import CuratedCollections from "../components/layout/CuratedCollections";
import FlashDeals from "../components/layout/FlashDeals";
import VerifiedSellers from "../components/layout/VerifiedSellers";
import TrendingNow from "../components/layout/TrendingNow";
import NewsletterBanner from "../components/layout/NewsletterBanner";
import productService from "../services/productService";

function HomePage() {
  const location = useLocation();

  // page state for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // fetch all products
  const {
    data: products,
    isLoading: productLoading,
    isFetching,
  } = useQuery({
    queryKey: ["products", currentPage, 12],
    queryFn: () => productService.getAllProduct(currentPage, 12),
    placeholderData: (previousData) => previousData,
  });

  if (productLoading) return <div>Loading...</div>;

  return (
    <section>
      {/* hero section s1 */}
      <section>
        <HeroSection />
      </section>

      <section className=" px-6 py-10 flex flex-col gap-10">
        {/* category */}
        <section>
          <CuratedCollections />
        </section>

        {/* first product section */}
        <section>
          <FlashDeals
            key={location.pathname}
            title="Flash Deals"
            products={products?.products ?? []}
            totalPages={products?.total_pages ?? 1}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            isFetching={isFetching}
          />
        </section>

        {/* best sellers list */}
        <section>
          <VerifiedSellers />
        </section>

        {/* tranding products */}
        <section>
          <TrendingNow />
        </section>

        {/* register for notification for best deal */}
        <section>
          <NewsletterBanner />
        </section>
      </section>
    </section>
  );
}
export default HomePage;
