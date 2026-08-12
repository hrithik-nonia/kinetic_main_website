// built in imports
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Timer } from "lucide-react";

// custom imports
import ProductCard from "../common/ProductCard";
import UseCountdown from "../common/UseCountdown";
import ProductCardForFilterPage from "../common/ProductCardForFilterPage";
import { ProductDataForFilterPage } from "../../utils/constant";

export default function FlashDeals({
  title,
  products,
  totalPages,
  currentPage,
  onPageChange,
  isFetching,
}) {
  // pages
  const [localPage, setLocalPage] = useState(0);

  // ik page per 4 card desplay
  const visibleCount = 4;

  //
  const [hours, minutes, seconds] = UseCountdown(4 * 3600 + 22 * 60 + 19);

  const location = useLocation();
  const showHomeContent = location.pathname === "/"; // ✅ pehle define karo
  const showLikedProductCount = location.pathname === "/wishListPage";

  // ab yeh use karo
  const activeData = showHomeContent
    ? (products ?? [])
    : ProductDataForFilterPage;
  const localMaxPage = Math.ceil(activeData.length / visibleCount) - 1;
  const visible = activeData.slice(
    localPage * visibleCount,
    localPage * visibleCount + visibleCount,
  );

  const handleNext = () => {
    if (localPage < localMaxPage) {
      setLocalPage((p) => p + 1);
    } else if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      setLocalPage(0);
    }
  };

  const handlePrev = () => {
    if (localPage > 0) {
      setLocalPage((p) => p - 1);
    } else if (currentPage > 1) {
      onPageChange(currentPage - 1);
      setLocalPage(0);
    }
  };

  const isNextDisabled =
    localPage === localMaxPage && currentPage === totalPages;
  const isPrevDisabled = localPage === 0 && currentPage === 1;

  return (
    <>
      <div className="bg-slate-50 py-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 ">
          <div className="flex items-center gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

              {/* ✅ subtle fetching indicator */}
              {isFetching && (
                <span className="text-xs text-indigo-400 animate-pulse">
                  Loading...
                </span>
              )}

              {showLikedProductCount && (
                <h3 className="text-[13px] text-gray-600">4 items saved</h3>
              )}
            </div>

            {/* Timer badge */}
            {showHomeContent && (
              <div className="flex items-center gap-1.5 bg-amber-500 text-white text-sm font-semibold px-3 py-1.5 rounded-full">
                <Timer size={14} />
                <span>
                  {hours} : {minutes} : {seconds}
                </span>
              </div>
            )}
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-30 transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-indigo-400 hover:text-indigo-600 disabled:opacity-30 transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-opacity ${isFetching ? "opacity-50" : "opacity-100"}`}
        >
          {visible.map((item) =>
            showHomeContent ? (
              // all products , home page
              <ProductCard key={item.id} product={item} />
            ) : (
              <ProductCardForFilterPage key={item.id} item={item} />
            ),
          )}
        </div>
      </div>
    </>
  );
}
