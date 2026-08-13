// built in imports
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// custom imports
import Breadcrumb from "../components/common/Breadcrumb";
import FiltersSidebar from "../components/layout/FiltersSidebar";
import SortBar from "../components/layout/SortBar";
import ProductCatelog from "../components/layout/ProductCatelog";
import productService from "../services/productService";

function FilterPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // filter page ke liye
  const [filters, setFilters] = useState({
    category: undefined,
    sub_category: undefined,
    min_price: undefined,
    max_price: undefined,
    rating: undefined,
    is_on_sale: undefined,
    is_featured: undefined,
    sort: "relevance",
  });

  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["filter-products", currentPage, 12, filters], // filters change hone pe auto refetch
    queryFn: () =>
      productService.getAllProduct(
        currentPage,
        12,
        filters.category,
        filters.sub_category,
        filters.min_price,
        filters.max_price,
        filters.rating,
        filters.is_on_sale,
        filters.is_featured,
        filters.sort,
      ),
    placeholderData: (previousData) => previousData,
  });

  // filter change handler — child se call hoga
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // filter change pe reset
  };

  if (isLoading) return <div>Loading...</div>;
  return (
    <section className="bg-slate-50 px-6 py-10">
      {/* heading */}
      <div>
        <Breadcrumb />
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-5">
        {/* side bar */}
        <div className="lg:col-span-1">
          <FiltersSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            dbMaxPrice={products?.db_max_price ?? 2000}
          />
        </div>

        {/* product section */}
        <div className="lg:col-span-4">
          {/* filter tool bar */}
          <div>
            <SortBar
              sort={filters.sort}
              onSortChange={(sort) => handleFilterChange({ sort })}
              total={products?.total ?? 0}
              currentPage={currentPage}
              limit={12}
            />
          </div>

          {/* product card */}
          <div className="mt-5">
            <ProductCatelog
              products={products?.products ?? []}
              isFetching={isFetching}
              totalPages={products?.total_pages ?? 1}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FilterPage;
