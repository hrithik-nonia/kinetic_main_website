// built in imports
import { ArrowLeft, ArrowRight } from "lucide-react";

// custom imports
import ProductCardForFilterPage from "../common/ProductCardForFilterPage";

export default function ProductCatelog({
  products,
  isFetching,
  totalPages,
  currentPage,
  onPageChange,
}) {
  // Kaunse page numbers dikhane hain
  const getPageNumbers = () => {
    const pages = [];
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  };

  const handlePageChange = (page) => {
    onPageChange(page); // ✅ parent ko batao
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {isFetching && (
        <p className="text-xs text-indigo-400 animate-pulse mb-3">
          Updating...
        </p>
      )}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 transition-opacity ${isFetching ? "opacity-50" : "opacity-100"}`}
      >
        {products.map((item) => (
          <ProductCardForFilterPage key={item.id} item={item} />
        ))}
      </div>

      <div className="border-t border-gray-300 py-10 flex justify-between">
        <button
          className="flex gap-1 text-[13px] hover:text-blue-600 cursor-pointer disabled:opacity-30"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ArrowLeft size={18} strokeWidth={1.5} />
          <span>Previous</span>
        </button>

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
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-colors cursor-pointer ${
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

        <button
          className="flex gap-1 text-[13px] hover:text-blue-600 cursor-pointer disabled:opacity-30"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <span>Next</span>
          <ArrowRight size={18} strokeWidth={1.5} />
        </button>
      </div>
    </>
  );
}
