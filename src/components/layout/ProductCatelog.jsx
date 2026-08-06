// built in imports
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

// custom imports
import ProductCardForFilterPage from "../common/ProductCardForFilterPage";
import { ProductDataForFilterPage } from "../../utils/constant";

export default function ProductCatelog() {
  const ITEMS_PER_PAGE = 8; // ek page pe kitne products

  const [currentPage, setCurrentPage] = useState(1);

  // current page ke products nikalo
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = ProductDataForFilterPage.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  // totalPages bhi data se calculate karo
  const totalPages = Math.ceil(
    ProductDataForFilterPage.length / ITEMS_PER_PAGE,
  );

  // Kaunse page numbers dikhane hain
  const getPageNumbers = () => {
    const pages = [];

    pages.push(1); // hamesha first page

    if (currentPage > 3) pages.push("..."); // left ellipsis

    // current ke aas paas wale pages
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("..."); // right ellipsis

    pages.push(totalPages); // hamesha last page

    return pages;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // ✅ page change pe upar
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
        {currentProducts.map((item) => (
          <ProductCardForFilterPage key={item.id} item={item} />
        ))}
      </div>

      <div className="border-t border-gray-300 py-10 flex justify-between">
        {/* move to pervious */}
        <button
          className="flex gap-1 text-[13px] hover:text-blue-600 cursor-pointer"
          disabled={currentPage === 1}
          onClick={() => handlePageChange((p) => p - 1)}
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          <span>Previous</span>
        </button>

        {/* page number ke liya */}
        <div className="flex items-center gap-2">
          {getPageNumbers().map((page, idx) =>
            page === "..." ? (
              <span
                key={`ellipsis-${idx}`}
                className="text-sm text-gray-400 px-1"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors cursor-pointer
                  ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            ),
          )}
        </div>

        {/* move to next */}
        <button
          className="flex gap-1 text-[13px] hover:text-blue-600 cursor-pointer"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange((p) => p + 1)}
        >
          <span>Next</span>
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>
      </div>
    </>
  );
}
